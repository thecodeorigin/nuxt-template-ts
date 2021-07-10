import { useAuthService } from '@/services/auth';
import { ActionTree, ActionContext } from 'vuex';
import { RootState } from '@/store/state';
import { AuthState } from './state';

export type AuthAction = ActionTree<AuthState, RootState>;

export type AuthActionContext = ActionContext<AuthState, RootState>;

export default {
  register: async(context: AuthActionContext, { form }: { form: AuthRegister }) => {
    const authService = useAuthService(context);

    const { data } = await authService.register(form);
    context.commit('SET_AUTH', data);

    return data;
  },
  login: async(context: AuthActionContext, { form }: { form: AuthLogin }) => {
    const authService = useAuthService(context);

    const { data } = await authService.login(form);
    context.commit('SET_AUTH', data);

    return data;
  },
  getAuth: async(context: AuthActionContext): Promise<AuthData> => {
    const authService = useAuthService(context);

    const { data } = await authService.getAuth();

    return data;
  },
} as AuthAction;
