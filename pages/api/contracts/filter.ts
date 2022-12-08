import Models from '@/db/models';
const { Contract } = Models;
import { Op } from 'sequelize';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ContractFilter } from '@/utils/interfaces';



export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ message: 'Only POST requests allowed on this route' });
      return;
    }

    const filter : ContractFilter = req.body;

    type filterKeys = "titleType" | "title" | "contractType" | "contractId" | "licensor" | "distributor" | "territory" | "right" | "contractStatus" | "dealStatus" | "productionStatus" | "dealType";

    // TODO: how to suppress typescript error?
    Object.keys(filter).forEach((key) => {
      if (filter[key as filterKeys].search === 'any') {
        delete filter[key as filterKeys];
      }
    });

    // TODO: use utility to transform above into valid sequelize query

    console.log(filter);

    // const result = await Contract.findAll({
    //   where: {
    //     contract_id: {
    //       [Op.iLike]: filter.contractId,
    //     }
    //   }
    // });

    res.status(200).json({ message: 'success!', data: filter });


  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
}



