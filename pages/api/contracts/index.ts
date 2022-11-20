import pool from '@/utils/pool';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: Data[] }>
) {


  const all_cols = [
    'contract_id', 'status', 'licensor',
    'distributor', 'mg'
  ];

  const foundCols = all_cols.filter(c => Object.keys(req.query).includes(c));


  if (foundCols.length == 0) {
    const result = await pool.query("SELECT * FROM contracts LIMIT 20;");
    res.status(200).json({ data: result.rows });
    return;
  }


  const query = [
    "SELECT * FROM contracts WHERE",
    foundCols.map((c, i) => `${c} = $${i+1}`).join(' AND ')
  ].join(' ');
  const result = await pool.query(query, foundCols);
  console.log({ query, foundCols });
  res.status(200).json({ data: result.rows });




}

