import { Service, ServiceContext } from '@/types/service';
import { AxiosResponse } from 'axios';

interface AuthService extends Service {
  register: (form: AuthRegister) => Promise<AxiosResponse>;
  login: (form: AuthLogin) => Promise<AxiosResponse>;
  getAuth: () => Promise<AxiosResponse>;
}

// Pass context from Vuex
// const { register } = useAuthService(context);
export const useAuthService = ({ $clientApi, $authApi }: ServiceContext): AuthService => {
  const endpoint = '/auth';

  const register = (form: AuthRegister): Promise<AxiosResponse> => $clientApi.$post(`${endpoint}/register`, form);

  const login = (form: AuthLogin): Promise<AxiosResponse> => $authApi.$post(`${endpoint}/login`, form);

  const getAuth = (): Promise<AxiosResponse> => $authApi.$get(`${endpoint}/me`);

  return {
    register,
    login,
    getAuth,
  };
};
