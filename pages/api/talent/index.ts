import Models from '@/db/models';
const { Talent } = Models;
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await Talent.findAll();
    res.status(200).json({ data: result });
  } catch (err: any) {
    res.status(400).json(err);
  }
}

