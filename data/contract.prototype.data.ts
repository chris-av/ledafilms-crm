import {
  Contract, 
  ContractTypes,
  ContractDealStatuses,
  ContractStatuses,
  DealTypes,
} from '@/utils/interfaces';



export const contractGeneric : Contract = {
  contractType: ContractTypes.Sales,
  contractNumber: '#asdfd2221',
  licensor: 'Paramount',
  licensee: 'YouTube',
  dealStatus: ContractDealStatuses.Active,
  status: ContractStatuses.Active,
  dealType: DealTypes.Movie,
  effectiveDate: new Date(),
  mg: '',
  currency: '',
  additonalTerms: '',
  notes: '',
}


export const contractsArr : Contract[] = Array(20).fill(contractGeneric);

