import { useState } from 'react';
import {
  IContract, ContractFilter,
  validTitleTypeOpts, validContractTypeOpts,
  validContractStatusOpts, validDealStatusOpts,
  validProductionStatusOpts, validDealTypeOpts
} from '@/utils/interfaces';
import { filterState } from '@/data/filter-state.data';
import Link from 'next/link';
import api from '@/utils/api';
import Dropdown from '@/components/Dropdown';
import MagnifyingGlass from '@/components/icons/MagnifyingGlass';



export function Contracts({ _contracts } : { _contracts: IContract[] }) {

  const contracts = _contracts;

  const [ filter, setFilter ] = useState<ContractFilter>(filterState);

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {

    type filterTypes = "titleType" | "title" | "contractType" | "contractId" | "licensor" | "distributor" | "territory" | "right" | "contractStatus" | "dealStatus" | "productionStatus" ;
    type operatorTypes = "operator" | "search";

    const filterName = event.target.id as filterTypes;
    const operatorName = event.target.name as operatorTypes;

    setFilter((prev) : ContractFilter => {
      return {
        ...prev,
        [filterName]: {
          ...prev[filterName],
          [operatorName]: event.target.value,
        }
      } as ContractFilter
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

  const selectTitleType = (selection : validTitleTypeOpts) => {
    setFilter((prev) : ContractFilter => {
      return {
        ...prev,
        titleType: {
          ...prev.titleType,
          search: selection,
        }
      }
    });
  }

  const selectContractType = (selection : validContractTypeOpts) => {
    setFilter((prev) : ContractFilter => {
      return {
        ...prev,
        contractType: {
          ...prev.contractType,
          search: selection,
        }
      }
    });
  }

  const selectContractStatus = (selection : validContractStatusOpts) => {
    setFilter((prev) : ContractFilter => {
      return {
        ...prev,
        contractStatus: {
          ...prev.contractStatus,
          search: selection,
        }
      }
    });
  }

  const selectDealStatus = (selection : validDealStatusOpts) => {
    setFilter((prev) : ContractFilter => {
      return {
        ...prev,
        dealStatus: {
          ...prev.dealStatus,
          search: selection,
        }
      }
    });
  }

  const selectProductionStatus = (selection : validProductionStatusOpts) => {
    setFilter((prev) : ContractFilter => {
      return {
        ...prev,
        productionStatus: {
          ...prev.productionStatus,
          search: selection,
        }
      }
    });
  }

  const selectDealType = (selection : validDealTypeOpts) => {
    setFilter((prev) : ContractFilter => {
      return {
        ...prev,
        dealType: {
          ...prev.dealType,
          search: selection,
        }
      }
    });
  }

  console.log({ filter });

  return (
    <div className="w-full">
      <h1 className="text-center mb-8">Contracts</h1>

      {/* implement search */}
      <form onSubmit={handleSubmit} className="bg-pink-50 w-full my-10 py-4 shadow-md rounded px-8 mb-4">

        <h2 className="text-center mb-8">Contract filter</h2>

        <div className="grid grid-rows-6 grid-flow-col auto-cols-[60%_40%] gap-2 mx-3 mb-6">

          <div className="flex items-center px-3 h-10">
            <label className="w-3/12 block uppercase tracking-wide text-gray-700 text-xs font-bold">Title</label>
            <div className="w-2/12 h-full text-center bg-gray-200 py-1 mr-2 rounded">
              <Dropdown
                options={[
                  { label: '(any)', value: 'any' },
                  { label: 'Film', value: 'Film' },
                  { label: 'Series', value: 'Series' },
                  { label: 'Mini-Series', value: 'Mini-Series' },
                  { label: 'Format', value: 'Format' },
                  { label: 'Seasons', value: 'Seasons' },
                  { label: 'Episodes', value: 'Episodes' },
                ]}
                callback={selectTitleType}
              />
            </div>
            <span className="h-full flex justify-between items-center w-7/12 bg-gray-200 text-gray-700 border border-gray-200 rounded pl-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <SearchIcon />
              <FormTextInput
                callback={handleChange} 
                id="title" 
                name="search" 
                placeholder="Contract Title" 
              />
            </span>
          </div>

          <div className="flex items-center px-3 h-10">
            <label className="w-3/12 block uppercase tracking-wide text-gray-700 text-xs font-bold">Contract #</label>
            <div className="w-2/12 h-full text-center bg-gray-200 py-1 mr-2 rounded">
              <Dropdown
                options={[
                  { label: '(any)', value: 'any' },
                  { label: 'Sales', value: 'Sales' },
                  { label: 'Acquisition', value: 'Acquisition' },
                ]}
                callback={selectContractType}
              />
            </div>
            <span className="h-full flex justify-between items-center w-7/12 bg-gray-200 text-gray-700 border border-gray-200 rounded pl-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <SearchIcon />
              <FormTextInput 
                callback={handleChange} 
                id="contractId" 
                name="search" 
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
                name="search" 
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
                name="search" 
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
                name="search" 
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
                name="search" 
                placeholder="Right" 
              />
            </span>
          </div>



          <div className="flex items-center px-8">
            <label className="flex items-center h-full w-6/12 uppercase tracking-wide text-gray-700 text-xs font-bold">Contract Status</label>
            <div className="flex h-full w-6/12">
              <Dropdown
                options={[
                  { label: '(any)', value: 'any' },
                  { label: 'Normal', value: 'Normal' },
                  { label: 'Cancelled', value: 'Cancelled' },
                  { label: 'Internal', value: 'Internal' },
                ]}
                callback={selectContractStatus}
              />
            </div>
          </div>

          <div className="flex items-center px-8">
            <label className="flex items-center w-6/12 uppercase tracking-wide text-gray-700 text-xs font-bold">Deal Status</label>
            <div className="flex h-full w-6/12">
              <Dropdown
                options={[
                  { label: '(any)', value: 'any' },
                  { label: 'Long Form Executed', value: 'Long Form Executed' },
                  { label: 'In Negotiation', value: 'In Negotiation' },
                  { label: 'Deal Memo Executed', value: 'Deal Memo Executed' },
                  { label: 'Cancelled', value: 'Cancelled' },
                  { label: 'Awaiting Signature', value: 'Awaiting Signature' },
                ]}
                callback={selectDealStatus}
              />
            </div>
          </div>

          <div className="flex items-center px-8">
            <label className="flex items-center w-6/12 uppercase tracking-wide text-gray-700 text-xs font-bold">Production Status</label>
            <div className="flex h-full w-6/12">
              <Dropdown
                options={[
                  { label: '(any)', value: 'any' },
                  { label: 'Completed', value: 'Completed' },
                  { label: 'Pre-Production', value: 'Pre-Production' },
                  { label: 'Post-Production', value: 'Post-Production' },
                  { label: 'Production', value: 'Production' },
                  { label: 'Development', value: 'Development' },
                  { label: 'Catalog', value: 'Catalog' },
                ]}
                callback={selectProductionStatus}
              />
            </div>
          </div>

          <div className="flex items-center px-8">
            <label className="flex items-center w-6/12 uppercase tracking-wide text-gray-700 text-xs font-bold">Deal Type</label>
            <div className="flex h-full w-6/12">
              <Dropdown
                options={[
                  { label: '(any)', value: 'any' },
                  { label: 'Acquired Content', value: 'Acquired Content' },
                  { label: 'Representation Only', value: 'Representation Only' },
                  { label: 'Producted Content', value: 'Producted Content' },
                ]}
                callback={selectDealType}
              />
            </div>
          </div>

        </div>

        <div className="flex justify-between items-center max-w-8">
          <button type="submit" className="my-5 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Reset</button>
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


function FormTextInput({ id, name, placeholder, callback, extraClasses = [] } : {
  id: string,
  name: string,
  placeholder: string,
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
      className={_class}
    />
  );
}



export async function getServerSideProps() {
  const contracts = await api.getContracts();
  return {
    props: { _contracts: contracts }
  }
}


export default Contracts;

