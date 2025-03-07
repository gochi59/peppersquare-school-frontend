import axios from "axios";

export const axiosInstance=axios.create(
    {
        baseURL: "http://localhost:1337/api",
        headers: {
            "Content-Type": "application/json", 
          },
    }
)

axiosInstance.interceptors.request.use(
    (config) => {
      console.log("Request Interceptor:", config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );