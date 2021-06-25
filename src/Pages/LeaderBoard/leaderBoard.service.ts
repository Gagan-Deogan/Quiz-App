import { ServerError } from "types/serverError";
import { catchAxiosErr } from "utils/catchAxiosError";
import axios from "axios";
import { LeaderBoardResponse } from "./leaderboard.types";
export const getLeaderBoard = async (): Promise<
  LeaderBoardResponse | ServerError
> => {
  try {
    const res = await axios.get<LeaderBoardResponse>("/leader-board");
    return res.data;
  } catch (err) {
    return catchAxiosErr(err);
  }
};
