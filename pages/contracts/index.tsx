import { IContract } from '@/utils/interfaces';
import Link from 'next/link';



export function Contracts({ contracts } : { contracts: IContract[] }) {
  console.log(contracts);
  const formatAmount = (amount: number, currency: string) : string => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    });
    return formatter.format(amount);
  }
  return (
    <div className="w-full">
      <h1 className="text-center mb-8">Contracts</h1>

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
    props: { contracts }
  }
}


export default Contracts;

