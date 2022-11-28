import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { testUser } from '@/data/user.data';


export default function Topbar({ theme } : { theme: string }) {
  const [ search, setSearch ] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    return;
  };

  return (
    <div className="w-full flex items-center bg-[#141825]">
      <div className="relative select-none w-[50px] h-[50px] ml-8 my-2">
        <Link href="/">
          <a>
            <Image 
              src="/ledafilms-icon-light.png" 
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link>
      </div>


      <div className="ml-16 w-full max-w-[40%] flex items-center bg-[white] rounded-md p-1 text-sm">
        <SearchIcon />
        <input
          type="text" placeholder="Search" value={search} onChange={handleSearch}
          className="w-full rounded-md px-4 border-none outline-none"
        />
      </div>

      <div className="select-none cursor-pointer ml-auto mr-10 rounded-[50%] h-[45px] w-[45px] bg-[white] flex justify-center items-center text-2xl">
        { testUser.name.split(' ').map(word => word.substring(0, 1)).join('') }
      </div>

    </div>
  );
}




function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>
  );
}

