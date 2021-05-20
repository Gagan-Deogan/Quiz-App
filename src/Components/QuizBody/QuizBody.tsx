import { Question } from "../../data/db.types";
import { Button } from "../Button";
import { Option } from "../Option";

export const QuizBody = ({
  question,
  nextQuestion,
}: {
  question: Question;
  nextQuestion: Function;
}) => {
  const { text, options } = question;
  // const [selectedOption, setSelectedOptoin] = useState()
  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-5xl text-center text-gray-500 font-bold mb-5">
        {text}
      </h1>
      <div className="grid sm:grid-cols-2 gap-4 w-full mt-5">
        {options.map((option) => (
          <Option option={option} />
        ))}
      </div>
      <div className="w-full flex justify-end pt-8">
        <Button
          disabled={false}
          size="lg"
          varient="FILLED"
          onClick={nextQuestion}>
          Next
        </Button>
      </div>
    </>
  );
};
