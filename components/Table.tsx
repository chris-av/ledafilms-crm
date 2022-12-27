import Link from 'next/link';

interface ComponentProps {
  headers: string[],
  rows: any[],
}

export default function Table({ headers, rows } : ComponentProps) {
  return (
    <table>
      <thead>
        <tr>
          {/* render your column headers, th */}
        </tr>
      </thead>

      <tbody>
        {/* contracts */}
        { rows.map(row => {
          return Object.keys(row).map(key => (
            <tr>
              <Link href={row[key].link}>
                <a>{row[key]}</a>
              </Link>
            </tr>
          ))
        }) }
      </tbody>

    </table>
  );
}

