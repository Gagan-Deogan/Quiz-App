import { Logo } from "assests/icons";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    navigate("/");
  };
  return (
    <>
      <div className="box-border flex justify-between items-center w-full px-8 py-3 bg-primary-dark">
        <div>
          <Logo />
        </div>
        <Button
          varient="FILLED"
          disabled={false}
          onClick={clickHandler}
          size="sm">
          Home
        </Button>
      </div>
    </>
  );
};
