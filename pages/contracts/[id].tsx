import type { NextPage } from 'next';
import { useRouter } from 'next/router';


const Contract : NextPage = () => {
  const router = useRouter();
  const { id: contractId } = router.query;

  return (
    <h1>Contract : { contractId }</h1>
  );
}


export default Contract;


