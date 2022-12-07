import { useState, useEffect } from 'react';
import DownArrow from '@/components/icons/ChevronDown';

interface Options {
  label: string;
  value: string | number;
}

interface ComponentProps {
  options: Options[],
  callback: (val: any) => any
}

export default function Dropdown({ options, callback } : ComponentProps) {

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    callback(event.target.value);
  }

  return (
    <div className="flex justify-center items-center bg-gray-200 w-full py-1 rounded">

      <div className="relative w-full">
        <select defaultValue={options[0].value} onChange={handleSelect} className="block appearance-none outline-none w-full bg-gray-200 border border-gray-200 text-gray-700 px-4 rounded leading-tight focus:outline-none">
          { options.map(({ label, value }) => (
            <option key={value} value={value}>{label}</option>
          )) }
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <DownArrow size={15} />
        </div>
      </div>

    </div>
  );
}

