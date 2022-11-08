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
    <div className="w-full">
      <h1 className="text-center mb-8">Contracts</h1>
      <div className="flex flex-col">
        { contracts.map((contract, i) => (
          <Link key={i} href={`/contracts/${contract.contractNumber}`}>
            <a className="my-4">{contract.contractNumber}</a>
          </Link>
        )) }
      </div>
    </div>
  );
}



export async function getServerSideProps() {
  const result = await fetch("http://localhost:3000/api/contracts");
  const { data: contracts } = await result.json();
  return {
    props: { contracts: contracts }
  }
}


export default Contracts;

