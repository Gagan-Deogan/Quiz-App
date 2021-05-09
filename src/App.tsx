import { useReducer } from "react";
import { Header } from "./Components/Header";
import { QuizBody } from "./Components/QuizBody";
import { quiz } from "./data/db";
type ACTIONTYPE = { type: "NEXT" } | { type: "PREV" } | { type: "RESET" };
type InitialState = { counter: number; points: number };
const initial: InitialState = {
  counter: 0,
  points: 0,
};
const reducer = (state: InitialState, action: ACTIONTYPE): InitialState => {
  switch (action.type) {
    case "NEXT":
      return { counter: state.counter + 1, points: state.points + 5 };
    case "PREV":
      return { counter: state.counter - 1, points: state.points + 5 };
    case "RESET":
      return { counter: 0, points: 0 };
    default:
      return state;
  }
};

export const App = () => {
  const [{ counter, points }, dispatch] = useReducer(reducer, initial);
  return (
    <div className="App">
      <Header username={"Gagandeep"} points={points} />
      <QuizBody question={quiz.questions[counter]} />
      <button onClick={() => dispatch({ type: "PREV" })}>Prev</button>
      <button onClick={() => dispatch({ type: "NEXT" })}>Next</button>
    </div>
  );
};
