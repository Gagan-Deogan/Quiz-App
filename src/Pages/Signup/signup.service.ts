import { ServerError } from "types";
import axios, { AxiosError } from "axios";
import { handleSignupProps, SignUpResponse } from "./signup.types";
export const signUp = async ({
  email,
  username,
  password,
}: handleSignupProps): Promise<SignUpResponse | ServerError> => {
  try {
    const res = await axios.post<SignUpResponse>("/users/signup", {
      email,
      username,
      password,
    });
    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError<ServerError>;
      if (serverError && serverError.response) {
        return { error: serverError.response.data.error };
      }
    }
    return { error: "something went wrong!" };
  }
};
