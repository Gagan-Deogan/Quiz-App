import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { getUserDetails } from "services/auth.services";
import { Loader } from "Components/Loader";
import { User } from "types";
import // useRequest,
// instance,
// setupAuthExceptionHandler,
// setupAuthHeaderForServiceCalls,
"utils";
import { AuthContextState } from "./auth.types";
const AuthContext = createContext<AuthContextState>({} as AuthContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage?.getItem("Token") || null
  );
  const [loading, setLoading] = useState(token ? true : false);
  const location = useLocation();
  const { pathname } = location;
  // setupAuthHeaderForServiceCalls(token, instance);

  const logoutUser = () => {
    localStorage?.removeItem("Token");
    setUser(null);
    setToken(null);
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
      navigate("/home");
    }
  };

  // if (token) {
  //   setupAuthExceptionHandler(logoutUser, navigate, instance);
  // }

  useEffect(() => {
    // getUserDetails({
    //   token,
    //   user,
    //   pathname,
    //   setUser,
    //   request,
    //   setLoading,
    //   navigate,
    // });
  }, [token]);

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
