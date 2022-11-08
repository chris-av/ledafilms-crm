export enum ContractTypes {
  Sales = "sales",
  Acquisition = "acquisition"
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
  territory: string,
  right: string,
  license_type: string,
  start_date: string,
  end_date: string,
  start_confirmed: string,
  end_confirmed: string,
  unique_id: string,
  contract_id: string,
}



export interface IContracts extends Array<IContract>{};


