import Link from 'next/link';
import LoginForm from '@/components/LoginForm';

export default function Login() {
  return (
    <div>
      <h1 className="w-full text-center py-5">Login</h1>
      <LoginForm />

      <div className="w-full mx-auto text-center">
        <p>If you don't have an account, request one <span className="text-blue-800 italic underline"><Link href="/signup">here</Link></span></p>
      </div>

    </div>
  )
}

