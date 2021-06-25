import { catchAxiosErr } from "utils/catchAxiosError";
import axios from "axios";
import { ServerError } from "types";
import { UserDetailsResponse } from "./auth.types";

export const getUserDetails = async (): Promise<
  UserDetailsResponse | ServerError
> => {
  try {
    const res = await axios.get<UserDetailsResponse>("/users/self");
    return res.data;
  } catch (err) {
    return catchAxiosErr(err);
  }
};
