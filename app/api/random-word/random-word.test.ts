import { GET } from './route';
import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks } from 'node-mocks-http';
import { vi, describe, it, Mock, expect } from 'vitest';

describe('/api/random-word API Endpoint', () => {
  it('should return a random word on success', async () => {
    const { req } = createMocks<NextApiRequest, NextApiResponse>();
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(['testword']),
      }),
    ) as Mock;

    const res = await GET(req);

   const json = await res.json();

    expect(res.status).toBe(200);
    expect(json).toEqual({ word: 'testword' });
  });

  it('should return an error message on fetch failure', async () => {
    const { req } = createMocks<NextApiRequest, NextApiResponse>();
    global.fetch = vi.fn(() => Promise.reject('API is down')) as Mock;

    const res = await GET(req);
    const json = await res.json();

    expect(res.status).toBe(500);
    expect(json).toEqual({ error: 'Failed to fetch the word' });
  });
});
