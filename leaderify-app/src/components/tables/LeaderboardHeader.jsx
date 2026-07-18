export default function LeaderboardHeader({headers}){
    return (
        <>
        <tr>
            {headers.map((header, index) => (
              <th className={`${index == 0 ? "sticky left-0 z-1" : ""} sticky top-0 bg-mauve-900 text-left font-semibold p-4 text-white`} key={header}>{header.charAt(0).toUpperCase() + header.slice(1)}</th>
            ))}
        </tr>
        </>
    );
}