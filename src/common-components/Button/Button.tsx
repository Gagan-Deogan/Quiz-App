import React from "react";
import { FunctionComponent } from "react";

type Buttontype = {
  varient: "DEFAULT" | "FILLED" | "OUTLINED";
  disabled?: boolean;
  onClick?: Function;
  className?: string;
  size: "lg" | "sm";
};

const lgBtnStyle = "px-6 py-3";
const smBtnStyle = "px-3 py-2";

const defaultBtnStyle =
  "flex justify-center items-center text-md tracking-wide transition-colors duration-50 rounded-sm focus:outline-none focus-visible:ring-1 focus-visible:ring-primary-light";

const filledBtnStyle =
  "bg-primary-light hover:bg-primary-light text-white shadow active:bg-primary-dark";

const outlineBtnStyle =
  "border border-primary-light text-primary-light shadow ";
const disabledBtnStyle = "bg-gray text-white";
const getBtnStyle = ({
  varient,
  size,
  className,
  disabled,
}: {
  varient: string;
  size: string;
  className?: string;
  disabled?: boolean;
}): string => {
  let style = defaultBtnStyle;
  if (disabled) {
    style = style + " " + disabledBtnStyle;
  } else if (varient === "FILLED") {
    style = style + " " + filledBtnStyle;
  } else if (varient === "OUTLINED") {
    style = style + " " + outlineBtnStyle;
  }
  if (size === "lg") {
    style = style + " " + lgBtnStyle;
  }
  if (size === "sm") {
    style = style + " " + smBtnStyle;
  }
  return style + " " + className;
};

export const Button: FunctionComponent<Buttontype> = (props) => {
  const { varient, onClick, size, disabled, className, children } = props;
  return (
    <button
      className={getBtnStyle({ varient, size, className, disabled })}
      onClick={(e) => onClick && onClick(e)}
      disabled={!!disabled}>
      {children}
    </button>
  );
};
