import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
	baseURL: "http://localhost:8000/",
};

const axiosInstance = axios.create(config);

export default axiosInstance;
