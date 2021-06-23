import { User } from "types";

export type UserDetailsResponse = {
  data: User;
};

export type AuthContextState = {
  user: User | null;
  token: string | null;
  loginUser: Function;
  logoutUser: Function;
};
