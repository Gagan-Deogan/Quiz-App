import axios from "axios";
import { ServerError } from "types/serverError";
import { handleLoginProps, LoginResponse } from "./login.types";
import { catchAxiosErr } from "utils";
export const handleLogin = async ({
  email,
  password,
}: handleLoginProps): Promise<LoginResponse | ServerError> => {
  try {
    const res: LoginResponse = await axios.post("/users/login", {
      email,
      password,
    });
    return { data: res.data };
  } catch (err) {
    console.log(err);

    return catchAxiosErr(err);
  }
};
