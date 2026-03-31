import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const API_BASE = '/api';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor — attach Bearer token if present
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = config.headers ?? {};
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor — unwrap data or throw error message
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.response?.statusText ||
      error.message ||
      'Request failed';
    return Promise.reject(new Error(message));
  },
);

const httpService = {
  get<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.get<T>(path, config).then((r) => r.data);
  },
  post<T>(path: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.post<T>(path, data, config).then((r) => r.data);
  },
  put<T>(path: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.put<T>(path, data, config).then((r) => r.data);
  },
  patch<T>(path: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.patch<T>(path, data, config).then((r) => r.data);
  },
  delete<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.delete<T>(path, config).then((r) => r.data);
  },
};

export default httpService;
