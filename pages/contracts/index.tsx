import { useState, useEffect } from 'react';
import { IContract } from '@/utils/interfaces';
import Link from 'next/link';
import api from '@/utils/api';
import Dropdown from '@/components/Dropdown';



export function Contracts({ _contracts } : { _contracts: IContract[] }) {

  const contracts = _contracts;

  const [ filter, setFilter ] = useState({
    title: {
      type: 'any',
      searchTerm: '',
    },
    contractId: {
      type: 'any',
      searchTerm: '',
    },
    licensor: {
      searchTerm: '',
    },
    distributor: {
      searchTerm: '',
    },
    territory: {
      searchTerm: '',
    },
    right: {
      searchTerm: '',
    },
    contractStatus: {
      type: 'any',
    },
    dealStatus: {
      type: 'any',
    },
    productionStatus: {
      type: 'any',
    },
  });

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {

    const filterName = event.target.name;
    interface filterType {
      type?: string,
      searchTerm?: string,
    }

    setFilter(prev => {
      return {
        ...prev,
        [filterName]: {
          ...prev[filterName],
          searchTerm: [event.target.value],
        }
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

  return (
    <div className="w-full">
      <h1 className="text-center mb-8">Contracts</h1>

      {/* implement search */}
      <form onSubmit={handleSubmit} className="bg-pink-50 w-full my-10 py-4 shadow-md rounded px-8 mb-4">

        <h2 className="text-center mb-8">Contract filter</h2>

        <div className="grid grid-rows-6 grid-flow-col auto-cols-[60%_40%] mx-3 mb-6">

          <div className="flex items-center px-3 py-1">
            <label className="w-3/12 block uppercase tracking-wide text-gray-700 text-xs font-bold">Title</label>
            <div className="w-2/12 text-center bg-gray-200 py-1 mx-2 rounded">M</div>
            <input onChange={handleChange} name="contract-id" type="text" placeholder="Contract Title" className="appearance-none block w-7/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
          </div>

          <div className="flex items-center px-3">
            <label className="w-3/12 block uppercase tracking-wide text-gray-700 text-xs font-bold">Contract #</label>
            <div className="w-2/12 text-center bg-gray-200 py-1 mx-2 rounded">M</div>
            <input onChange={handleChange} name="contract-id" type="text" placeholder="Contract ID" className="appearance-none block w-7/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
          </div>

          <div className="flex items-center px-3">
            <label className="w-3/12 block uppercase tracking-wide text-gray-700 text-xs font-bold">Licensor</label>
            <input onChange={handleChange} name="licensor" type="text" placeholder="Licensor" className="appearance-none block w-9/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
          </div>

          <div className="flex items-center px-3">
            <label className="w-3/12 block uppercase tracking-wide text-gray-700 text-xs font-bold">Distributor</label>
            <input onChange={handleChange} name="distributor" type="text" placeholder="Contract Distributor" className="appearance-none block w-9/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
          </div>

          <div className="flex items-center px-3">
            <label className="w-3/12 block uppercase tracking-wide text-gray-700 text-xs font-bold">Territory</label>
            <input onChange={handleChange} name="territory" type="text" placeholder="Territory" className="appearance-none block w-9/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
          </div>

          <div className="flex items-center px-3">
            <label className="w-3/12 block uppercase tracking-wide text-gray-700 text-xs font-bold">Right</label>
            <input onChange={handleChange} name="distributor" type="text" placeholder="Right" className="appearance-none block w-9/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"/>
          </div>



          <div className="flex items-center px-8">
            <label className="w-2/3 uppercase tracking-wide text-gray-700 text-xs font-bold">Contract Status</label>
            <div className="w-1/3">
              <Dropdown
                options={[
                  { label: 'Normal', value: 'Normal' },
                  { label: 'Cancelled', value: 'Cancelled' },
                  { label: 'Internal', value: 'Internal' },
                ]}
                callback={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center px-8">
            <label className="w-2/3 uppercase tracking-wide text-gray-700 text-xs font-bold">Deal Status</label>
            <div className="w-1/3">
              <Dropdown
                options={[
                  { label: 'Normal', value: 'Normal' },
                  { label: 'Cancelled', value: 'Cancelled' },
                  { label: 'Internal', value: 'Internal' },
                ]}
                callback={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center px-8">
            <label className="w-2/3 uppercase tracking-wide text-gray-700 text-xs font-bold">Production Status</label>
            <div className="w-1/3">
              <Dropdown
                options={[
                  { label: 'Normal', value: 'Normal' },
                  { label: 'Cancelled', value: 'Cancelled' },
                  { label: 'Internal', value: 'Internal' },
                ]}
                callback={handleChange}
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



export async function getServerSideProps() {
  const contracts = await api.getContracts();
  return {
    props: { _contracts: contracts }
  }
}


export default Contracts;

