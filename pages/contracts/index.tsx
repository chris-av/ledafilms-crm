import type { NextPage } from 'next';
import { contractsArr } from '@/data/contract.prototype.data';
import Link from 'next/link';


const Contracts : NextPage = () => {
  return (
    <div>
      <h1>Contracts</h1>
      <div className="flex flex-col justify-center items-center">
        { contractsArr.map(contract => (
          <Link href={`/contracts/${contract.contractNumber}`}>
            <a>{contract.contractNumber}</a>
          </Link>
        )) }
      </div>
    </div>
  );
}


export default Contracts;

