/* eslint-disable no-useless-catch */
import axios from "axios";
import { useEffect } from "react";
import { api } from "../axios";
import { useAuth } from "./useAuth";
import useSessionCookie from "./useSessionCookie";

const useAxios = () => {
  const { auth, setAuth } = useAuth();
  const { removeCookie } = useSessionCookie("auth");
  useEffect(() => {
    // Add a request interceptor
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const authToken = auth?.authToken;
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error?.response?.status === 403 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = auth?.refreshToken;
            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
              { refreshToken }
            );
            const { accessToken } = response.data;

            setAuth({ ...auth, authToken: accessToken });

            // Retry the original request with the new token
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return axios(originalRequest);
          } catch (error) {
            throw error;
          }
        }
        if (error?.response?.status === 500) {
          if (error.response.data.error === "jwt expired") {
            removeCookie("auth");
            setAuth(null);
          }
        }
        return Promise.reject(error);
      }
    );
    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [auth?.authToken, auth, setAuth]);

  return { api };
};

export default useAxios;
