import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "common-components/Loader";
import { User } from "types";
import { setupAxiosDefaultHeaders } from "utils";
import { getUserDetails } from "./auth.service";

import { AuthContextState } from "./auth.types";
const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage?.getItem("token") || null
  );
  const [loading, setLoading] = useState<boolean>(token ? true : false);

  setupAxiosDefaultHeaders(token);

  const logoutUser = () => {
    localStorage?.removeItem("token");
    setUser(null);
    setToken(null);
    navigate("/");
  };

  const loginUser = ({
    user,
    token,
  }: {
    user: User | null;
    token: string | null;
  }) => {
    if (user && token) {
      setUser(user);
      setToken(token);
      localStorage.setItem("token", token);
      navigate("/home");
    }
  };

  useEffect(() => {
    (async () => {
      if (token) {
        const res = await getUserDetails();
        setLoading(false);
        if ("data" in res) {
          setUser(res.data);
        } else {
          logoutUser();
        }
      }
    })();
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        logoutUser,
        loginUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
