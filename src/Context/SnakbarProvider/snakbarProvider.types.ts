export type SnakbarState = {
  isShow: boolean;
  message: string;
  type: "SUCCESS" | "ERROR";
};

export type SnakbarAction =
  | {
      type: "SHOW_SNAKBAR";
      payload: {
        message: string;
        type: "SUCCESS" | "ERROR";
      };
    }
  | {
      type: "HIDE_SNAKBAR";
    };
export type SnakbarContextState = {
  state: SnakbarState;
  snakbarDispatch: (action: SnakbarAction) => void;
};
