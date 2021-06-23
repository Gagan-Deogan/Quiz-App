export type LoginResponse = {
  data: {
    user: {
      username: string;
      email: string;
    };
    token: string;
  };
};

export type handleLoginProps = {
  email: string;
  password: string;
};
