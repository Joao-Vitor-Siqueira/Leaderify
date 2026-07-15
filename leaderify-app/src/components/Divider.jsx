export default function Divider({text}) {
  return (
    <>
      <div className="relative mt-2">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-mauve-300"></div>
        </div>
        <div className="relative flex justify-center text-sm font-medium leading-6">
          <span class="bg-white px-4 text-slate-400">{text}</span>
        </div>
      </div>
    </>
  );
}
