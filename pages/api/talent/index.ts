import pool from '@/utils/pool';
import { ITalent } from '@/utils/interfaces';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: ITalent[] }>
) {

  try {
    const result = await pool.query("SELECT * FROM talent LIMIT 100;");
    const talent : ITalent[] = result.rows;
    res.status(200).json({ data: talent });
  } catch (err: any) {
    res.status(400).json(err);
  }

}

