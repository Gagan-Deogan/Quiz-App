import { createContext, useContext, useReducer } from "react";
import { ContextType, initialState, reducer } from "./reducer";
const QuizContext = createContext<ContextType>({} as ContextType);

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  return useContext(QuizContext);
};
