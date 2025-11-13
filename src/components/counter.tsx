import type { PagesDataType } from "../types";

import { Plus, Minus } from "lucide-react";

type CounterProps = {
  pagesData: PagesDataType[];
  setPagesData: React.Dispatch<React.SetStateAction<PagesDataType[]>>;
};

export default function Counter({ pagesData, setPagesData }: CounterProps) {
  return (
    <div className="flex gap-3 rounded bg-primary p-2 fixed bottom-20 shadow-(--shadow-card)">
      <button
        disabled={pagesData.length === 0}
        className=" text-white cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => {
          if (pagesData.length === 0) return;
          const newPagesData = pagesData.slice(0, -1);
          setPagesData(newPagesData);
        }}
      >
        <Minus />
      </button>
      <span className="text-white font-medium select-none">
        {pagesData.length} {pagesData.length === 1 ? "page" : "pages"}
      </span>
      <button
        className="text-white cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => {
          const newPageNumber = (pagesData.length + 1).toString();
          const newPagesData = [
            ...pagesData,
            { number: newPageNumber, isChecked: false },
          ];
          setPagesData(newPagesData);
        }}
      >
        <Plus />
      </button>
    </div>
  );
}
