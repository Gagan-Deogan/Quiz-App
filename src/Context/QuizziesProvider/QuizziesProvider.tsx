import { useContext, createContext, useState } from "react";
import { QuizziesContextState } from "./quizziesProvider.type";
import { Quizzies, Status } from "types";

const QuizzesContext = createContext<QuizziesContextState>(
  {} as QuizziesContextState
);

export const QuizzezProvider: React.FC = ({ children }) => {
  const [quizzes, setQuizzes] = useState<Quizzies | null>(null);
  const [status, setStatus] = useState<Status>("IDLE");
  return (
    <QuizzesContext.Provider value={{ quizzes, setQuizzes, status, setStatus }}>
      {children}
    </QuizzesContext.Provider>
  );
};

export const useQuizzez = () => {
  return useContext(QuizzesContext);
};
