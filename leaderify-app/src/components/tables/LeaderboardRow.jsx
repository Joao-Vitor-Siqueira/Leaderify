export default function LeaderboardRow({ data, hasImage }) {
  const values = Object.values(data);
  return (
    <>
      <tr>
        {values.map((value, index) => (
          <td
            className={`p-2 text-white border-b border-mauve-500 ${index == 0 ? "sticky left-0 font-semibold bg-mauve-700" : index % 2 == 0 ? "bg-mauve-700" : "bg-mauve-600"}`}
            key={index}
          >
            {value}
          </td>
        ))}
      </tr>
    </>
  );
}
