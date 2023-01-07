import { useState } from 'react';
import { useRouter } from 'next/router';
import { IContract, IOpenWindow } from '@/utils/interfaces';
import DownArrow from '@/components/icons/ChevronDown';
import api from '@/utils/api';


export default function Contract({ contract, open_windows } : { contract: IContract, open_windows : IOpenWindow[] }) {
  const router = useRouter();
  const { id: contractId } = router.query;

  // useEffect at some point to make an api call to get your data
  const [ pageContract, setPageContract ] = useState<IContract>(contract);
  const [ openWindows, setOpenWindows ] = useState<IOpenWindow[]>(open_windows);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/');
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    setPageContract((prev : IContract) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    });
  }

  const handleCheck = ({
    type, id
  } : {
    type: string, id: number,
  }) => {
    setOpenWindows((prev : IOpenWindow[]) => {
      if (type === 'start-confirmed') {
        return prev.map(row => {
          return row.id === id ? {
            ...row,
            start_confirmed: !row.start_confirmed,
          } : row
        });
      } else {
        return prev.map(row => {
          return row.id === id ? {
            ...row,
            end_confirmed: !row.end_confirmed,
          } : row
        });
      }
    });
  }

  return (
    <div className="p-6">
      <h1 className="w-full my-8 text-center">Contract : { contractId }</h1>

      <form onSubmit={handleSubmit} className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-5xl mx-auto">


        <div className="flex flex-wrap justify-between">
          <div className="mb-4 md:w-1/2 px-4">
            <label className="block px-1 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Contract Type
            </label>
            <div className="relative">
              <select value={contract.contract_type} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option value="acquisition">Acquisition</option>
                <option value="sales">Sales</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <DownArrow size={15} />
              </div>
            </div>
          </div>
          <div className="mb-4 md:w-1/2 px-4">
            <label className="block px-1 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Contract #
            </label>
            <input value={contract.contract_id} onChange={handleChange} name="contractNumber" type="text" placeholder="Contract Number" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
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
            <input name="licensee" type="text" value={contract.licensor} onChange={handleChange} placeholder="Effective Date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="mb-4 md:w-1/2 px-4">
            <label className="block px-1 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Deal Status
            </label>
            <div className="relative">
              <select value={contract.deal_status} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <DownArrow size={15} />
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
                <DownArrow size={15} />
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
              <select value={contract.deal_status} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <DownArrow size={15} />
              </div>
            </div>
          </div>

          <div className="mb-4 md:w-1/2 px-4">
            <label className="block px-1 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Effective Date
            </label>
            <input value={contract.creation_date} onChange={handleChange} name="licensee" type="text" placeholder="Username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="mb-4 md:w-1/2 px-4">
            <label className="block px-1 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Minimum Guarantee
            </label>
            <input value={contract.mg} onChange={handleChange} name="licensee" type="text" placeholder="Amount" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>

          <div className="mb-4 md:w-1/2 px-4">
            <label className="block px-1 text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Currency
            </label>
            <div className="relative">
              <select value={contract.cur} onChange={handleChange} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>USD</option>
                <option>Colones</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <DownArrow size={15} />
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

      {/* open windows component goes here */}
      {/* issue, we are gonna have to paginate even the open_windows result */}

      <table className="table-auto w-full rounded-lg">
        <thead>
          <tr className="text-sm text-left">
            {
              ['Territory', 'Right', 'License Type', 'Start Date',
               'St. Date Confirmed', 'End Date', 'End Date Confirmed'].map(col => col.toUpperCase()).map(col => (
                  <th key={col}>{col}</th>
                ))
            }
          </tr>
        </thead>
        <tbody>
          { openWindows.map(({ id, contract_id, right_group, unique_id, territory, right, license_type, start_date, start_confirmed, end_date, end_confirmed }) => (
            <tr key={id} className="text-sm">
              <td className="">{territory}</td>
              <td className="">{right}</td>
              <td className="">{license_type}</td>
              <td className="">{start_date}</td>
              <td className="text-center">
                <input 
                  type="checkbox" 
                  value="start confirmed" 
                  name="start-confirmed" 
                  checked={start_confirmed} 
                  onChange={() => handleCheck({
                    type: 'start-confirmed',
                    id,
                  })}
                />
              </td>
              <td className="">{end_date}</td>
              <td className="text-center">
                <input 
                  type="checkbox" 
                  value="end confirmed" 
                  name="end-confirmed" 
                  checked={end_confirmed}
                  onChange={() => handleCheck({
                    type: 'end-confirmed',
                    id,
                  })}
                />
              </td>
            </tr>
          )) }
        </tbody>
      </table>

      <div className="h-12"></div>

    </div>
  );
}


export async function getServerSideProps({ query } : { query: { id: string, } }) {
  try {
    const { id: contract_id } = query;
    const response_contract = await api.getContract(contract_id);
    const _contract = await response_contract;

    const response_openWindows = await api.getOpenWindow(contract_id);
    const _open_windows = response_openWindows;

    return {
      props: { error: null, contract: _contract, open_windows: _open_windows }
    }

  } catch (err) {
    return {
      props: { error: err, contract: null, open_windows: null }
    }
  }
}




