interface FilterOperators {
  operator: validOperators,
  search: string,
}

type validOperators = '=' | '!=' | '~' |
  '<' | '<=' | 
  '>' | '>=';


// maps to titles.titles
export type validTitleTypeOpts = 'any' | 
  'Film' | 'Series' | 'Mini-Series' | 
  'Format' | 'Seasons' | 'Episodes';

// maps to contracts.contract_type
export type validContractTypeOpts = 'any' | 'Sales' | 'Acquisition';

// maps to contracts.status
export type validContractStatusOpts = 'any' | 
  'Normal' | 'Cancelled' | 'Internal';

// maps to contracts.deal_status
export type validDealStatusOpts = 'any' | 
  'Long Form Executed' | 'In Negotiation' | 
  'Deal Memo Executed' | 'Cancelled' | 'Awaiting Signature';

// titles.status
export type validProductionStatusOpts = 'any' | 
  'Completed' | 
  'Pre-Production' | 'Post-Production' | 'Production' | 
  'Development' | 'Catalog';


// TODO: check column
// maps to contracts.deal_type ?? 
export type validDealTypeOpts = 'any' | 
  'Acquired Content' | 'Representation Only' | 'Produced Content';
// type validDealTypeOpts = 'Co-Production' | 'Flat Fee' | '[MG] [++MG]' | 'Minimum Guarantee' | 'Output Agrmnt' | 'Production / License Agrmnt' | '[Royalties/Revenue Share]' | 'Straight Distribution' | 'Volume Deal';


export interface ContractFilter {
  titleType: {
    operator: validOperators,
    search: validTitleTypeOpts,
  },
  title: {
    operator: validOperators,
    search: string,
  },
  contractType: {
    operator: validOperators,
    search: validContractTypeOpts,
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
    search: validContractStatusOpts,
  },
  dealStatus: {
    operator: validOperators,
    search: validDealStatusOpts,
  },
  productionStatus: {
    operator: validOperators,
    search: validProductionStatusOpts,
  },
  dealType: {
    operator: validOperators,
    search: validDealTypeOpts,
  },
}
