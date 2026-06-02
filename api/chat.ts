import { chatReply, clean } from '../src/server/leadRouting';

type ApiRequest = {
  method?: string;
  body?: unknown;
};

type ApiResponse = {
  setHeader: (name: string, value: string | string[]) => void;
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
  end: (body?: string) => void;
};

function parseMessage(body: unknown) {
  if (typeof body === 'string') {
    try {
      return clean((JSON.parse(body) as { message?: unknown }).message, 800);
    } catch {
      return '';
    }
  }
  if (body && typeof body === 'object') return clean((body as { message?: unknown }).message, 800);
  return '';
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  res.setHeader('Allow', ['POST', 'OPTIONS']);

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Method not allowed' });
    return;
  }

  const result = await chatReply(parseMessage(req.body));
  res.status(result.status).json(result.body);
}
