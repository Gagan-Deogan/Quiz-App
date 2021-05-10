import { Question } from "../../data/db.types";
import { Option } from "../Option";

export const QuizBody = ({ question }: { question: Question }) => {
  const { text, options } = question;
  return (
    <>
      <h1 className="text-2xl text-gray-500 font-bold" >{text}</h1>
      {options.map((option) => (
        <Option option={option} />
      ))}
    </>
  );
};
