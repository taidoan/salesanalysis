import PasteTable from "@/components/Input";

export default function Home() {
  return (
    <div className="font-sans flex align-middle justify-center flex-col h-screen print:h-full print:mt-10">
      <header className="py-12 header max-w-275 mx-auto">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold uppercase break-words">
            Sales Analysis
          </h1>
          <p className="text-lg w-9/12 mx-auto mt-2">
            This tool just simply lists out the top products by quantity sold
            and by value of sales. It is designed to be used with sales data
            exported from the &apos;Product Sales&apos; report available on
            Aztec Reporting. Simply copy and paste the data from Excel into the
            text area below.
          </p>
          <p className="text-sm w-9/12 mx-auto mt-2 text-grey-400">
            (Max 15 products)
          </p>
        </div>
      </header>
      <main className="flex justify-center">
        <PasteTable />
      </main>
      <footer className="footer">
        <div className="w-1/2 mx-auto text-center my-6 text-small text-white">
          Made by <a href="mailto:tai.doan@me.com">Tai</a> /{" "}
          <a href="https://taidoan.com" target="_blank" rel="noreferrer">
            www.taidoan.com
          </a>
        </div>
      </footer>
    </div>
  );
}
