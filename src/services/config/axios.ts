import axios, { AxiosInstance } from "axios";

import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";

import { decodeToken, encodeToken } from "../../utils/generateToken";
import { refreshToken } from "../auth/refreshTokenApi";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
});

const cookies = new Cookies();

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized!");
      try {
        const newToken = await refreshToken("d");
        const decoded = jwtDecode(newToken);
        encodeToken(newToken, decoded.exp!);
        axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        const originalRequest = error.config;
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use((config) => {
  const token = cookies.get("token");
  if (token == "" || token == undefined) {
    return config;
  } else {
    const decode = decodeToken(token);
    config.headers["Authorization"] = `Bearer ${decode}`;
    return config;
  }
});

export default axiosInstance;
