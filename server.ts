import 'dotenv/config';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { chatReply, submitLead, type LeadPayload } from './src/server/leadRouting';
import { checkRateLimit } from './src/server/requestProtection';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT || 3000);

  app.disable('x-powered-by');
  app.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    next();
  });
  app.use(express.json());
  app.use((error: { type?: string }, _req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (error.type === 'entity.parse.failed') {
      return res.status(400).json({ success: false, error: 'Invalid JSON request body.' });
    }
    return next(error);
  });

  app.get('/industries/bail-bonds', (_req, res) => {
    res.redirect(308, '/what-we-build');
  });

  app.get('/privacy', (_req, res) => {
    res.redirect(308, '/privacy-policy');
  });

  app.post('/api/leads', async (req, res) => {
    const limit = checkRateLimit(req, 'lead', 8, 15 * 60 * 1000);
    if (!limit.allowed) {
      res.setHeader('Retry-After', String(limit.retryAfterSeconds));
      return res.status(429).json({ success: false, error: 'Too many requests. Please try again later.' });
    }
    const result = await submitLead(req.body as LeadPayload);
    res.status(result.status).json(result.body);
  });

  app.post('/api/chat', async (req, res) => {
    const limit = checkRateLimit(req, 'chat', 30, 10 * 60 * 1000);
    if (!limit.allowed) {
      res.setHeader('Retry-After', String(limit.retryAfterSeconds));
      return res.status(429).json({ success: false, error: 'Too many requests. Please try again later.' });
    }
    const result = await chatReply(req.body?.message);
    res.status(result.status).json(result.body);
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
