import type { RowObject } from "./toObject";
import { toObjects } from "./toObject";

type QuantityProps = {
  rows: RowObject;
  numberOfItems: number;
};

/**
 * Returns the top N items with the highest "Quantity Sold" from the provided rows.
 *
 * - Converts the input rows to objects.
 * - Filters out items where "Product Name" contains "subtotal", "no-upsell", or "plain",
 *   and where "Sub Category" contains "choices/options".
 * - Sorts the remaining items by "Quantity Sold" in descending order.
 * - Returns up to `numberOfItems` items.
 *
 * @param rows - The input data rows to process.
 * @param numberOfItems - The maximum number of items to return (default is 5).
 * @returns An array of objects representing the top items by quantity sold.
 */
export const getQuantity = ({ rows, numberOfItems = 5 }: QuantityProps) => {
  const objects = toObjects(rows);
  if (!objects.length) return [];

  // Find the column for "Quantity Sold"
  const col = "Quantity Sold";
  return [...objects]
    .map(
      (r) =>
        ({
          ...r,
          [col]: Number(r[col]) || 0,
          /* eslint-disable  @typescript-eslint/no-explicit-any */
        } as Record<string, any>)
    )
    .filter(
      (r) =>
        r["Product Name"] &&
        !r["Product Name"].toLowerCase().includes("subtotal") &&
        !r["Product Name"].toLowerCase().includes("no-upsell") &&
        !r["Product Name"].toLowerCase().includes("plain") &&
        !r["Sub Category"].toLowerCase().includes("choices/options")
    )
    .sort((a, b) => b[col] - a[col])
    .slice(0, numberOfItems);
};
