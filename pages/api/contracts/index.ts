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


    res.status(200).json({ data: contractsArr });

  } catch (err: any) {
    res.status(400).json(err);
  }

}

