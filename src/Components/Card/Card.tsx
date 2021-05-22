import { Button } from "../Button";
import { PlayIcon } from "../../assests/icons";
import { useNavigate } from "react-router";
import { Quiz } from "../../types/share.types";
const getbagdeStyle = (difficulty: "EASY" | "MEDIUM" | "HARD"): string => {
  let defaultStyle = "px-2 rounded-full text-sm";
  switch (difficulty) {
    case "EASY":
      return defaultStyle + " " + "bg-yellow-light text-yellow-dark";
    case "MEDIUM":
      return defaultStyle + " " + "bg-primary-light text-white";
    case "HARD":
      return defaultStyle + " " + "bg-red-light text-red-dark";
  }
};

export const Card: React.FC<{ quiz: Quiz }> = ({ quiz }) => {
  const navigate = useNavigate();
  const { thumbnail, name, difficult, _id } = quiz;
  const goTOQuiz = (quizId: string) => {
    navigate(`/quiz/${quizId}`);
  };
  return (
    <>
      <li className="box-content bg-foreground shadow rounded-lg p-3 overflow-clip ">
        <img
          className="h-48 rounded-lg object-cover w-full"
          src={thumbnail}
          alt=""
        />
        <div className="flex flex-row mt-4 justify-between">
          <div className="flex flex-col items-start w-5/6">
            <h3 className="text-lg font-bold mb-2">{name}</h3>
            <span className={getbagdeStyle(difficult)}>{difficult}</span>
          </div>
          <div className="flex flex-col items-end w-1/6">
            <Button
              varient="FILLED"
              disabled={false}
              size="sm"
              onClick={() => goTOQuiz(_id)}>
              <PlayIcon />
            </Button>
          </div>
        </div>
      </li>
    </>
  );
};
