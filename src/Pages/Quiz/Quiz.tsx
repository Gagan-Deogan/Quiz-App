import { useEffect } from "react";
import { QuizRules } from "../../Components/QuizRules";
import { QuizBody } from "../../Components/QuizBody";
import { quiz } from "../../data/db";
import { useQuizContext } from "../../Context/QuizContext";
export const Quiz = () => {
  const { state, dispatch } = useQuizContext();
  const startTheQuiz = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };
  const nextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };
  useEffect(() => {
    dispatch({ type: "SET_QUIZ", payload: { quiz } });
  }, []);

  return (
    <>
      <section className=" mx-auto mt-3 px-3 flex flex-col items-center lg:container">
        {!state.currentQuestion && <QuizRules startTheQuiz={startTheQuiz} />}
        {!!state.currentQuestion && state.attempted && (
          <QuizBody
            question={state.attempted?.questions[state.currentQuestion]}
            nextQuestion={nextQuestion}
          />
        )}
      </section>
    </>
  );
};
