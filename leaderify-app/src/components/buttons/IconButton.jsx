import Icon from "../utils/Icon";

export default function IconButton({
  onClick,
  iconName,
  iconColor,
  hoverColor,
  bgHoverColor,
  rounded,
  strokeWidth,
  tooltip,
  sizing,
  fill,
}) {
  const buttonClass = [
    "cursor-pointer p-2 transition-colors focus:outline-none w-full h-full",
    rounded ? rounded : "",
    iconColor || "text-slate-600",
    hoverColor || "hover:text-slate-900",
    bgHoverColor || "hover:bg-slate-100",
  ]
    .filter(Boolean)
    .join(" ");

  const containerClass = `group relative ${sizing ?? "h-12 w-12 inline-block"}`;

  return (
    <>
      <div className={containerClass}>
        <button type="button" className={buttonClass} onClick={onClick}>
          <Icon name={iconName} strokeWidth={strokeWidth} fill={fill}/>
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
