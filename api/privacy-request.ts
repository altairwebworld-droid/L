import { submitPrivacyRequest, type PrivacyRequestPayload } from '../src/server/privacyRequests';
import { checkRateLimit } from '../src/server/requestProtection';

type ApiRequest = {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
};

type ApiResponse = {
  setHeader: (name: string, value: string | string[]) => void;
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
  end: (body?: string) => void;
};

function parseBody(body: unknown): PrivacyRequestPayload {
  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as PrivacyRequestPayload;
    } catch {
      return {};
    }
  }
  return body && typeof body === 'object' ? body as PrivacyRequestPayload : {};
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader('Allow', ['POST', 'OPTIONS']);
  if (req.method === 'OPTIONS') return void res.status(204).end();
  if (req.method !== 'POST') return void res.status(405).json({ success: false, error: 'Method not allowed' });

  const limit = checkRateLimit(req, 'privacy-request', 5, 15 * 60 * 1000);
  if (!limit.allowed) {
    res.setHeader('Retry-After', String(limit.retryAfterSeconds));
    return void res.status(429).json({ success: false, error: 'Too many requests. Please try again later.' });
  }

  const result = await submitPrivacyRequest(parseBody(req.body));
  return void res.status(result.status).json(result.body);
}
