import Models from '@/db/models';
const { Contract } = Models;
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id: contract_id } = req.query;
    const result = await Contract.findOne({
      where: {
        contract_id
      }
    });
    res.status(200).json({ data: result });
  } catch (err: any) {
    res.status(400).json(err);
  }
}

