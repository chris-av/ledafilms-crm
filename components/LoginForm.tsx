import { FC } from 'react';
import { useState } from 'react';


const LoginForm : FC = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    return;
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    return;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // make request to backend server to authenticate user
    event.preventDefault();
    return;
  }

  return (
    <form className="w-full max-w-lg mx-auto my-10" onSubmit={handleSubmit}>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Username
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-username" type="text" placeholder="username" value={username} onChange={handleUsernameChange} />
          <p className="text-gray-600 text-xs italic">Enter a valid username</p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
            Password
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" value={password} onChange={handlePasswordChange} />
          <p className="text-gray-600 text-xs italic">Enter a valid password</p>
        </div>
      </div>

      <div>
        <button type="submit" className="italic text-sm hover:text-gray-600">Forgot password</button>
      </div>
      <div>
        <button type="submit" className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </div>

    </form>
  );
}


export default LoginForm;

