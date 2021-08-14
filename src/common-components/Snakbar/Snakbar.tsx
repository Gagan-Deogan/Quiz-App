import { useEffect } from "react";

import { ErrorIcon, CheckIcon } from "assests/icons";
import { useSnakbar } from "context/SnakbarProvider";
type SnakbarVarient = {
  ERROR: {
    className: string;
    icon: JSX.Element;
  };
  SUCCESS: {
    className: string;
    icon: JSX.Element;
  };
};

const snakbarVarient: SnakbarVarient = {
  ERROR: {
    className:
      "fixed top-16 right-10 bg-red-dark px-3 py-2 rounded-md flex flex-row",
    icon: <ErrorIcon />,
  },
  SUCCESS: {
    className:
      "fixed top-16 right-10 bg-primary-default px-3 py-2 rounded-md flex flex-row",
    icon: <CheckIcon />,
  },
};

export const Snakbar = () => {
  const {
    state: { type, message },
    snakbarDispatch,
  } = useSnakbar();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      snakbarDispatch({ type: "HIDE_SNAKBAR" });
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [snakbarDispatch]);

  return (
    <>
      <div className={snakbarVarient[type].className}>
        {snakbarVarient[type].icon}
        <h3 className="ml-2 text-md text-white">{message}</h3>
      </div>
    </>
  );
};
