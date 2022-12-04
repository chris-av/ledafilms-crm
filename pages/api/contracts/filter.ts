import Models from '@/db/models';
const { Contract } = Models;
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ message: 'Only POST requests allowed on this route' });
      return;
    }

    const filter = req.body;

    res.status(200).json({ message: 'success!', data: req.body });


  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
}



