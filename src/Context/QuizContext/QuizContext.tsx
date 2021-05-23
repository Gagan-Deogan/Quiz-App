import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { InitialState, Action } from "./reducer.types";

type Context = {
  state: InitialState;
  dispatch: (action: Action) => void;
};

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
