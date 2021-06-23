import { useReducer, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "Components/Button";
import { reducer, initialState } from "./signup.reducer";
import { checkPasswordStrength } from "utils";
import { PasswordInput } from "Components/PasswordInput";
import { signUp } from "./signup.service";
import { useAuth } from "Context/AuthProvider";

export const Signup = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [
    { email, username, password, confirmPassword, status, error },
    dispatch,
  ] = useReducer(reducer, initialState);

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
  };

  const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;
    if (username.length < 45) {
      const usernameWithoutSpace = username.trim();
      dispatch({ type: "SET_USERNAME", payload: usernameWithoutSpace });
    }
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_PASSWORD", payload: e.target.value });
  };

  const changeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_CONFIRM_PASSWORD", payload: e.target.value });
  };
  const isPasswordStrong = password && checkPasswordStrength(password);
  const bothPasswordsMatch =
    !!password && !!confirmPassword && password === confirmPassword;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      email &&
      username &&
      password &&
      isPasswordStrong &&
      bothPasswordsMatch
    ) {
      dispatch({ type: "SET_STATUS", payload: "PENDING" });
      const res = await signUp({ email, username, password });
      if ("data" in res) {
        navigate("/");
      } else {
        dispatch({ type: "SET_ERROR", payload: res.error });
      }
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);
  return (
    <>
      <div className="w-full px-4 py-16">
        <div className="max-w-md m-auto">
          <h1 className="text-xl font-bold text-center mb-4">
            Signup to Greenify Quiz
          </h1>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={email}
                onChange={changeEmail}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={username}
                onChange={changeUsername}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password">
                Password
              </label>
              <PasswordInput
                id="password"
                name="password"
                value={password}
                onChange={changePassword}
                error={
                  !isPasswordStrong && password ? "Password is not Strong" : ""
                }
              />
            </div>
            <div className="mb-6 ">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="confirm-password">
                Confirm-Password
              </label>
              <PasswordInput
                name="confirm-password"
                value={confirmPassword}
                id="confirm-password"
                onChange={changeConfirmPassword}
                error={
                  !bothPasswordsMatch && confirmPassword
                    ? "Confirm Password Doesn't Match"
                    : ""
                }
              />
            </div>
            <h6 className="text-center text-red-default text-sm">{error}</h6>
            <div className="flex items-center justify-between">
              <Button
                varient="FILLED"
                size="lg"
                className="w-full"
                disabled={status === "PENDING"}>
                Sign Up
              </Button>
            </div>
          </form>
          <Link to="/signup">
            <h6 className="text-center text-primary-default">
              Don't have an account? Signup now!
            </h6>
          </Link>
        </div>
      </div>
    </>
  );
};
