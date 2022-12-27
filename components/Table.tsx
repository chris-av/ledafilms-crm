import Link from 'next/link';

interface ComponentProps {
  headers: string[],
  rows: any[],
  rowHandler?: () => void,
  columnHandler?: () => void,
}

export default function Table({ headers, rows } : ComponentProps) {
  return (
    <table>
      <thead>
        <tr>
          {/* render your column headers, th */}
          { headers.map(header => <td id={header}>{header}</td>) }
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

