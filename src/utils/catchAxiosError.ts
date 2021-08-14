import axios, { AxiosError } from "axios";
import { ServerError } from "types";

export const catchAxiosErr = (err: any) => {
  if (axios.isAxiosError(err)) {
    const serverError = err as AxiosError<ServerError>;
    if (serverError && serverError.response) {
      return { error: serverError.response.data.error };
    }
  }
  return { error: "something went wrong!" };
};
