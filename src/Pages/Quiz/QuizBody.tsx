import { useState } from "react";
import { useQuiz } from "context/QuizProvider";
import { Question } from "types/share.types";
import { Button } from "common-components/Button";
import { Option } from "./Option";
import { QuizHeader } from "./QuizHeader";

const getOptionVarient = (
  isRight: boolean,
  isSelected?: boolean
): "GREEN" | "RED" | "DEFAULT" => {
  if ((isRight && isSelected) || isRight) return "GREEN";
  if (isSelected) return "RED";
  return "DEFAULT";
};

export const QuizBody = ({
  question,
  isReview,
  questionindex,
}: {
  question: Question;
  isReview: boolean;
  questionindex?: number;
}) => {
  const { text, options } = question;
  const [selectedOption, setSelectedOption] = useState<string | null>("");
  const {
    state: { currentQuestion },
    dispatch,
  } = useQuiz();

  const submitAnswer = (selectedOption: string | null): void => {
    if (selectedOption) {
      dispatch({
        type: "SUBMIT_ANSWER",
        payload: { questionId: question._id, optionId: selectedOption },
      });
    }
  };

  return (
    <div className="w-full mb-16">
      {!isReview && <QuizHeader currentQuestion={currentQuestion} />}
      <h1 className="text-2xl sm:text-3xl text-center text-gray-500 mt-8 mb-6 font-bold ">
        Q{isReview ? questionindex : currentQuestion}. {text}
      </h1>
      <div className="grid sm:grid-cols-2 gap-4 w-full mt-5">
        {!isReview &&
          options.map((option) => (
            <Option
              key={option._id}
              option={option}
              isReview={isReview}
              varient={selectedOption === option._id ? "GREEN" : "DEFAULT"}
              setSelectedOption={setSelectedOption}
            />
          ))}
        {isReview &&
          options.map((option) => (
            <Option
              key={option._id}
              option={option}
              isReview={isReview}
              varient={getOptionVarient(option.isRight, option.isSelected)}
            />
          ))}
      </div>
      {!isReview && (
        <div className="w-full flex justify-end mt-8">
          <Button
            size="lg"
            varient="OUTLINED"
            onClick={() => dispatch({ type: "SKIP_QUESTION" })}
            className="mx-5">
            Skip
          </Button>
          <Button
            disabled={!selectedOption ? true : false}
            size="lg"
            varient="FILLED"
            onClick={() => submitAnswer(selectedOption)}>
            Next
          </Button>
        </div>
      )}
    </div>
  );
};
