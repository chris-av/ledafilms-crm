import pool from '@/utils/pool';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id: contract_id } = req.query;
    const result = await pool.query("SELECT * FROM contracts where id = $1", [ contract_id ]);
    res.status(200).json({ data: result.rows });
  } catch (err: any) {
    res.status(400).json(err);
  }
}


