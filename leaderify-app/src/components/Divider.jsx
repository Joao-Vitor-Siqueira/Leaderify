const MARGIN_MAP = {
  1: "mt-1",
  2: "mt-2",
  4: "mt-4",
  6: "mt-6",
  8: "mt-8",
};

export default function Divider({text, margin}) {
  const marginClass = MARGIN_MAP[margin] || "";

  return (
    <>
      <div className={`relative ${marginClass}`}>
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-mauve-300"></div>
        </div>
        <div className="relative flex justify-center text-sm font-medium leading-6">
          <span className="bg-white px-4 text-slate-400">{text}</span>
        </div>
      </div>
    </>
  );
}
