import type { NextPage } from 'next';
import Link from 'next/link';


// TODO: replace this with proper types interface
// right now, what is in the database is not really aligned with the page


interface ContractProps {
  contractType: string,
  contractNumber: string,
  licensor: string,
  licensee: string,
  dealStatus: string,
  status: string,
  dealType: string,
  effectiveDate: string,
  mg: string,
  currency: string,
  additonalTerms: string,
  notes: string,
};

export function Contracts({ contracts } : { contracts: ContractProps[] }) {
  console.log(contracts);
  return (
    <div>
      <h1>Contracts</h1>
      <div className="flex flex-col justify-center items-center">
        { contracts.map((contract, i) => (
          <Link key={i} href={`/contracts/${contract.contractNumber}`}>
            <a>{contract.contractNumber}</a>
          </Link>
        )) }
      </div>
    </div>
  );
}



export async function getServerSideProps() {
  const result = await fetch("https://localhost:3000/api/contracts");
  const contracts = await result.json();
  return {
    props: { contracts }
  }
}


export default Contracts;

