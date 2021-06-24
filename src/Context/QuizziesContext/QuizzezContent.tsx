import { useContext, createContext, useState } from "react";
import { Quizzies } from "types";

type Context = {
  quizzes: Quizzies | null;
  setQuizzes: (quizzes: Quizzies | null) => void;
  status: "IDLE" | "PENDING" | "FULFILLED" | "ERROR";
  setStatus: (status: "IDLE" | "PENDING" | "FULFILLED" | "ERROR") => void;
};

const QuizzesContext = createContext<Context>({} as Context);

export const QuizzezProvider: React.FC = ({ children }) => {
  const [quizzes, setQuizzes] = useState<Quizzies | null>(null);
  const [status, setStatus] = useState<
    "IDLE" | "PENDING" | "FULFILLED" | "ERROR"
  >("IDLE");
  return (
    <QuizzesContext.Provider value={{ quizzes, setQuizzes, status, setStatus }}>
      {children}
    </QuizzesContext.Provider>
  );
};

export const useQuizzez = () => {
  return useContext(QuizzesContext);
};
