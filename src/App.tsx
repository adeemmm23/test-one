import Seperator from "./components/seperator";
import Submit from "./components/submit";
import Tile from "./components/tile";
import * as React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-background flex justify-center items-center">
      <PageSelector />
    </div>
  );
}

function PageSelector() {
  const [pagesData, setPagesData] = React.useState<PagesDataType[]>([
    { number: "1", isChecked: false },
    { number: "2", isChecked: true },
    { number: "3", isChecked: false },
  ]);
  return (
    <div className="max-w-lg w-full rounded-2xl bg-background px-4 py-6 border-2 border-input gap-4 flex flex-col shadow-(--shadow-card) animate-in fade-in-50 slide-in-from-top-5 duration-500">
      <Tile
        content="All pages"
        isChecked={pagesData.every((page) => page.isChecked)}
        onCheck={() => {
          const allChecked = pagesData.every((page) => page.isChecked);
          setPagesData((prev) =>
            prev.map((page) => ({ ...page, isChecked: !allChecked }))
          );
        }}
      />
      <Seperator />
      {pagesData.length > 0 ? (
        pagesData.map((page) => (
          <Tile
            key={page.number}
            content={`Page ${page.number}`}
            isChecked={page.isChecked}
            onCheck={() => {
              setPagesData((prev) =>
                prev.map((p) =>
                  p.number === page.number
                    ? { ...p, isChecked: !p.isChecked }
                    : p
                )
              );
            }}
          />
        ))
      ) : (
        <div className="text-center text-sm text-zinc-500 py-6">
          No pages available
        </div>
      )}
      <Seperator />
      <Submit />
    </div>
  );
}

type PagesDataType = {
  number: string;
  isChecked: boolean;
};
