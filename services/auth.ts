import { useContext } from '@nuxtjs/composition-api';
import { Service } from '@/types/service';
import { AxiosResponse } from 'axios';

interface AuthService extends Service {
  register: (form: AuthRegister) => Promise<AxiosResponse>;
  login: (form: AuthLogin) => Promise<AxiosResponse>;
  getAuth: () => Promise<AxiosResponse>;
}

// You must pass "this" like useAuthService(this) in Vuex to get the $axios instance
export const useAuthService = (context: any): AuthService => {
  const { $axios } = context || useContext();

  const register = (form: AuthRegister): Promise<AxiosResponse> => $axios.$post('/auth/register', form);

  const login = (form: AuthLogin): Promise<AxiosResponse> => $axios.$post('/auth/login', form);

  const getAuth = (): Promise<AxiosResponse> => $axios.$get('/auth/me');

  return {
    register,
    login,
    getAuth,
  };
};
