import axios from "axios";
export const setupAxiosDefaultHeaders = (token: string | null) => {
  axios.defaults.baseURL = "http://localhost:8080";
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  }
};
