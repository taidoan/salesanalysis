// Columns to hide in the table
export const hiddenColumns = [
  "Product Division",
  "Category",
  "Sub Category",
  "Destination",
  "Portion",
  "% of Division",
  "% of Category",
  "% of Sub-Cat",
  "% of Total Sales",
  "Net Value of Sales",
];

// Order for sales table
export const salesColumnOrder = ["Product Name", "Value of Sales"];

// Order for quantity table
export const quantityColumnOrder = ["Product Name", "Quantity Sold"];

// Header names mapping for better readability
export const headerNames: Record<string, string> = {
  "Product Name": "Product",
  "Value of Sales": "Sales (£)",
  "Quantity Sold": "Quantity",
  "Net Value of Sales": "Net Sales (£)",
  "Product Division": "Division",
};
