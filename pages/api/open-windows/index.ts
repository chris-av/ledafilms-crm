import Models from '@/db/models';
const { OpenWindow } = Models;
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // if no parameters were passed
    const result = await OpenWindow.findAll({
      limit: 50,
      offset: 0,
    });
    res.status(200).json({ data: result });
  } catch (err: any) {
    res.status(400).json(err);
  }
}

