import { Quiz } from "./../data/db.types";

type InitialStateType = {
  attempted: Quiz | null;
  currentQuestion: number;
};

type ActionType =
  | { type: "SET_QUIZ"; payload: { quiz: Quiz } }
  | { type: "NEXT_QUESTION" };

export type ContextType = {
  state: InitialStateType;
  dispatch: (action: ActionType) => void;
};
type reduceType = {
  state: InitialStateType;
  action: ActionType;
};

export const initialState: InitialStateType = {
  attempted: null,
  currentQuestion: 0,
};

export const reducer = (
  state: InitialStateType,
  action: ActionType
): typeof initialState => {
  switch (action.type) {
    case "SET_QUIZ":
      return { ...state, attempted: { ...action.payload.quiz } };
    case "NEXT_QUESTION":
      return { ...state, currentQuestion: state.currentQuestion + 1 };
    default:
      return state;
  }
};
