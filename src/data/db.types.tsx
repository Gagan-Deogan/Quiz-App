export type OptionType = {
  answer: string;
  isRight: boolean;
};

export type Question = {
  text: string;
  points: number;
  negativePoint?: number;
  options: OptionType[];
};

export type Quiz = {
  name: string;
  questions: Question[];
};
