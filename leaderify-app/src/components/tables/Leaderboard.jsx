import LeaderboardHeader from "./LeaderboardHeader";
import LeaderboardRow from "./LeaderboardRow";
import LeaderboardUtils from "./LeaderboardUtils";

export default function Leaderboard({ data }) {
  const placeholderData = [];
  for (let i = 0; i < 50; i++) {
    placeholderData.push({
      name: "Real Madrid",
      points: 12,
      wins: 4,
      losses: 0,
      draws: 0,
      goalsScored: 18,
      goalsTaken: 2,
      SG: 16
    });
  }
  const keys = Object.keys(placeholderData[0]);

  return (
    <>
      {/* Container for Leaderboard and Leaderboard utils */}
      <div className="flex h-full w-full justify-center items-center gap-4 lg:gap-6 text-xs md:text-sm">
        
        {/* Leaderboard table */}
        <div className="overflow-auto h-full max-h-[85%] lg:max-h-[90%] [@media(max-height:600px)]:max-h-[75%] w-full max-w-6xl bg-mauve-100 border border-mauve-500 rounded-sm">
          <table className="text-mauve-800 w-full shadow-md">
            <thead>
              <LeaderboardHeader headers={Object.keys(placeholderData[0])} />
            </thead>
            <tbody>
              {placeholderData.map((obj, index) => (
                <LeaderboardRow key={index} data={obj} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Sidebar next to leaderboard */}
        <LeaderboardUtils/>  
      </div>    
    </>
  );
}
