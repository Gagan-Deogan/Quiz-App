import { useState } from "react";
import { Button } from "common-components/Button";
import { Link } from "react-router-dom";
import { Input } from "common-components/Input";
import { PasswordInput } from "common-components/PasswordInput";
import { handleLogin } from "./login.service";
import { useAuth } from "context/AuthProvider";
export const Login = () => {
  const { loginUser } = useAuth();
  const [email, setEmail] = useState<string>("Gagan@gmail.com");
  const [password, setPassword] = useState<string>("Gagan@123");
  const [status, setStatus] = useState<"IDLE" | "PENDING">("IDLE");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password && status === "IDLE") {
      setStatus("PENDING");
      const res = await handleLogin({ email, password });
      if ("data" in res) {
        loginUser(res.data);
      } else {
        setError(res.error);
        setStatus("IDLE");
      }
    }
  };

  return (
    <>
      <div className="w-full px-4 py-16">
        <div className="max-w-md m-auto">
          <h1 className="text-xl font-bold text-center mb-4">
            Welcome to Greenify Quiz
          </h1>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <Input
                name="current-email"
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password">
                Password
              </label>
              <PasswordInput
                name="current-password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <h6 className="text-center text-red-default text-sm">{error}</h6>
            <div className="flex items-center justify-between">
              <Button
                varient="FILLED"
                size="lg"
                className="w-full"
                disabled={status === "PENDING"}>
                Login
              </Button>
            </div>
          </form>
          <Link to="/signup">
            <h6 className="text-center text-primary-default">
              Don't have an account ? Signup now!
            </h6>
          </Link>
        </div>
      </div>
    </>
  );
};
