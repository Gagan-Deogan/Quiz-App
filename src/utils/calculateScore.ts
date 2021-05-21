import { OptionType, Question } from "../data/db.types";

const scoreReduce = (acc: number, question: Question): number => {
  const isSubmittedAnswerRight = question.options.find(
    (option) => option.isRight && option.isSelected
  )
    ? true
    : false;
  return isSubmittedAnswerRight ? acc + question.points : acc;
};

export const calculateScore = (questions: Question[]): number => {
  return questions.reduce(scoreReduce, 0);
};
