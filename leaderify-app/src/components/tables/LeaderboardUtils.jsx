import IconButton from "../buttons/IconButton";

const iconNames = [
  "view",
  "filter",
  "compare",
  "statistics",
  "group",
  "favorite",
  "share",
  "export",
];

export default function LeaderboardUtils() {
  return (
    <>
      <div className="h-full max-h-[75%] flex flex-col w-16 max-w-5xl rounded-sm bg-mauve-900 border border-mauve-500 [@media(max-height:600px)]:overflow-scroll">
        {iconNames.map((name,index) => (
          <IconButton
            onClick={() => {}}
            sizing={"h-[12.5%] w-full [@media(max-height:600px)]:h-10"}
            iconName={name}
            iconColor={"text-white"}
            rounded={index == 0 ? "rounded-t-sm" : index == iconNames.length - 1 ? "rounded-b-sm" : ""}
            hoverColor={"hover:text-white"}
            bgHoverColor={"hover:bg-mauve-700"}
            strokeWidth={1}
            tooltip={name.charAt(0).toUpperCase() + name.slice(1)}
          />
        ))}
      </div>
    </>
  );
}
