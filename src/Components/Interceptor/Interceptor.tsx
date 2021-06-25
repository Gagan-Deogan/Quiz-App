import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "Context/AuthProvider";
import { useSnakbar } from "Context/SnakbarProvider";
// import { showSnakbar } from "features/snakbarSlice";
export const Interceptor = () => {
  const navigate = useNavigate();
  const { logoutUser } = useAuth();
  const { snakbarDispatch } = useSnakbar();
  const [errorInterceptor, setErrorInterceptor] = useState<number | undefined>(
    undefined
  );

  const addErrorInterceptor = () => {
    const errorInterceptor = axios.interceptors.response.use(
      (res) => {
        if (res.status === 201) {
          snakbarDispatch({
            type: "SHOW_SNAKBAR",
            payload: {
              type: "SUCCESS",
              message: res.data.data,
            },
          });
        }
        return res;
      },
      (error) => {
        if (error.response) {
          const status = error.response.status;
          if (status === 403) {
            logoutUser();
            navigate("/login");
            return Promise.reject(error);
          }
          if (status === 422) {
            return Promise.reject(error);
          }
          snakbarDispatch({
            type: "SHOW_SNAKBAR",
            payload: {
              type: "ERROR",
              message: "Something went wrong",
            },
          });
        }
        return Promise.reject(error);
      }
    );
    setErrorInterceptor(errorInterceptor);
  };

  const removeErrorInterceptor = () => {
    if (errorInterceptor) {
      axios.interceptors.request.eject(errorInterceptor);
      setErrorInterceptor(undefined);
    }
  };

  useEffect(() => {
    addErrorInterceptor();
    return () => {
      removeErrorInterceptor();
    };
  }, []);

  return <></>;
};
