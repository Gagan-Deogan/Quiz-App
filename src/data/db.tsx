import { Quiz } from "./db.types";

export const quiz: Quiz = {
  name: "Banking Quiz",
  questions: [
    {
      text: "What is the real name of the Scarlet Witch?",
      points: 10,
      negativePoint: 5,
      options: [
        {
          answer: "Wanda Scarlet",
          isRight: false,
        },
        {
          answer: "Wanda Vision",
          isRight: false,
        },
        {
          answer: "Wanda Maximoff",
          isRight: true,
        },
      ],
    },
    {
      text: "Which film did The Aether first appear in?",
      points: 10,
      negativePoint: 5,
      options: [
        {
          answer: "Thor: The Dark World",
          isRight: true,
        },
        {
          answer: "Captine America",
          isRight: false,
        },
        {
          answer: "Civil War",
          isRight: false,
        },
      ],
    },
    {
      text: "Which of the infinity stones is hidden on Vormir?",
      points: 10,
      negativePoint: 5,
      options: [
        {
          answer: "Space Stone",
          isRight: false,
        },
        {
          answer: "Soul Stone",
          isRight: true,
        },
        {
          answer: "Reality Stone",
          isRight: false,
        },
      ],
    },
    {
      text: "What is Captain America's shield made of?",
      points: 10,
      negativePoint: 10,
      options: [
        {
          answer: "Titanium",
          isRight: true,
        },
        {
          answer: "Helium",
          isRight: false,
        },
        {
          answer: "Vibranium",
          isRight: false,
        },
      ],
    },
    {
      text: "Who has directed the most MCU movies?",
      points: 10,
      negativePoint: 5,
      options: [
        {
          answer: "The Warner Brothers",
          isRight: false,
        },
        {
          answer: "Christopher Nolan",
          isRight: false,
        },
        {
          answer: "The Russo Brothers",
          isRight: true,
        },
      ],
    },
  ],
};
