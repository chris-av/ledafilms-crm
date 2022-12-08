import { ContractFilter } from '@/utils/interfaces';

export const filterState : ContractFilter = {
  titleType: {
    operator: '=',
    search: 'any',
  },
  title: {
    operator: '~',
    search: '',
  },
  contractType: {
    operator: '=',
    search: 'any',
  },
  contractId: {
    operator: '~',
    search: '',
  },
  licensor: {
    operator: '~',
    search: '',
  },
  distributor: {
    operator: '~',
    search: '',
  },
  territory: {
    operator: '~',
    search: '',
  },
  right: {
    operator: '~',
    search: '',
  },
  contractStatus: {
    operator: '=',
    search: 'any',
  },
  dealStatus: {
    operator: '=',
    search: 'any',
  },
  productionStatus: {
    operator: '=',
    search: 'any',
  },
  dealType: {
    operator: '=',
    search: 'any'
  }
}
