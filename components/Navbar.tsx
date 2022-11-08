import Link from 'next/link';
import Image from 'next/image';
import { menuItems, MenuItemType, SubMenuType } from '@/data/navbar-menu.data';




export default function Navbar() {

  return (
    <div className="w-[300px] h-screen bg-slate-100 float-left">

      <div className="relative select-none mb-8 w-[50px] h-[50px] ml-8 my-8">
        <Link href="/">
          <a>
            <Image 
              src="/ledafilms-icon-dark.png" 
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link>
      </div>

      <div className="flex h-full">
        <ul className="w-full flex flex-col items-center text-xl">

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
      </div>

    </div>
  );
}




