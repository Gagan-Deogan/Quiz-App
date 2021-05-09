import { OptionType, Question } from "../data/db.types";
type selectInputs = {
  selected: OptionType;
  currentPoints: number;
  question: Question;
};

export const selectChecker = ({
  selected,
  currentPoints,
  question,
}: selectInputs): number => {
  const negativePoint = question.negativePoint ? question.negativePoint : 0;
  return selected.isRight
    ? currentPoints + question.points
    : currentPoints - negativePoint;
};
