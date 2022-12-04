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
      <div className="cursor-pointer text-sm flex items-center">
        (any)
        <span className="ml-4">
          <DownArrow
            size={20}
          />
        </span>
      </div>
      <div className="hidden">
        { options.map(({ label, value }) => (
          <div key={value} onClick={() => callback(value)}>{ label }</div>
        )) }
      </div>
    </div>
  );
}

