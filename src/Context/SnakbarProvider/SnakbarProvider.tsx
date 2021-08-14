import { createContext, useReducer, useContext } from "react";
import { SnakbarContextState } from "./snakbarProvider.types";
import { reducer, initialState } from "./snakbar.reducer";

const SnakbarContext = createContext<SnakbarContextState>(
  {} as SnakbarContextState
);

export const SnakbarProvider: React.FC = ({ children }) => {
  const [state, snakbarDispatch] = useReducer(reducer, initialState);
  return (
    <SnakbarContext.Provider value={{ state, snakbarDispatch }}>
      {children}
    </SnakbarContext.Provider>
  );
};

export const useSnakbar = () => {
  return useContext(SnakbarContext);
};
