import type { NextPage } from 'next';
import SignUpForm from '@/components/SignUpForm';

const Login : NextPage = () => {
  return (
    <div>
      <h1>Request to create account</h1>
      <SignUpForm />
    </div>
  )
}


export default Login;

