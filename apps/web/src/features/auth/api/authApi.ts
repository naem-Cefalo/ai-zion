import httpService from '../../../services/httpService';

export const authApi = {
  register: (email: string, password: string) =>
    httpService.post<{ access_token: string }>('/auth/register', { email, password }),

  login: (email: string, password: string) =>
    httpService.post<{ access_token: string }>('/auth/login', { email, password }),

  me: () => httpService.get<{ id: number; email: string }>('/auth/me'),
};
