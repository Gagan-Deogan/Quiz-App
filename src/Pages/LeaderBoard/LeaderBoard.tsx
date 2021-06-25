import { useState, useEffect } from "react";
import { Loader } from "Components/Loader";
import { Leaders } from "./leaderboard.types";
import { getLeaderBoard } from "./leaderBoard.service";
import { LeaderTable } from "./LeadersTable";
export const LeaderBoard = () => {
  const [leaders, setLeader] = useState<Leaders | null>(null);
  const [status, setStatus] = useState<
    "IDLE" | "PENDING" | "FULFILLED" | "ERROR"
  >("IDLE");

  useEffect(() => {
    if (status === "IDLE") {
      (async () => {
        setStatus("PENDING");
        const res = await getLeaderBoard();
        if ("data" in res) {
          setStatus("FULFILLED");
          setLeader(res.data);
        } else {
          setStatus("ERROR");
        }
      })();
    }
  }, [status]);

  return (
    <>
      <section className="lg:container mx-auto px-3 md:max-w-md lg:max-w-xl">
        {status === "PENDING" && <Loader />}
        {status === "FULFILLED" && (
          <>
            <h1 className="mt-6 mb-8 text-3xl md:text-4xl">LeaderBoard</h1>
            {leaders && <LeaderTable leaders={leaders} />}
          </>
        )}
      </section>
    </>
  );
};
