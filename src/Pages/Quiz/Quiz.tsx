import { useEffect } from "react";
import { QuizRules } from "../../Components/QuizRules";
import { QuizBody } from "../../Components/QuizBody";
import { useQuiz } from "../../Context/QuizContext";
import { useQuizzez } from "../../Context/QuizziesContext";
import { Result } from "../../Components/Result";
import { useParams } from "react-router";
export const Quiz = () => {
  const { state, dispatch } = useQuiz();
  const { quizzes } = useQuizzez();

  const { quizId } = useParams();

  const startTheQuiz = () => {
    dispatch({ type: "SKIP_QUESTION" });
  };

  useEffect(() => {
    const quiz = quizzes?.find((quiz) => quiz._id === quizId);
    if (quiz) {
      dispatch({ type: "LOAD_QUIZ", payload: { quiz } });
    }
    return () => {
      dispatch({ type: "LOAD_QUIZ", payload: { quiz: null } });
    };
  }, [quizzes, dispatch, quizId]);

  return (
    <>
      <section className=" mx-auto mt-3 px-3 flex flex-col items-center lg:container">
        {state.isFinish && <Result />}

        {state.currentQuestion === 0 && (
          <QuizRules startTheQuiz={startTheQuiz} />
        )}

        {!!state.currentQuestion && !state.isFinish && state.attemptedQuiz && (
          <QuizBody
            question={state.attemptedQuiz?.questions[state.currentQuestion - 1]}
            isReview={false}
            key={state.attemptedQuiz?.questions[state.currentQuestion - 1]._id}
          />
        )}
      </section>
    </>
  );
};
