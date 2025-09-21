// Label style
export const labelClass = `font-bold leading-4 content-center text-left`;

// Label requirement style e.g. (Optional) or (Required)
export const labelRequirementClass = "text-sm font-normal dark:text-grey-400";

// Label required asterisk style
export const labelRequiredClass = "text-red-600";

// Checkbox style
export const checkBoxClass = "accent-primary-600 focus:accent-primary-600";

// Field container style
export const fieldContainerClass = `rounded-xl bg-white/25 border border-white/40 p-4 px-4 grow flex flex-col gap-2 gap-y-3 shadow-[0px_4px_4px_rgba(0,0,0,0.075)] dark:shadow-[2px_4px_4px_rgba(0,0,0,0.1)] dark:bg-stone-600/30  dark:border-white/10 print:shadow-none`;

// Field style
export const fieldClass = `rounded-lg p-3 py-3 shadow  bg-white/50 dark:bg-stone-900/60 dark:shadow-none dark:text-grey-200 placeholder:text-grey-400 dark:placeholder:text-grey-400 focus:outline-2 focus:outline-primary-600 focus:ring-inset focus:outline-none focus:shadow-none focus:outline-offset-0 `;

// Base button style
export const baseButton = `text-grey-600 rounded-lg p-3 px-5 font-bold border ease-in-out duration-300 transition-all duration-300 shadow-md`;

// Disabled button style
export const disabledButton = `bg-gray-400/20 border-white/0 shadow-none text-gray-500/75 dark:text-gray-400/30`;

// Enabled button style
export const enabledButton = `bg-white/30 border-white/40 dark:border-white/20 dark:text-white cursor-pointer`;

// Hover button style
export const hoverButton = `hover:-translate-y-0.5 hover:bg-indigo-400 hover:border-indigo-400 hover:shadow-lg/20 dark:hover:text-black dark:hover:bg-white/60 dark:hover:border-white/60 hover:text-white`;

// Active button style
export const activeButton = `
${baseButton} bg-linear-to-br from-gray-600/90 to-gray-500/70 border-gray-300 shadow-inner text-white dark:border-gray-200/20 inset-shadow-sm/10 dark:from-gray-800/90 dark:to-gray-500/60
`;
