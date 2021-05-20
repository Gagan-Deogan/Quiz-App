import { Quiz } from "./db.types";

export const quiz: Quiz = {
  _id: "1425",
  name: "Banking Quiz",
  questions: [
    {
      _id: "1",
      text: "What is the real name of the Scarlet Witch?",
      points: 10,
      negativePoint: 5,
      options: [
        {
          _id: "a",
          answer: "Wanda Scarlet",
          isRight: false,
        },
        {
          _id: "a",
          answer: "Wanda Vision",
          isRight: false,
        },
        {
          _id: "a",
          answer: "Wanda Maximoff",
          isRight: true,
        },
      ],
    },
    {
      _id: "2",
      text: "Which film did The Aether first appear in?",
      points: 10,
      negativePoint: 5,
      options: [
        {
          _id: "a",
          answer: "Thor: The Dark World",
          isRight: true,
        },
        {
          _id: "b",
          answer: "Captine America",
          isRight: false,
        },
        {
          _id: "c",
          answer: "Civil War",
          isRight: false,
        },
      ],
    },
    {
      _id: "3",
      text: "Which of the infinity stones is hidden on Vormir?",
      points: 10,
      negativePoint: 5,
      options: [
        {
          _id: "a",
          answer: "Space Stone",
          isRight: false,
        },
        {
          _id: "b",
          answer: "Soul Stone",
          isRight: true,
        },
        {
          _id: "c",
          answer: "Reality Stone",
          isRight: false,
        },
      ],
    },
    {
      _id: "4",
      text: "What is Captain America's shield made of?",
      points: 10,
      negativePoint: 10,
      options: [
        {
          _id: "a",
          answer: "Titanium",
          isRight: true,
        },
        {
          _id: "b",
          answer: "Helium",
          isRight: false,
        },
        {
          _id: "c",
          answer: "Vibranium",
          isRight: false,
        },
      ],
    },
    {
      _id: "5",
      text: "Who has directed the most MCU movies?",
      points: 10,
      negativePoint: 5,
      options: [
        {
          _id: "a",
          answer: "The Warner Brothers",
          isRight: false,
        },
        {
          _id: "b",
          answer: "Christopher Nolan",
          isRight: false,
        },
        {
          _id: "c",
          answer: "The Russo Brothers",
          isRight: true,
        },
      ],
    },
  ],
};
