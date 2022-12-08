import Models from '@/db/models';
const { Contract } = Models;
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const result = await Contract.findAll({
      limit: 50,
      offset: 0,
    });
    res.status(200).json({ data: result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
}

