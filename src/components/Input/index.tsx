"use client";
import { useState } from "react";
import { getQuantity } from "@/utilities/getQuantity";
import { getSalesValues } from "@/utilities/getSalesValues";
import {
  hiddenColumns,
  salesColumnOrder,
  quantityColumnOrder,
  headerNames,
} from "@/config";

export default function PasteTable() {
  const [rows, setRows] = useState<string[][]>([]);

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();

    const html = e.clipboardData.getData("text/html");
    if (html) {
      const doc = new DOMParser().parseFromString(html, "text/html");
      const table = doc.querySelector("table");
      if (table) {
        const parsed = Array.from(table.querySelectorAll("tr")).map((tr) =>
          Array.from(tr.querySelectorAll("td,th")).map(
            (cell) => cell.textContent?.trim() || ""
          )
        );
        setRows(parsed);
      }
    }
  };

  const topFive = getQuantity({ rows: { rows }, numberOfItems: 10 });
  const topFiveSales = getSalesValues({ rows: { rows }, numberOfItems: 10 });

  return (
    <div
      className="border p-8 rounded-xl flex gap-8"
      onPaste={handlePaste}
      style={{ minHeight: "200px", cursor: "text" }}
    >
      {rows.length === 0 ? (
        <textarea placeholder="Paste your Excel data here"></textarea>
      ) : (
        <>
          {topFive.length > 0 && (
            <div contentEditable={false}>
              <h2 className="font-bold mb-4">Top 5 Products by Quantity</h2>
              <table className="border-collapse border border-gray-400">
                <thead>
                  <tr>
                    {quantityColumnOrder
                      .filter((col) => !hiddenColumns.includes(col))
                      .map((col) => (
                        <th
                          key={col}
                          className="border border-gray-400 px-2 py-1"
                        >
                          {headerNames[col] || col}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {topFive.map((row, i) => (
                    <tr key={i}>
                      {quantityColumnOrder
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
          )}

          {topFiveSales.length > 0 && (
            <div contentEditable={false}>
              <h2 className="font-bold mb-4">Top 5 Products by Sales</h2>
              <table className="border-collapse border border-gray-400">
                <thead>
                  <tr>
                    {salesColumnOrder
                      .filter((col) => !hiddenColumns.includes(col))
                      .map((col) => (
                        <th
                          key={col}
                          className="border border-gray-400 px-2 py-1"
                        >
                          {headerNames[col] || col}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {topFiveSales.map((row, i) => (
                    <tr key={i}>
                      {salesColumnOrder
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
          )}
        </>
      )}
    </div>
  );
}
