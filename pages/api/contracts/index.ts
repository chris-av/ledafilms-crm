import pool from '@/utils/pool';
import { contractsArr } from '@/data/contract.prototype.data';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: Data[] }>
) {

  try {
    // TODO: replace this with actual query result from database
    // const result = await pool.query("SELECT * FROM contracts LIMIT 3;");
    // res.status(200).json({ data: result.rows });


    res.status(200).json({ data: contractsArr });

  } catch (err: any) {
    res.status(400).json(err);
  }

}

