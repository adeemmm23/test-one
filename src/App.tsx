import Seperator from "./components/seperator";
import Submit from "./components/submit";
import Tile from "./components/tile";

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
      <Tile content="All pages" isChecked={false} onCheck={() => {}} />
      <Seperator />
      {[1, 2, 3, 4, 5].map((num) => (
        <Tile
          key={num}
          content={`Page ${num}`}
          isChecked={false}
          onCheck={() => {}}
        />
      ))}
      <Seperator />
      <Submit />
    </div>
  );
}
