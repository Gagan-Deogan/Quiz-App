import { Quiz } from "./db.types";

export const quiz: Quiz = {
  name: "Banking Quiz",
  questions: [
    {
      text: "who is prime minister of india?",
      points: 15,
      options: [
        {
          answer: "vc",
          isRight: true,
        },
        {
          answer: "MD",
          isRight: false,
        },
        {
          answer: "bd",
          isRight: false,
        },
      ],
    },
    {
      text: "who india?",
      points: 5,
      negativePoint: 10,
      options: [
        {
          answer: "vc",
          isRight: true,
        },
        {
          answer: "MD",
          isRight: false,
        },
        {
          answer: "bd",
          isRight: false,
        },
      ],
    },
  ],
};
