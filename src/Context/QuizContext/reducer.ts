import { InitialState, Action } from "./reducer.types";
import { calculateScore } from "utils";

export const initialState: InitialState = {
  attemptedQuiz: null,
  currentQuestion: 0,
  totalScore: 0,
  isFinish: false,
  isResultSubmit: false,
};

export const reducer = (
  state: InitialState,
  action: Action
): typeof initialState => {
  switch (action.type) {
    case "LOAD_QUIZ":
      return {
        ...initialState,
        attemptedQuiz: action.payload.quiz,
      };
    case "SKIP_QUESTION":
      if (state.attemptedQuiz) {
        const isQuizEnd =
          state.currentQuestion === state.attemptedQuiz.questions.length;
        return isQuizEnd
          ? {
              ...state,
              isFinish: true,
              totalScore: isQuizEnd
                ? calculateScore(state.attemptedQuiz.questions)
                : 0,
            }
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
            totalScore: isQuizEnd
              ? calculateScore(attemptedQuizUpdated.questions)
              : 0,
          };
        }
      }
      return state;
    case "RESULT_SUBMITED":
      return { ...state, isResultSubmit: true };
    default:
      return state;
  }
};
