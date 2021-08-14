import { Quizzies, Status } from "types";
export type QuizziesContextState = {
  quizzes: Quizzies | null;
  setQuizzes: (quizzes: Quizzies | null) => void;
  status: Status;
  setStatus: (status: Status) => void;
};
