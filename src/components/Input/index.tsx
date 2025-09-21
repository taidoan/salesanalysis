"use client";
import { useState } from "react";
import { getQuantity } from "@/utilities/getQuantity";
import { getSalesValues } from "@/utilities/getSalesValues";
import { Results } from "../Result";
import {
  baseButton,
  enabledButton,
  fieldClass,
  fieldContainerClass,
  hoverButton,
  labelClass,
} from "./../../classes";
import { clsx } from "clsx";

export default function PasteTable() {
  const [rows, setRows] = useState<string[][]>([]);
  const [numberOfProducts, setNumberOfProducts] = useState(5);

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

  const quantity = getQuantity({
    rows: { rows },
    numberOfItems: numberOfProducts,
  });
  const sales = getSalesValues({
    rows: { rows },
    numberOfItems: numberOfProducts,
  });

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
      print:w-full
      transition-all duration-300 flex gap-8"
      onPaste={handlePaste}
    >
      {rows.length === 0 ? (
        <form className="flex flex-col gap-4">
          <div className={clsx(fieldContainerClass)}>
            <label className={clsx(labelClass)} htmlFor="numberOfProducts">
              Number of Products:
            </label>
            <input
              type="number"
              value={numberOfProducts}
              onChange={(e) => setNumberOfProducts(Number(e.target.value))}
              className={clsx(fieldClass)}
              max={15}
              min={1}
            />
          </div>
          <div className={clsx(fieldContainerClass)}>
            <label className={clsx(labelClass)} htmlFor="excelData">
              Product Sales Data:
            </label>
            <textarea
              placeholder="Paste your Excel data here"
              rows={7}
              cols={50}
              className={clsx(fieldClass)}
            ></textarea>
          </div>
        </form>
      ) : (
        <Results
          quantity={quantity}
          sales={sales}
          numberOfProducts={numberOfProducts}
          setNumberOfProducts={setNumberOfProducts}
          setRows={setRows}
        />
      )}
    </div>
  );
}
