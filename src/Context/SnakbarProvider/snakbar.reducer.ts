import { SnakbarAction, SnakbarState } from "./snakbarProvider.types";

export const initialState: SnakbarState = {
  isShow: false,
  type: "SUCCESS",
  message: "",
};

export const reducer = (
  state: SnakbarState,
  action: SnakbarAction
): SnakbarState => {
  switch (action.type) {
    case "SHOW_SNAKBAR":
      return {
        isShow: true,
        type: action.payload.type,
        message: action.payload.message,
      };
    case "HIDE_SNAKBAR":
      return {
        ...state,
        isShow: false,
      };
  }
};
