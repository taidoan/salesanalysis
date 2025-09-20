"use client";
import { useState } from "react";
import { toObjects } from "@/utilities/toObject";
import { getQuantity } from "@/utilities/getQuantity";
import { getSalesValues } from "@/utilities/getSalesValues";

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
      className="border p-4"
      contentEditable
      suppressContentEditableWarning
      onPaste={handlePaste}
      style={{ minHeight: "200px", cursor: "text" }}
    >
      {rows.length === 0 ? (
        <p>Paste your Excel data here</p>
      ) : (
        <>
          {/* Full pasted table */}
          <table className="border-collapse border border-gray-400 mb-6">
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="border border-gray-400 px-2 py-1">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Top 5 section */}
          {topFive.length > 0 && (
            <div>
              <h2 className="font-bold mb-2">Top 5 by Quantity Sold</h2>
              <table className="border-collapse border border-gray-400">
                <thead>
                  <tr>
                    {Object.keys(topFive[0]).map((h) => (
                      <th key={h} className="border border-gray-400 px-2 py-1">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {topFive.map((row, i) => (
                    <tr key={i}>
                      {Object.values(row).map((val, j) => (
                        <td
                          key={j}
                          className="border border-gray-400 px-2 py-1"
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {topFiveSales.length > 0 && (
            <div>
              <h2 className="font-bold mb-2">Top 5 by Value of Sales</h2>
              <table className="border-collapse border border-gray-400">
                <thead>
                  <tr>
                    {Object.keys(topFiveSales[0]).map((h) => (
                      <th key={h} className="border border-gray-400 px-2 py-1">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {topFiveSales.map((row, i) => (
                    <tr key={i}>
                      {Object.values(row).map((val, j) => (
                        <td
                          key={j}
                          className="border border-gray-400 px-2 py-1"
                        >
                          {val}
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
