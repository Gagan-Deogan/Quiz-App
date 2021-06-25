import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { Context } from "./quizProvider.types";

const QuizContext = createContext<Context>({} as Context);

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
