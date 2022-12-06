import { ContractFilter } from '@/utils/interfaces';

export const filterState : ContractFilter = {
  titleType: {
    operator: '=',
    search: 'Film',
  },
  title: {
    operator: '~',
    search: '=',
  },
  contractType: {
    operator: '=',
    search: 'Sales',
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
    search: 'Long Form Executed',
  },
  dealStatus: {
    operator: '=',
    search: 'Normal',
  },
  productionStatus: {
    operator: '=',
    search: 'Normal',
  },
}
