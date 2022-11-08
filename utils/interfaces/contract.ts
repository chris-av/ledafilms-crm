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

export interface Contract {
  contractType: ContractTypes,
  contractNumber: string,
  licensor: string,
  licensee: string,
  dealStatus: ContractDealStatuses,
  status: ContractStatuses,
  dealType: DealTypes,
  effectiveDate: Date,
  mg: string,
  currency: string,
  additonalTerms: string,
  notes: string,
}


