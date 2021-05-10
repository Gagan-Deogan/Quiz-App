import { OptionType } from "../../data/db.types";

export const Option = ({ option }: { option: OptionType }) => {
  const { answer } = option;
  return (
    <>
      <h3 className="text-lg" >{answer}</h3>
    </>
  );
};
