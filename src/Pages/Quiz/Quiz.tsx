import { useEffect } from "react";
import { QuizRules } from "./QuizRules";
import { QuizBody } from "./QuizBody";
import { useQuiz } from "context/QuizProvider";
import { useQuizzez } from "context/QuizziesProvider";
import { Result } from "./Result";
import { useParams, useNavigate } from "react-router";
import { submitResult } from "./quiz.service";
export const Quiz = () => {
  const navigate = useNavigate();
  const {
    state: {
      isFinish,
      currentQuestion,
      attemptedQuiz,
      isResultSubmit,
      totalScore,
    },
    dispatch,
  } = useQuiz();
  const { quizzes } = useQuizzez();

  const { quizId } = useParams();

  const startTheQuiz = () => {
    dispatch({ type: "SKIP_QUESTION" });
  };

  useEffect(() => {
    const quiz = quizzes?.find((quiz) => quiz._id === quizId);
    if (quiz) {
      dispatch({ type: "LOAD_QUIZ", payload: { quiz } });
    } else {
      navigate("/home");
    }
    return () => {
      dispatch({ type: "LOAD_QUIZ", payload: { quiz: null } });
    };
  }, [quizzes, dispatch, quizId, navigate]);

  useEffect(() => {
    if (!isResultSubmit && isFinish) {
      (async () => {
        const res = await submitResult(quizId, totalScore);
        if ("data" in res) {
          dispatch({ type: "RESULT_SUBMITED" });
        }
      })();
    }
  }, [attemptedQuiz, dispatch, isResultSubmit, totalScore, isFinish, quizId]);

  return (
    <>
      <section className=" mx-auto mt-3 px-3 flex flex-col items-center lg:container">
        {isFinish && <Result />}

        {currentQuestion === 0 && <QuizRules startTheQuiz={startTheQuiz} />}

        {currentQuestion !== 0 && !isFinish && attemptedQuiz && (
          <QuizBody
            question={attemptedQuiz?.questions[currentQuestion - 1]}
            isReview={false}
            key={attemptedQuiz?.questions[currentQuestion - 1]._id}
          />
        )}
      </section>
    </>
  );
};
