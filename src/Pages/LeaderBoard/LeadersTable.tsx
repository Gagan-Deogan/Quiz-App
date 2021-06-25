import { Leaders } from "./leaderboard.types";

export const LeaderTable = ({ leaders }: { leaders: Leaders }) => {
  return (
    <>
      <ul>
        <li className="flex flex-row border-b-2 border-gray">
          <div className="border-gray w-1/2 py-2.5 px-3">
            <h3 className="font-bold">Username</h3>
          </div>
          <div className="border-gray w-1/2 py-2.5 px-3">
            <h3 className="font-bold">Total Score</h3>
          </div>
        </li>
        {leaders?.map((leader) => (
          <li className="flex flex-row border-b-2 border-gray ">
            <div className="w-1/2 py-2.5 px-3">{leader.userId.username}</div>
            <div className="w-1/2 py-2.5 px-3">{leader.totalScore}</div>
          </li>
        ))}
      </ul>
    </>
  );
};
