import { FC } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
  return (
    <div className="h-10 p-10 bg-slate-900 flex justify-between items-center text-xl">

      <div className="flex justify-center cursor-pointer items-center w-10 select-none">
        <img className="h-10" src="/ledafilms-icon-light.png" />
      </div>

      <ul className="flex justify-between items-center text-xl">
        <li className="mx-8">
          <Link href="/contracts">
            <a>Contracts</a>
          </Link>
        </li>
        <li className="mx-8">
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li className="mx-8">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}


export default Navbar;

