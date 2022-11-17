import pool from '@/utils/pool';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: Data[] }>
) {

  try {
    const result = await pool.query("SELECT * FROM contracts LIMIT 20;");
    res.status(200).json({ data: result.rows });


  } catch (err: any) {
    res.status(400).json(err);
  }

}

