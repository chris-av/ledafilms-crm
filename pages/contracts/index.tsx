import { useState } from 'react';
import {
  IContract, ContractFilter,

  ContractTypes, TitleTypes, 
  ContractStatuses, DealStatuses,
  ProductionStatuses, 
  // DealTypes, // Are these the real deal types? Reconcile with figma mockup
  TitleCodes,
} from '@/utils/interfaces';
import { initialFilterState } from '@/data/filter-state.data';
import Link from 'next/link';
import api from '@/utils/api';
import Dropdown from '@/components/Dropdown';
import MagnifyingGlass from '@/components/icons/MagnifyingGlass';



export function Contracts({ _contracts } : { _contracts: IContract[] }) {

  const contracts = _contracts;

  const [ filter, setFilter ] = useState(initialFilterState);

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setFilter(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      }
    });
  }


  const formatAmount = (amount: number, currency: string) : string => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    });
    return formatter.format(amount);
  }


  // TODO: make POST request to database to update record
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const makeRequest = async () => {

      // const requestUrl = "/api/contracts/" + new URLSearchParams(filter);
      // console.log({ requestUrl });
      return;

    }

    makeRequest();

    return;

  }

  const resetFilters = () => setFilter(initialFilterState);

  return (
    <div className="w-full">
      <h1 className="text-center mb-8">Contracts</h1>

      {/* implement search */}
      <form onSubmit={handleSubmit} className="bg-gray-100 w-full my-10 py-4 shadow-md rounded px-8 mb-4">

        <h2 className="text-center mb-8">Contract filter</h2>

        <div className="grid grid-rows-6 grid-flow-col auto-cols-[60%_40%] gap-2 mx-3 mb-6">

          <div className="flex items-center px-3 h-10">
            <label className="w-3/12 block uppercase tracking-wide text-gray-700 text-xs font-bold">Title</label>
            <div className="w-2/12 h-full text-center bg-gray-200 py-1 mr-2 rounded">
              <Dropdown
                name="titleType"
                value={filter.titleType}
                options={[
                  { label: '(any)', value: '' },
                  ...TitleTypes.map(type => {
                    return {
                      label: type,
                      value: type,
                    }
                  })
                ]}
                callback={handleChange}
              />
            </div>
            <span className="h-full flex justify-between items-center w-7/12 bg-gray-200 text-gray-700 border border-gray-200 rounded pl-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <SearchIcon />
              <FormTextInput
                callback={handleChange} 
                id="title" 
                name="title" 
                value={filter.title}
                placeholder="Contract Title" 
              />
            </span>
          </div>

          <div className="flex items-center px-3 h-10">
            <label className="w-3/12 block uppercase tracking-wide text-gray-700 text-xs font-bold">Contract #</label>
            <div className="w-2/12 h-full text-center bg-gray-200 py-1 mr-2 rounded">
              <Dropdown
                name="contractType"
                value={filter.contractType}
                options={[
                  { label: '(any)', value: '' },
                  ...ContractTypes.map(type => {
                    return {
                      label: type, value: type,
                    }
                  })
                ]}
                callback={handleChange}
              />
            </div>
            <span className="h-full flex justify-between items-center w-7/12 bg-gray-200 text-gray-700 border border-gray-200 rounded pl-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <SearchIcon />
              <FormTextInput 
                callback={handleChange} 
                id="contractId" 
                name="contractId" 
                value={filter.contractId}
                placeholder="Contract ID" 
              />
            </span>
          </div>

          <div className="flex items-center px-3">
            <label className="w-3/12 flex items-center uppercase tracking-wide text-gray-700 text-xs font-bold">Licensor</label>
            <span className="h-full flex items-center w-9/12 bg-gray-200 text-gray-700 border border-gray-200 rounded pl-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <SearchIcon />
              <FormTextInput 
                callback={handleChange} 
                id="licensor" 
                name="licensor" 
                value={filter.licensor}
                placeholder="Licensor" 
              />
            </span>
          </div>

          <div className="flex items-center px-3">
            <label className="w-3/12 block uppercase tracking-wide text-gray-700 text-xs font-bold">Distributor</label>
            <span className="h-full flex items-center w-9/12 bg-gray-200 text-gray-700 border border-gray-200 rounded pl-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <SearchIcon />
              <FormTextInput 
                callback={handleChange} 
                id="distributor" 
                name="distributor" 
                value={filter.distributor}
                placeholder="Contract Distributor" 
              />
            </span>
          </div>

          <div className="flex items-center px-3">
            <label className="w-3/12 block uppercase tracking-wide text-gray-700 text-xs font-bold">Territory</label>
            <span className="h-full flex items-center w-9/12 bg-gray-200 text-gray-700 border border-gray-200 rounded pl-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <SearchIcon />
              <FormTextInput 
                callback={handleChange} 
                id="territory" 
                name="territory" 
                value={filter.territory}
                placeholder="Territory" 
              />
            </span>
          </div>

          <div className="flex items-center px-3">
            <label className="w-3/12 block uppercase tracking-wide text-gray-700 text-xs font-bold">Right</label>
            <span className="h-full flex items-center w-9/12 bg-gray-200 text-gray-700 border border-gray-200 rounded pl-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <SearchIcon />
              <FormTextInput 
                callback={handleChange} 
                id="right" 
                name="right" 
                value={filter.right}
                placeholder="Right" 
              />
            </span>
          </div>



          <div className="flex items-center px-8">
            <label className="flex items-center h-full w-6/12 uppercase tracking-wide text-gray-700 text-xs font-bold">Contract Status</label>
            <div className="flex h-full w-6/12">
              <Dropdown
                name="contractStatus"
                value={filter.contractStatus}
                options={[
                  { label: '(any)', value: '' },
                  ...ContractStatuses.map(type => {
                    return {
                      label: type,
                      value: type,
                    }
                  })
                ]}
                callback={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center px-8">
            <label className="flex items-center w-6/12 uppercase tracking-wide text-gray-700 text-xs font-bold">Deal Status</label>
            <div className="flex h-full w-6/12">
              <Dropdown
                name="dealStatus"
                value={filter.dealStatus}
                options={[
                  { label: '(any)', value: '' },
                  ...DealStatuses.map(type => {
                    return {
                      label: type,
                      value: type,
                    }
                  })
                ]}
                callback={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center px-8">
            <label className="flex items-center w-6/12 uppercase tracking-wide text-gray-700 text-xs font-bold">Production Status</label>
            <div className="flex h-full w-6/12">
              <Dropdown
                name="productionStatus"
                value={filter.productionStatus}
                options={[
                  { label: '(any)', value: '' },
                  ...ProductionStatuses.map(type => {
                    return {
                      label: type,
                      value: type,
                    }
                  })
                ]}
                callback={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center px-8">
            <label className="flex items-center w-6/12 uppercase tracking-wide text-gray-700 text-xs font-bold">Deal Type</label>
            <div className="flex h-full w-6/12">
              <Dropdown
                name="project_code"
                value={filter.project_code}
                options={[
                  { label: '(any)', value: '' },
                  ...TitleCodes.map(type => {
                    return {
                      label: type,
                      value: type,
                    }
                  })
                ]}
                callback={handleChange}
              />
            </div>
          </div>

        </div>

        <div className="flex justify-between items-center max-w-8">
          <button onClick={resetFilters} className="my-5 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Reset</button>
          <button type="submit" className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </div>

      </form>


      {/* for some reason, the BODY of the table cannot be scrolled on the screen, must add bottom padding */}
      <table className="table-auto w-full rounded-lg">
        <thead className="uppercase bg-gray-100 rounded-lg">
          <tr>
            { [ 'Contract ID', 'Status', 'Licensor', 'Distributor', 'Amount' ].map(i => (
              <th className="py-3 px-6" key={i}>{i}</th>
            )) }
          </tr>
        </thead>

        <tbody className="">

          { contracts.map(({ contract_id, status, licensor, distributor, mg, cur }) => (
            <tr className="h-12 hover:bg-gray-100 cursor-pointer" key={contract_id}>
              <th className="h-12">
                <Link href={`/contracts/${contract_id}`}>
                  <a className="flex justify-center items-center w-full h-12">{contract_id}</a>
                </Link>
              </th>
              <th className="h-12">
                <Link href={`/contracts/${contract_id}`}>
                  <a className="flex justify-center items-center w-full h-12">{status}</a>
                </Link>
              </th>
              <th className="h-12">
                <Link href={`/contracts/${contract_id}`}>
                  <a className="flex justify-center items-center w-full h-12">{licensor}</a>
                </Link>
              </th>
              <th className="h-12">
                <Link href={`/contracts/${contract_id}`}>
                  <a className="flex justify-center items-center w-full h-12">{distributor}</a>
                </Link>
              </th>
              <th className="h-12">
                <Link href={`/contracts/${contract_id}`}>
                  <a className="flex justify-center items-center w-full h-12">{formatAmount(mg, cur)}</a>
                </Link>
              </th>
            </tr>
          )) }

        </tbody>
      </table>

      <div className="h-12"></div>

    </div>
  );
}


function SearchIcon() {
  return (
    <div className="mr-4">
      <MagnifyingGlass height={15} width={15} />
    </div>
  );
}


function FormTextInput({ id, name, placeholder, callback, value, extraClasses = [] } : {
  id: string,
  name: string,
  placeholder: string,
  value: string,
  extraClasses?: string[],
  callback: (event: React.ChangeEvent<HTMLInputElement>) => any
}) {

  const base = "w-full h-full appearance-none block bg-gray-200 outline-none py-1 pl-4 px-2 focus:bg-white"
  const _class = [base, ...extraClasses].join(' ');

  return (
    <input 
      id={id} 
      name={name} 
      type="text"
      placeholder={placeholder} 
      onChange={callback}
      value={value}
      className={_class}
    />
  );
}



export async function getServerSideProps() {
  const contracts = await api.getContracts();
  console.log({ contracts })
  return {
    props: { _contracts: contracts }
  }
}


export default Contracts;

