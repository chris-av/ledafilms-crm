import { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { contractsArr } from '@/data/contract.prototype.data';
import { Contract } from '@/utils/interfaces';


const Contract : NextPage = () => {
  const router = useRouter();
  const { id: contractId } = router.query;

  // useEffect at some point to make an api call to get your data
  const [ contract, setContract ] = useState<Contract>(contractsArr[0]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/');
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    setContract(prev => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    });
  }

  return (
    <div className="p-6">
      <h1 className="w-full my-8 text-center">Contract : { contractId }</h1>

      <form onSubmit={handleSubmit} className="bg-teal-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-5xl mx-auto">


        <div className="flex flex-wrap justify-between">
          <div className="mb-4 md:w-1/2 px-4">
            <label className="block px-1 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Contract Type
            </label>
            <div className="relative">
              <select value={contract.contractType} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option value="acquisition">Acquisition</option>
                <option value="sales">Sales</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="mb-4 md:w-1/2 px-4">
            <label className="block px-1 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Contract #
            </label>
            <input value={contract.contractNumber} onChange={handleChange} name="contractNumber" type="text" placeholder="Contract Number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        </div>


        <div className="flex flex-wrap justify-between">
          <div className="mb-4 md:w-1/2 px-4">
            <label className="block px-1 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Licensor
            </label>
            <input name="licensor" type="text" value={contract.licensor} onChange={handleChange} placeholder="Username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4 md:w-1/2 px-4">
            <label className="block px-1 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Licensee
            </label>
            <input name="licensee" type="text" value={contract.licensee} onChange={handleChange} placeholder="Effective Date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="mb-4 md:w-1/2 px-4">
            <label className="block px-1 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Deal Status
            </label>
            <div className="relative">
              <select value={contract.dealStatus} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          <div className="mb-4 md:w-1/2 px-4">
            <label className="block px-1 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Status
            </label>
            <div className="relative">
              <select value={contract.status} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="mb-4 md:w-1/2 px-4">
            <label className="block px-1 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Deal Type
            </label>
            <div className="relative">
              <select value={contract.dealStatus} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          <div className="mb-4 md:w-1/2 px-4">
            <label className="block px-1 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Effective Date
            </label>
            <input value={contract.effectiveDate.toLocaleString()} onChange={handleChange} name="licensee" type="text" placeholder="Username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="mb-4 md:w-1/2 px-4">
            <label className="block px-1 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Minimum Guarantee
            </label>
            <input value={contract.mg} onChange={handleChange} name="licensee" type="text" placeholder="Username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4 md:w-1/2 px-4">
            <label className="block px-1 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Currency
            </label>
            <div className="relative">
              <select value={contract.currency} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>USD</option>
                <option>Colones</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

        </div>


        <div className="mb-4 px-4">
          <label className="px-1 text-sm font-bold">Additional Terms</label>
          <textarea rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-4 px-4">
          <label className="px-1 text-sm font-bold">Notes</label>
          <textarea rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>


        <div className="flex items-center p-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 border-solid border-2 text-white font-bold py-2 px-4 rounded focus:shadow-outline">
            Submit
          </button>

          <button type="button" className="bg-red-500 ml-8 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline">
            Delete
          </button>
        </div>

      </form>

    </div>
  );
}


export default Contract;


