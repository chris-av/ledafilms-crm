interface FilterOperators {
  operator: validOperators,
  search: string,
}

type validOperators = '=' | '!=' | '~' |
  '<' | '<=' | 
  '>' | '>=';


export interface ContractFilter {
  titleType: {
    operator: validOperators,
    search: string,
  },
  title: {
    operator: validOperators,
    search: string,
  },
  contractType: {
    operator: validOperators,
    search: string,
  },
  contractId: {
    operator: validOperators,
    search: string,
  },
  licensor: {
    operator: validOperators,
    search: string,
  },
  distributor: {
    operator: validOperators,
    search: string,
  },
  territory: {
    operator: validOperators,
    search: string,
  },
  right: {
    operator: validOperators,
    search: string,
  },
  contractStatus: {
    operator: validOperators,
    search: string,
  },
  dealStatus: {
    operator: validOperators,
    search: string,
  },
  productionStatus: {
    operator: validOperators,
    search: string,
  },
}
