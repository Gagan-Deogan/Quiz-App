import { Button } from "../Button";
import { PlayIcon } from "../../assests/icons";
import { useNavigate } from "react-router";

const imgLink =
  "https://bsmedia.business-standard.com/media-handler.php?mediaPath=https://bsmedia.business-standard.com/_media/bs/img/article/2019-11/03/full/1572796865-0693.jpg&width=1200";

const getbagdeStyle = ({
  difficulty,
}: {
  difficulty: "EASY" | "MEDIUM" | "HARD";
}): string => {
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

export const Card = () => {
  const navigate = useNavigate();
  const goTOQuiz = (quizId: string) => {
    console.log("hellp");
    navigate(`/quiz/${quizId}`);
  };

  return (
    <>
      <li className="box-content bg-foreground shadow rounded-lg p-3 overflow-clip ">
        <img
          className="h-48 rounded-lg object-cover w-full"
          src={imgLink}
          alt=""
        />
        <div className="flex flex-row mt-2 justify-between">
          <div className="flex flex-col items-start w-5/6">
            <h3 className="text-lg font-bold ">Vert long text</h3>
            <span className={getbagdeStyle({ difficulty: "EASY" })}>Easy</span>
          </div>
          <div className="flex flex-col items-end w-1/6">
            <Button
              varient="FILLED"
              disabled={false}
              size="sm"
              onClick={() => goTOQuiz("1253")}>
              <PlayIcon />
            </Button>
          </div>
        </div>
      </li>
    </>
  );
};
