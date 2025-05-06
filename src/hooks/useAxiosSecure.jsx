import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // intercepts with 401 & 403 status
  axiosSecure.interceptors.response.use(
    (response) => response,
    async (error) => {
      const status = error.response.status;
      console.log("status error in the interceptor", status);
      if (error.response && (status === 401 || status === 403)) {
        await logOut();
        navigate("/login");
        // localStorage.removeItem("access-token");
        // localStorage.removeItem("user");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
