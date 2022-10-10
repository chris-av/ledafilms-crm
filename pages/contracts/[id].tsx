import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import LoginForm from '@/components/LoginForm';

const Contract : NextPage = () => {
  const router = useRouter();
  const { id: contractId } = router.query;

  return (
    <div>
      <h1>Contract : { contractId }</h1>

      <div className="w-full">
        hello
      </div>

    </div>
  );
}


export default Contract;


