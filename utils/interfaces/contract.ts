export enum ContractTypes {
  Sales = "Sales",
  Acquisition = "Acquisition"
}

export enum ContractDealStatuses {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending",
  Executed = "executed",
}

export enum ContractStatuses {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending",
  Executed = "executed",
}

export enum DealTypes {
  Movie = "movie",
  ShortFilm = "shortfilm",
  Skit = "skit",
}

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

  // territory: string,
  // right: string,
  // license_type: string,
  // start_date: string,
  // end_date: string,
  // start_confirmed: string,
  // end_confirmed: string,
  // unique_id: string,

}



export interface IContracts extends Array<IContract>{};


