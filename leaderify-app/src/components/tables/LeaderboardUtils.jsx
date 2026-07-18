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
      <div className="flex flex-col w-16 max-w-5xl rounded-sm bg-mauve-900 border border-mauve-500">
        {iconNames.map((name) => (
          <IconButton
            onClick={() => {}}
            height={16}
            iconName={name}
            iconColor={"text-white"}
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
