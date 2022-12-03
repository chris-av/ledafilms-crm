import { useState } from 'react';
import Link from 'next/link';
import SunIcon from '@/components/icons/Sun';
import MoonIcon from '@/components/icons/Moon';



export default function Navbar() {

  const [ toggleLight, setToggle ] = useState(false);

  return (
    <div className="w-[300px] h-full bg-slate-100 float-left">

      <div className="flex flex-col h-[85%]">
        <ul className="w-full flex flex-col items-center text-xl h-[50%]">

          <li className="flex items-center w-full h-[60px] pl-8">
            <Link href="/titles">
              <a>Titles</a>
            </Link>
          </li>

          <li className="flex items-center w-full h-[60px] pl-8">
            <Link href="/contracts">
              <a>Contracts</a>
            </Link>
          </li>

          <li className="flex items-center w-full h-[60px] pl-8">
            <Link href="/reports">
              <a>Reports</a>
            </Link>
          </li>

          <li className="flex items-center w-full h-[60px] pl-8">
            <Link href="/settings">
              <a>Settings</a>
            </Link>
          </li>

          <li className="flex items-center w-full h-[60px] pl-8">
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>

        </ul>

        <div className="w-full border-[black] border-t"></div>

        <ul className="w-full flex flex-col items-center text-xl">

          <li className="flex items-center w-full h-[60px] pl-8">
            <Link href="/titles">
              <a>Dashboards</a>
            </Link>
          </li>

        </ul>

      </div>

      <div className="cursor-pointer">
        <label htmlFor="checkbox" onClick={() => setToggle(prev => !prev) } style={{ backgroundColor: toggleLight ? "#F9FCD1" : "black" }} className="relative max-w-[60px] mx-auto bg-[black] flex justify-between items-center px-2 h-[35px] rounded-xl transition-all">
          <SunIcon color="#CCD924" size={16} />
          <MoonIcon color="white" size={16} />
          <div style={{ backgroundColor: toggleLight ? "#E2BFBF" : "white", transform: toggleLight ? "translateX(80%)" : "translateX(0)"  }} className="absolute cursor-pointer w-[24px] h-[24px] rounded-[50%] transition-transform ease-lineari duration-300"></div>
        </label>
      </div>

    </div>
  );
}


