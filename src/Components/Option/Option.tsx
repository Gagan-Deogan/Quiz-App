import { OptionType } from "../../data/db.types";

export const Option = ({ option }: { option: OptionType }) => {
  const { answer } = option;
  return (
    <>
      <div className="py-3 px-4 rounded-sm cursor-pointer border border-b-4 border-opacity-80 border-gray hover:bg-primary-default hover:text-white hover:border-primary-dark">
        <h3 className="text-2xl">{answer}</h3>
      </div>
    </>
  );
};
