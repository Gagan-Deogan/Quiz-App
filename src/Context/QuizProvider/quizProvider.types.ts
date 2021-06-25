import { Quiz } from "types/share.types";

export type QuizInitialState = {
  attemptedQuiz: Quiz | null;
  currentQuestion: number;
  totalScore: number;
  isFinish: boolean;
  isResultSubmit: boolean;
};

export type QuizAction =
  | { type: "LOAD_QUIZ"; payload: { quiz: Quiz | null } }
  | { type: "SKIP_QUESTION" }
  | {
      type: "SUBMIT_ANSWER";
      payload: { questionId: string; optionId: string };
    }
  | { type: "RESULT_SUBMITED" };

export type Context = {
  state: QuizInitialState;
  dispatch: (action: QuizAction) => void;
};
