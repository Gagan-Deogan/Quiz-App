import { catchAxiosErr } from "utils/catchAxiosError";
import axios from "axios";
import { ServerError } from "types";
import { UserDetailsResponse } from "./auth.types";

export const getUserDetails = async (
  token: string
): Promise<UserDetailsResponse | ServerError> => {
  try {
    const res: UserDetailsResponse = await axios.get("/users/self");
    return { data: res.data };
  } catch (err) {
    return catchAxiosErr(err);
  }
};
