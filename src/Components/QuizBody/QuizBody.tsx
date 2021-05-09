import { Question } from "../../data/db.types";
import { Option } from "../Option";

export const QuizBody = ({ question }: { question: Question }) => {
  const { text, options } = question;
  return (
    <>
      <h1>{text}</h1>
      {options.map((option) => (
        <Option option={option} />
      ))}
    </>
  );
};
