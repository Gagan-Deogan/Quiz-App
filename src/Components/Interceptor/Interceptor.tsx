import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "Context/AuthProvider";
// import { showSnakbar } from "features/snakbarSlice";
export const Interceptor = () => {
  const navigate = useNavigate();
  const { logoutUser } = useAuth();
  const [errorInterceptor, setErrorInterceptor] = useState<number | undefined>(
    undefined
  );

  const addErrorInterceptor = () => {
    const errorInterceptor = axios.interceptors.response.use(
      (res) => {
        if (res.status === 201) {
        }
        return res.data;
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
