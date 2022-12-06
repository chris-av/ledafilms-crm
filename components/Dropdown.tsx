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
  return (
    <div className="flex justify-center items-center bg-gray-200 w-full py-1 rounded">

      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 px-4 rounded leading-tight focus:outline-none focus:border-gray-400">
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

