import Models from '@/db/models';
const { OpenWindow } = Models;
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id: contract_id } = req.query;
    console.log({ contract_id });
    const result = await OpenWindow.findAll({
      where: {
        contract_id
      },
      limit: 50,
      offset: 0,
    });
    res.status(200).json({ data: result });
  } catch (err: any) {
    res.status(400).json(err);
  }
}

