import { OptionType } from "../../data/db.types";

export const Option = ({ option }: { option: OptionType }) => {
  const { answer } = option;
  return (
    <>
      <h3>{answer}</h3>
    </>
  );
};
