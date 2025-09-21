import { headerNames, hiddenColumns } from "@/config";
type TableProps = {
  header: string;
  columns: string[];
  data: Record<string, any>[];
};

export const Table = ({ header, columns, data }: TableProps) => {
  return (
    <div contentEditable={false}>
      <h2 className="font-bold mb-4">{header}</h2>
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            {columns
              .filter((col) => !hiddenColumns.includes(col))
              .map((col) => (
                <th key={col} className="border border-gray-400 px-2 py-1">
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
                    className="border border-gray-400 px-2 py-1 text-center"
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
