import { catchAxiosErr } from "utils/catchAxiosError";
import { ServerError } from "types";
import axios from "axios";
import { QuizzesResponse } from "./home.types";
export const getPlaylist = async (): Promise<QuizzesResponse | ServerError> => {
  try {
    const res: QuizzesResponse = await axios.get("/quizzes");
    return { data: res.data };
  } catch (err) {
    return catchAxiosErr(err);
  }
};
