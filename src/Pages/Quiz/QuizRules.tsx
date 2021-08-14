import { Button } from "common-components/Button";

export const QuizRules: React.FC<{
  startTheQuiz: Function;
}> = ({ startTheQuiz }) => {
  return (
    <>
      <div className="box-border p-2 w-full rounded sm:w-10/12 md:w-6/12 border border-gray">
        <h1 className="font-sans text-center font-bold text-4xl ">Quiz Name</h1>
        <ul className="list-disc px-8 mt-4">
          <li className="my-2">
            Each multiple choice question has only one correct answer
          </li>
          <li className="my-2">Each Anwser should submit in 15 sec</li>
          <li className="my-2">Each right answer scores 10 Points</li>
        </ul>
        <div className="flex justify-center mt-4 mb-2">
          <Button
            varient="FILLED"
            size="lg"
            onClick={startTheQuiz}
            disabled={false}>
            Start now
          </Button>
        </div>
      </div>
    </>
  );
};
