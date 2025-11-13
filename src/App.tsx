import { Checkbox } from "./components/checkbox";

export default function App() {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <PageSelector />
    </div>
  );
}

function PageSelector() {
  return (
    <div className="max-w-xl w-full rounded-2xl bg-white shadow-2xs px-4 py-6 border-2 border-zinc-100 gap-4 flex flex-col">
      <Header />
      <Seperator />
      {[1, 2, 3, 4, 5].map((num) => (
        <Page key={num} number={num} />
      ))}
      <Seperator />
      <Submit />
    </div>
  );
}

function Header() {
  return (
    <div className="py-2 px-2 flex items-center justify-between">
      <span className="text-lg font-medium text-zinc-800">All pages</span>
      <Checkbox />
    </div>
  );
}

type PageProps = {
  number: number;
  // onCheck: (num: number) => void;
};

function Page({ number }: PageProps) {
  return (
    <div className="py-2 px-2 flex items-center justify-between">
      <span className="text-lg font-medium text-stone-700">Page {number}</span>
      <Checkbox />
    </div>
  );
}

function Seperator() {
  return <div className="h-px bg-zinc-200 rounded" />;
}

function Submit() {
  return (
    <button className="w-full bg-amber-300 text-zinc-900 rounded-md p-4 cursor-pointer">
      Done
    </button>
  );
}
