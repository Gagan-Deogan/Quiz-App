import { useContext, createContext, useState, useEffect } from "react";
import { Quizzies } from "types";

type Context = {
  quizzes: Quizzies | null;
  setQuizzes: Function;
};
type ServerError = { errorMessage: string };

const QuizzesContext = createContext<Context>({} as Context);

export const QuizzezProvider: React.FC = ({ children }) => {
  const [quizzes, setQuizzes] = useState<Quizzies | null>(null);

  return (
    <QuizzesContext.Provider value={{ quizzes, setQuizzes }}>
      {children}
    </QuizzesContext.Provider>
  );
};

export const useQuizzez = () => {
  return useContext(QuizzesContext);
};
