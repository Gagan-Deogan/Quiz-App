import { OptionType } from "../../data/db.types";

const getOptionStyle = (
  varient: "DEFAULT" | "RED" | "GREEN",
  isReview: boolean
): string => {
  let defaultStyle = `py-3 px-4 rounded-sm transition-colors duration-50 ${
    !isReview &&
    "cursor-pointer hover:bg-primary-default hover:text-white hover:border-primary-dark"
  } `;
  if (varient === "DEFAULT") {
    defaultStyle =
      defaultStyle + " " + "border border-b-4 border-opacity-80 border-gray";
  }
  if (varient === "GREEN") {
    defaultStyle =
      defaultStyle +
      " " +
      "bg-primary-default text-white border border-b-4 border-primary-dark";
  }
  if (varient === "RED") {
    defaultStyle =
      defaultStyle +
      " " +
      "bg-red-default text-white border border-b-4 border-red-dark";
  }
  return defaultStyle;
};

export const Option = ({
  option,
  varient,
  isReview,
  setSelectedOption,
}: {
  option: OptionType;
  varient: "DEFAULT" | "RED" | "GREEN";
  isReview: boolean;
  setSelectedOption?: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const { answer, _id } = option;
  return (
    <>
      <div
        className={getOptionStyle(varient, isReview)}
        onClick={() => setSelectedOption && setSelectedOption(_id)}>
        <h3 className="text-lg sm:text-xl md:text-2xl">{answer}</h3>
      </div>
    </>
  );
};
