import type { NextPage } from 'next';
import Link from 'next/link';
import LoginForm from '@/components/LoginForm';

const Login : NextPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />

      <div className="w-full mx-auto text-center">
        <p>If you don't have an account, request one <span className="text-blue-800 italic underline"><Link href="/signup">here</Link></span></p>
      </div>

    </div>
  )
}


export default Login;

