import { Quiz } from "./../../types/share.types";

export type InitialState = {
  attemptedQuiz: Quiz | null;
  currentQuestion: number;
  totalScore: number;
  isFinish: boolean;
};

export type Action =
  | { type: "LOAD_QUIZ"; payload: { quiz: Quiz | null } }
  | { type: "SKIP_QUESTION" }
  | {
      type: "SUBMIT_ANSWER";
      payload: { questionId: string; optionId: string };
    }
  | { type: "CALCULATE_SCORE" };
