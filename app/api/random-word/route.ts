import { EXTERNAL_URLS } from '@/endpoints';
import { ErrorResponse, RandomWordResponse } from '@/types';

// cache requests for 0 seconds
export const revalidate = 0;

export async function GET() {
  try {
    const response = await fetch(EXTERNAL_URLS.RANDOM_WORD);
    const data = await response.json();

    return Response.json({ word: data[0] } as RandomWordResponse);
  } catch (error) {
    return Response
      .json({ error: 'Failed to fetch the word' } as ErrorResponse, { status: 500 });
  }
}
