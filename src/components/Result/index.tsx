import { clsx } from "clsx";
import { Table } from "../Table";
import { salesColumnOrder, quantityColumnOrder } from "@/config";
import {
  baseButton,
  enabledButton,
  fieldClass,
  fieldContainerClass,
  hoverButton,
  labelClass,
} from "./../../classes";

type ResultProps = {
  quantity: Record<string, any>[];
  sales: Record<string, any>[];
  numberOfProducts: number;
  setNumberOfProducts: React.Dispatch<React.SetStateAction<number>>;
  setRows: React.Dispatch<React.SetStateAction<string[][]>>;
};

export const Results = ({
  quantity,
  sales,
  numberOfProducts,
  setNumberOfProducts,
  setRows,
}: ResultProps) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4 align-middle justify-center">
        <div className={fieldContainerClass}>
          <label className={labelClass} htmlFor="numberOfProducts">
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
        <button
          onClick={() => setRows([])}
          className={clsx(baseButton, enabledButton, hoverButton)}
        >
          Back
        </button>
        <button
          onClick={() => window.print()}
          className={clsx(baseButton, enabledButton, hoverButton)}
        >
          Print
        </button>
      </div>
      <div className="flex gap-8" id="printableArea">
        {quantity.length > 0 && (
          <Table
            header={`Top ${numberOfProducts} Products by Quantity`}
            columns={quantityColumnOrder}
            data={quantity}
            className={clsx(fieldContainerClass, "!gap-y-0")}
          />
        )}

        {sales.length > 0 && (
          <Table
            header={`Top ${numberOfProducts} Products by Sales`}
            columns={salesColumnOrder}
            data={sales}
            className={clsx(fieldContainerClass, "!gap-y-0")}
          />
        )}
      </div>
    </div>
  );
};
