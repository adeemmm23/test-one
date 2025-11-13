import * as React from "react";
import Seperator from "./components/seperator";
import Submit from "./components/submit";
import Tile from "./components/tile";
import type { PagesDataType } from "./types";
import Counter from "./components/counter";

export default function App() {
  const [pagesData, setPagesData] = React.useState<PagesDataType[]>([
    { number: "1", isChecked: false },
    { number: "2", isChecked: true },
    { number: "3", isChecked: false },
  ]);
  return (
    <div className="min-h-screen bg-background flex justify-center items-center flex-col gap-6 animate-in fade-in-50 slide-in-from-top-5 duration-500">
      <PageSelector pagesData={pagesData} setPagesData={setPagesData} />
      <Counter pagesData={pagesData} setPagesData={setPagesData} />
    </div>
  );
}

type PageSelectorProps = {
  pagesData: PagesDataType[];
  setPagesData: React.Dispatch<React.SetStateAction<PagesDataType[]>>;
};

function PageSelector({ pagesData, setPagesData }: PageSelectorProps) {
  return (
    <div className="max-w-lg w-full rounded-xl bg-background px-4 py-6 border-2 border-input/25 gap-4 flex flex-col shadow-(--shadow-card)">
      <Tile
        content="All pages"
        isChecked={pagesData.every((page) => page.isChecked)}
        onCheck={() => {
          const allChecked = pagesData.every((page) => page.isChecked);
          setPagesData(
            pagesData.map((page) => ({ ...page, isChecked: !allChecked }))
          );
        }}
      />
      <Seperator />
      <div className="max-h-96 flex flex-col gap-4 overflow-y-auto [scrollbar-gutter:stable] [scrollbar-width:thin]">
        {pagesData.length > 0 ? (
          pagesData.map((page) => (
            <Tile
              key={page.number}
              content={`Page ${page.number}`}
              isChecked={page.isChecked}
              onCheck={() => {
                const newPageState = { ...page, isChecked: !page.isChecked };
                const newPagesData = pagesData.map((p) =>
                  p.number === page.number ? newPageState : p
                );
                setPagesData(newPagesData);
              }}
            />
          ))
        ) : (
          <div className="text-center text-sm text-zinc-500 py-6">
            No pages available
          </div>
        )}
      </div>
      <Seperator />
      <Submit />
    </div>
  );
}
