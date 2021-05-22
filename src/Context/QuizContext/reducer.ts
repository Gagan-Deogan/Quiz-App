import { stat } from "fs";
import { Quiz } from "../../data/db.types";
import { calculateScore } from "../../utils";

type InitialStateType = {
  attemptedQuiz: Quiz | null;
  currentQuestion: number;
  totalScore: number;
  finish: boolean;
};

type ActionType =
  | { type: "LOAD_QUIZ"; payload: { quiz: Quiz | null } }
  | { type: "NEXT_QUESTION" }
  | {
      type: "SUBMIT_ANSWER";
      payload: { questionId: string; optionId: string };
    };
type reduceType = {
  state: InitialStateType;
  action: ActionType;
};

export type ContextType = {
  state: InitialStateType;
  dispatch: (action: ActionType) => void;
};

export const initialState: InitialStateType = {
  attemptedQuiz: null,
  currentQuestion: 0,
  totalScore: 0,
  finish: false,
};

export const reducer = (
  state: InitialStateType,
  action: ActionType
): typeof initialState => {
  switch (action.type) {
    case "LOAD_QUIZ":
      return {
        totalScore: 0,
        currentQuestion: 0,
        finish: false,
        attemptedQuiz: action.payload.quiz,
      };
    case "NEXT_QUESTION":
      if (state.attemptedQuiz) {
        const isQuizEnd =
          state.currentQuestion === state.attemptedQuiz.questions.length;
        return { ...state, currentQuestion: state.currentQuestion + 1 };
      }
      return state;
    case "SUBMIT_ANSWER":
      if (state.attemptedQuiz) {
        const selectedQuestion = state.attemptedQuiz.questions.find(
          (question) => question._id === action.payload.questionId
        );

        const isQuizEnd =
          state.currentQuestion === state.attemptedQuiz.questions.length;

        if (selectedQuestion) {
          const questionWithAnswserSelected = {
            ...selectedQuestion,
            options: selectedQuestion.options.map((option) =>
              option._id === action.payload.optionId
                ? { ...option, isSelected: true }
                : { ...option, isSelected: false }
            ),
          };

          const attemptedQuizUpdated = {
            ...state.attemptedQuiz,
            questions: state.attemptedQuiz.questions.map((question) =>
              question._id === action.payload.questionId
                ? questionWithAnswserSelected
                : question
            ),
          };

          const totalScore = isQuizEnd
            ? calculateScore(attemptedQuizUpdated.questions)
            : 0;

          return {
            totalScore,
            finish: isQuizEnd,
            currentQuestion: isQuizEnd
              ? state.currentQuestion
              : state.currentQuestion + 1,
            attemptedQuiz: attemptedQuizUpdated,
          };
        }
      }
      return state;
    default:
      return state;
  }
};
