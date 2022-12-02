import Models from '@/db/models';
const { Title } = Models;
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id: unique_id } = req.query;
    const result = await Title.findOne({
      where: {
        unique_id
      }
    });
    res.status(200).json({ data: result });
  } catch (err: any) {
    res.status(400).json(err);
  }
}

