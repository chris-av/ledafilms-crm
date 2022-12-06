interface FilterOperators {
  operator: string,
  search: string,
}

export interface ContractFilter {
  titleType: {
    operator: string,
    search: string,
  },
  title: {
    operator: string,
    search: string,
  },
  contractType: {
    operator: string,
    search: string,
  },
  contractId: {
    operator: string,
    search: string,
  },
  licensor: {
    operator: string,
    search: string,
  },
  distributor: {
    operator: string,
    search: string,
  },
  territory: {
    operator: string,
    search: string,
  },
  right: {
    operator: string,
    search: string,
  },
  contractStatus: {
    operator: string,
    search: string,
  },
  dealStatus: {
    operator: string,
    search: string,
  },
  productionStatus: {
    operator: string,
    search: string,
  },
}
