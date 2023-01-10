export interface IContract {
  contract_type: string,
  licensor: string,
  distributor: string,
  status: string,
  deal_status: string,
  creation_date: string,
  deal_type: string,
  mg: number,
  cur: string,
  additional_terms: any,
  notes: string,
  contract_id: string,
}



export interface IContracts extends Array<IContract>{};

