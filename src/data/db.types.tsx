export type OptionType = {
  _id: string;
  answer: string;
  isRight: boolean;
  isSelected?: boolean;
};

export type Question = {
  _id: string;
  text: string;
  points: number;
  negativePoint?: number;
  options: OptionType[];
};

export type Quiz = {
  _id: string;
  name: string;
  questions: Question[];
};

export type Quizzies = Quiz[];
