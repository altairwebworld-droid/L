import { submitLead, type LeadPayload } from '../src/server/leadRouting';

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

function parseBody(body: unknown): LeadPayload {
  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as LeadPayload;
    } catch {
      return {};
    }
  }
  if (body && typeof body === 'object') return body as LeadPayload;
  return {};
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

  const result = await submitLead(parseBody(req.body));
  res.status(result.status).json(result.body);
}
