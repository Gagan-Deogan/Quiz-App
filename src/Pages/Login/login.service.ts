import axios from "axios";
import { ServerError } from "types/serverError";
import { handleLoginProps, LoginResponse } from "./login.types";
import { catchAxiosErr } from "utils";
export const handleLogin = async ({
  email,
  password,
}: handleLoginProps): Promise<LoginResponse | ServerError> => {
  try {
    const res = await axios.post<LoginResponse>("/users/login", {
      email,
      password,
    });
    return res.data;
  } catch (err) {
    return catchAxiosErr(err);
  }
};
