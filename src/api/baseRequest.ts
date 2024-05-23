/* eslint-disable */
/**构建请求层面的基础类 */
import axios from "axios";

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  //baseURL: "http://127.0.0.1:8080",
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default service;
