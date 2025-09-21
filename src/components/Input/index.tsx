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
import { Table } from "../Table";

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
      className="    rounded-3xl 
      p-6
      bg-white/30 
      backdrop-blur-xl 
      border border-white/40
      shadow-2xl
      text-center 
      dark:bg-stone-900/50 
      dark:border-stone-100/20 
      print:bg-white
      transition-all duration-300 flex gap-8"
      onPaste={handlePaste}
      style={{ minHeight: "200px", cursor: "text" }}
    >
      {rows.length === 0 ? (
        <textarea placeholder="Paste your Excel data here"></textarea>
      ) : (
        <>
          {topFive.length > 0 && (
            <Table
              header="Top 10 Products by Quantity"
              columns={quantityColumnOrder}
              data={topFive}
            />
          )}

          {topFiveSales.length > 0 && (
            <Table
              header="Top 10 Products by Sales"
              columns={salesColumnOrder}
              data={topFiveSales}
            />
          )}
        </>
      )}
    </div>
  );
}
