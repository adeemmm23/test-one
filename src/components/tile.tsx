import { Checkbox } from "./checkbox";

type TileProps = {
  content: string;
  isChecked: boolean;
  onCheck: (checked: boolean) => void;
};
export default function Tile({ content, isChecked, onCheck }: TileProps) {
  return (
    <div className="py-2 px-2 flex items-center justify-between animate-in fade-in-50 slide-in-from-top-5 duration-500">
      <span className="text-lg font-medium text-stone-700">{content}</span>
      <Checkbox checked={isChecked} onCheckedChange={onCheck} />
    </div>
  );
}
