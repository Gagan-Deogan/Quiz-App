import { ServerError } from "./../../types/serverError";
import axios from "axios";
import { catchAxiosErr } from "utils/catchAxiosError";
import { SubmitScoreResponse } from "./quiz.types";

export const submitResult = async (
  quizId: string,
  totalScore: number
): Promise<SubmitScoreResponse | ServerError> => {
  try {
    const res: SubmitScoreResponse = await axios.post(`/scores/${quizId}`, {
      score: totalScore,
    });
    return res;
  } catch (err) {
    return catchAxiosErr(err);
  }
};
