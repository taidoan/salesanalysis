import { headerNames, hiddenColumns } from "@/config";
type TableProps = {
  header: string;
  columns: string[];
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  data: Record<string, any>[];
  className?: string;
};

export const Table = ({ header, columns, data, className }: TableProps) => {
  return (
    <div contentEditable={false} className={className}>
      <h2 className="font-bold mb-4 print:text-left">{header}</h2>
      <table className="border-collapse border border-slate-800 dark:border-grey-950 print:border-black print:border-collapse dark:border-stone-900">
        <thead>
          <tr>
            {columns
              .filter((col) => !hiddenColumns.includes(col))
              .map((col) => (
                <th
                  key={col}
                  className="border border-slate-800 bg-slate-800 px-2 py-1 text-white dark:bg-stone-900 dark:text-white dark:border-grey-950 print:border-black print:border-collapse dark:border-stone-900"
                >
                  {headerNames[col] || col}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {columns
                .filter((col) => !hiddenColumns.includes(col))
                .map((col) => (
                  <td
                    key={col}
                    className="border border-slate-800 px-2 py-1 text-center bg-white/80 dark:border-grey-950 print:border-black print:border-collapse dark:border-stone-900 dark:!bg-stone-700/80 dark:!text-white"
                  >
                    {col === "Value of Sales"
                      ? new Intl.NumberFormat("en-GB", {
                          style: "currency",
                          currency: "GBP",
                        }).format(row[col])
                      : row[col]}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
