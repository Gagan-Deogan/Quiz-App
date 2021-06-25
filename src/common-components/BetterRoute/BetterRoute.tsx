import { Route, Navigate, useLocation } from "react-router-dom";
import { RouteProps } from "./routes.types";
import { useAuth } from "context/AuthProvider";
export const BetterRoute: React.FC<RouteProps> = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const state = location.state as { from: string } | null;
  const { from } = state ?? { from: "/home" };
  const { user } = useAuth();
  const { path, type } = { ...props };
  switch (type) {
    case "PROTECTED":
      return user ? (
        <Route path={path} {...props} />
      ) : (
        <Navigate state={{ from: pathname }} replace to="/" />
      );
    case "PUBLIC-ONLY":
      return !user ? (
        <Route path={path} {...props} />
      ) : (
        <Navigate replace to={from} />
      );
  }
};
