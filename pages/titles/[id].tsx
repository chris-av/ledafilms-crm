import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import DownButton from '@/components/icons/ChevronDown';
import ChevronDown from '@/components/icons/ChevronDown';

const Title : NextPage = () => {
  const router = useRouter();
  const { id: titleId } = router.query;

  return (
    <div className="p-6">
      <h1 className="w-full my-8 text-center">Contract : { titleId }</h1>

      <form className="bg-teal-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-5xl mx-auto">

        <div className="flex flex-wrap justify-between">
          <div className="mb-4 md:w-1/2 px-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Licensor
            </label>
            <input type="text" placeholder="Username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4 md:w-1/2 px-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Licensee
            </label>
            <input type="text" placeholder="Username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="mb-4 md:w-1/2 px-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              License #
            </label>
            <input type="text" placeholder="Username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4 md:w-1/2 px-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Deal Status
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown size={15} />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 px-4">
          <label>Description</label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>


        <div className="flex items-center p-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Submit
          </button>

          <button className="bg-red-500 ml-8 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Delete
          </button>
        </div>

      </form>

    </div>
  );
}


export default Title;



