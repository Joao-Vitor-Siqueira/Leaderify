import Icon from "../utils/Icon";

const widths = {
  12: "w-12",
  14: "w-14",
  16: "w-16",
};

const heights = {
  12: "h-12",
  14: "h-14",
  16: "h-16",
};

export default function IconButton({
  onClick,
  width,
  height,
  iconName,
  iconColor,
  hoverColor,
  bgHoverColor,
  rounded,
  strokeWidth,
  tooltip,
}) {
  const classBuilder = [
    "cursor-pointer p-2 transition-colors focus:outline-none w-full h-full",
    rounded && "rounded-lg",
    iconColor || "text-slate-600",
    hoverColor || "hover:text-slate-900",
    bgHoverColor || "hover:bg-slate-100",
  ]
    .filter(Boolean)
    .join(" ");

  const widthClass = width ? widths[width] : "w-full";
  const heightClass =   height ? heights[height] : "h-12";

  return (
    <>
      <div className={`group relative inline-block ${widthClass} ${heightClass}`}>
        <button type="button" className={classBuilder} onClick={onClick}>
          <Icon name={iconName} strokeWidth={strokeWidth} />
        </button>
        {tooltip && (
          <span class="absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 scale-0 rounded bg-mauve-700 px-2 py-1 text-xs text-white transition-all group-hover:scale-100
          after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-mauve-700">
            {tooltip}
          </span>
        )}
      </div>
    </>
  );
}
