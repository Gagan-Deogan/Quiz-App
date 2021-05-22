import { useState } from "react";
import { useNavigate } from "react-router";
import { useQuiz } from "../../Context/QuizContext";
import { Button } from "../Button";
import { QuizBody } from "../QuizBody";
export const Result = () => {
  const {
    state: { totalScore, attemptedQuiz },
  } = useQuiz();
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      <h2 className="w-full text-center text-lg sm:text-xl md:text-3xl mt-24 ">
        Your Score:{totalScore}
      </h2>
      {totalScore > 60 && (
        <p className="text-lg text-primary-dark font-bold">
          Congratulations you have Pass the Quiz
        </p>
      )}
      {totalScore < 60 && (
        <p className="text-lg text-red-dark font-bold">
          Your Score is less than passing Score
        </p>
      )}
      <div className="flex m-5">
        <Button
          varient="OUTLINED"
          size="lg"
          className="mx-5"
          onClick={() => setShowAnswers(!showAnswers)}>
          {showAnswers ? "Hide Answers" : "Review Answers"}
        </Button>
        <Button varient="FILLED" size="lg" onClick={() => navigate("/")}>
          Play more
        </Button>
      </div>
      {showAnswers &&
        attemptedQuiz &&
        attemptedQuiz.questions.map((question) => (
          <QuizBody question={question} isReview={true} key={question._id} />
        ))}
    </>
  );
};
