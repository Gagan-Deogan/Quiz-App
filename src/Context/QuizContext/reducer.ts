import { Quiz } from "../../data/db.types";
import { calculateScore } from "../../utils";

export type InitialState = {
  attemptedQuiz: Quiz | null;
  currentQuestion: number;
  totalScore: number;
  isFinish: boolean;
};

export type Action =
  | { type: "LOAD_QUIZ"; payload: { quiz: Quiz | null } }
  | { type: "SKIP_QUESTION" }
  | {
      type: "SUBMIT_ANSWER";
      payload: { questionId: string; optionId: string };
    }
  | { type: "CALCULATE_SCORE" };

export const initialState: InitialState = {
  attemptedQuiz: null,
  currentQuestion: 0,
  totalScore: 0,
  isFinish: false,
};

export const reducer = (
  state: InitialState,
  action: Action
): typeof initialState => {
  switch (action.type) {
    case "LOAD_QUIZ":
      return {
        totalScore: 0,
        currentQuestion: 0,
        isFinish: false,
        attemptedQuiz: action.payload.quiz,
      };
    case "SKIP_QUESTION":
      if (state.attemptedQuiz) {
        const isQuizEnd =
          state.currentQuestion === state.attemptedQuiz.questions.length;
        return isQuizEnd
          ? { ...state, isFinish: true }
          : { ...state, currentQuestion: state.currentQuestion + 1 };
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

          return {
            ...state,
            isFinish: isQuizEnd,
            currentQuestion: isQuizEnd
              ? state.currentQuestion
              : state.currentQuestion + 1,
            attemptedQuiz: attemptedQuizUpdated,
          };
        }
      }
      return state;
    case "CALCULATE_SCORE":
      return state.attemptedQuiz
        ? {
            ...state,
            totalScore: calculateScore(state.attemptedQuiz.questions),
          }
        : state;
    default:
      return state;
  }
};
