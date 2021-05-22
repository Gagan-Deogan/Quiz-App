import { useEffect } from "react";
import { QuizRules } from "../../Components/QuizRules";
import { QuizBody } from "../../Components/QuizBody";
import { useQuizContext } from "../../Context/QuizContext";
import { useQuizzez } from "../../Context/QuizziesContext";
import { useParams } from "react-router";
export const Quiz = () => {
  const { state, dispatch } = useQuizContext();
  const { quizzes } = useQuizzez();

  const { quizId } = useParams();

  const startTheQuiz = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  useEffect(() => {
    const quiz = quizzes?.find((quiz) => quiz._id === quizId);
    if (quiz) {
      dispatch({ type: "LOAD_QUIZ", payload: { quiz } });
    }
    return () => {
      dispatch({ type: "LOAD_QUIZ", payload: { quiz: null } });
    };
  }, [quizzes]);

  return (
    <>
      <section className=" mx-auto mt-3 px-3 flex flex-col items-center lg:container">
        {!!state.totalScore && (
          <h1 className="w-full text-right text-3xl">
            Your Score:{state.totalScore}
          </h1>
        )}

        {!state.currentQuestion && <QuizRules startTheQuiz={startTheQuiz} />}

        {!!state.currentQuestion && !state.finish && state.attemptedQuiz && (
          <QuizBody
            question={state.attemptedQuiz?.questions[state.currentQuestion - 1]}
            isReview={false}
            key={state.attemptedQuiz?.questions[state.currentQuestion - 1]._id}
          />
        )}
        {state.finish &&
          state.attemptedQuiz &&
          state.attemptedQuiz.questions.map((question) => (
            <QuizBody question={question} isReview={true} key={question._id} />
          ))}
      </section>
    </>
  );
};
