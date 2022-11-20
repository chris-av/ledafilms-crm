import { useState, useEffect } from 'react';
import { IContract } from '@/utils/interfaces';
import Link from 'next/link';



export function Contracts({ _contracts } : { _contracts: IContract[] }) {

  const [ contracts, setContracts ] = useState(_contracts);
  const [ idFilter, setIdFilter ] = useState('');
  const [ statusFilter, setStatusFilter ] = useState('');
  const [ licensorFilter, setLicensorFilter ] = useState('');
  const [ distributorFilter, setDistributorFilter ] = useState('');
  const [ amountFilter, setAmountFilter ] = useState('');

  const formatAmount = (amount: number, currency: string) : string => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    });
    return formatter.format(amount);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'contract-id') {
      setIdFilter(event.target.value);
    }

    if (event.target.name === 'contract-status') {
      setStatusFilter(event.target.value);
    }

    if (event.target.name === 'licensor') {
      setLicensorFilter(event.target.value);
    }

    if (event.target.name === 'distributor') {
      setDistributorFilter(event.target.value);
    }

    if (event.target.name === 'amount') {
      setAmountFilter(event.target.value);
    }
    
    return;

  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const makeRequest = async () => {
      let filters : {
        contract_id?: string,
        status?: string,
        licensor?: string,
        distributor?: string,
        mg?: string,
      } = {};


      if (idFilter) filters.contract_id = idFilter;
      if (statusFilter) filters.status = statusFilter;
      if (licensorFilter) filters.status = licensorFilter;
      if (distributorFilter) filters.distributor = distributorFilter;
      if (amountFilter) filters.mg = amountFilter;

      const requestUrl = "http://localhost:3000/api/contracts/" + new URLSearchParams(filters);
      console.log({ requestUrl });

      // const response = await fetch(requestUrl);
      //
      // if (response.status === 200) {
      //   const dta = await response.json();
      //   setContracts(dta);
      // }


    }

    makeRequest();

    return;

  }


  console.log({ idFilter, statusFilter, licensorFilter, distributorFilter, amountFilter });

  return (
    <div className="w-full">
      <h1 className="text-center mb-8">Contracts</h1>

      {/* implement search */}

      <div>
        <form onSubmit={handleSubmit} className="bg-pink-50 w-full my-10 shadow-md rounded px-8 pt-6 pb-8 mb-4">

          <h2 className="text-center mb-8">Contract filter</h2>

          <div className="flex flex-wrap -mx-3 mb-6">

            <div className="flex items-center w-full px-3">
              <label className="w-2/12 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">ID</label>
              <div className="w-1/12 text-center bg-gray-200 py-3 mx-2 mb-3 rounded">M</div>
              <input value={idFilter} onChange={handleChange} name="contract-id" className="appearance-none block w-9/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-contract-id" type="text" placeholder="Contract ID"/>
            </div>

            <div className="flex items-center w-full px-3">
              <label className="w-2/12 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Status</label>
              <div className="w-1/12 text-center bg-gray-200 py-3 mx-2 mb-3 rounded">M</div>
              <input value={statusFilter} onChange={handleChange} name="contract-status" className="appearance-none block w-9/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-contract-id" type="text" placeholder="Contract Status"/>
            </div>

            <div className="flex items-center w-full px-3">
              <label className="w-2/12 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Licensor</label>
              <div className="w-1/12 text-center bg-gray-200 py-3 mx-2 mb-3 rounded">M</div>
              <input value={licensorFilter} onChange={handleChange} name="licensor" className="appearance-none block w-9/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-contract-id" type="text" placeholder="Contract Status"/>
            </div>

            <div className="flex items-center w-full px-3">
              <label className="w-2/12 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Distributor</label>
              <div className="w-1/12 text-center bg-gray-200 py-3 mx-2 mb-3 rounded">M</div>
              <input value={distributorFilter} onChange={handleChange} name="distributor" className="appearance-none block w-9/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-contract-id" type="text" placeholder="Contract Status"/>
            </div>

            <div className="flex items-center w-full px-3">
              <label className="w-2/12 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Amount</label>
              <div className="w-1/12 text-center bg-gray-200 py-3 mx-2 mb-3 rounded">M</div>
              <input value={amountFilter} onChange={handleChange} name="amount" className="appearance-none block w-9/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-contract-id" type="text" placeholder="Contract Status"/>
            </div>

          </div>

          <div className="flex justify-between items-center max-w-8">
            <button type="submit" className="my-5 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Reset</button>
            <button type="submit" className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          </div>

        </form>

      </div>

      <table className="table-auto w-full rounded-lg overflow-hidden border border-indigo-600">
        <thead className="uppercase bg-gray-100">
          <tr>
            { [ 'Contract ID', 'Status', 'Licensor', 'Distributor', 'Amount' ].map(i => (
              <th className="py-3 px-6" key={i}>{i}</th>
            )) }
          </tr>
        </thead>
        <tbody>

          { contracts.map(({ contract_id, status, licensor, distributor, mg, cur }) => (
            <tr className="h-12 hover:bg-gray-100 cursor-pointer" key={contract_id}>
              <th className="">
                <Link href={`/contracts/${contract_id}`}>
                  <a className="flex justify-center items-center w-full h-12">{contract_id}</a>
                </Link>
              </th>
              <th className="">
                <Link href={`/contracts/${contract_id}`}>
                  <a className="flex justify-center items-center w-full h-12">{status}</a>
                </Link>
              </th>
              <th className="">
                <Link href={`/contracts/${contract_id}`}>
                  <a className="flex justify-center items-center w-full h-12">{licensor}</a>
                </Link>
              </th>
              <th className="">
                <Link href={`/contracts/${contract_id}`}>
                  <a className="flex justify-center items-center w-full h-12">{distributor}</a>
                </Link>
              </th>
              <th className="">
                <Link href={`/contracts/${contract_id}`}>
                  <a className="flex justify-center items-center w-full h-12">{formatAmount(mg, cur)}</a>
                </Link>
              </th>
            </tr>
          )) }

        </tbody>
      </table>

    </div>
  );
}



export async function getServerSideProps() {
  const result = await fetch("http://localhost:3000/api/contracts");
  const { data: contracts } = await result.json();
  return {
    props: { _contracts: contracts }
  }
}


export default Contracts;

