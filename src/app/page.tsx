import PasteTable from "@/components/Input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex align-middle justify-center flex-col h-screen print:h-full print:mt-10">
      <main className="flex justify-center">
        <PasteTable />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
