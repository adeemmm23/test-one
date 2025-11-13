import type { PagesDataType } from "../types";

import { Plus, Minus } from "lucide-react";

type CounterProps = {
  pagesData: PagesDataType[];
  setPagesData: React.Dispatch<React.SetStateAction<PagesDataType[]>>;
};

export default function Counter({ pagesData, setPagesData }: CounterProps) {
  const addPage = () => {
    const newPageNumber = (pagesData.length + 1).toString();
    const newPagesData = [
      ...pagesData,
      { number: newPageNumber, isChecked: false },
    ];
    setPagesData(newPagesData);
  };

  const removePage = () => {
    if (pagesData.length === 0) return;
    const newPagesData = pagesData.slice(0, -1);
    setPagesData(newPagesData);
  };

  return (
    <div className="group flex gap-3 rounded-md bg-primary p-2 fixed bottom-20 shadow-(--shadow-card) transition-all hover:bg-primary/90 active:scale-95">
      <button
        disabled={pagesData.length === 0}
        className=" text-white cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={removePage}
      >
        <Minus />
      </button>
      <span className="text-white font-medium select-none w-20 text-center">
        {pagesData.length} {pagesData.length === 1 ? "page" : "pages"}
      </span>
      <button
        className="text-white cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={addPage}
      >
        <Plus />
      </button>
    </div>
  );
}
