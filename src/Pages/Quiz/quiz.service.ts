import { ServerError } from "../../types/serverError";
import axios from "axios";
import { catchAxiosErr } from "utils/catchAxiosError";
import { SubmitScoreResponse } from "./quiz.types";

export const submitResult = async (
  quizId: string,
  totalScore: number
): Promise<SubmitScoreResponse | ServerError> => {
  try {
    const res = await axios.post<SubmitScoreResponse>(`/scores/${quizId}`, {
      score: totalScore,
    });
    return res.data;
  } catch (err) {
    return catchAxiosErr(err);
  }
};
