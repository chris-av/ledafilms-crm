import Models from '@/db/models';
const { Contract } = Models;
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const tmp = req.query.offset as string;
    const offset = parseInt(tmp) || 0;
    console.log({ offset });
    const result = await Contract.findAll({
      limit: 50,
      offset,
    });
    res.status(200).json({ data: result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
}

