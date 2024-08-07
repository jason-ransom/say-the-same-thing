import type { NextApiRequest, NextApiResponse } from 'next';
import {EXTERNAL_URLS} from "@/endpoints";
import {ErrorResponse, RandomWordResponse} from "@/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await fetch(EXTERNAL_URLS.RANDOM_WORD);
        const data = await response.json();

        res.status(200).json({ word: data[0] } as RandomWordResponse);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch the word' } as ErrorResponse);
    }
}