import { GetterTree } from 'vuex';
import { RootState } from '@/store/state';
import { AuthState } from './state';

export type AuthGetters = GetterTree<AuthState, RootState>;

export default {
  currentUser: (state: AuthState): AuthUser | undefined => state.data?.user,
  token: (state: AuthState): string | undefined => state.data?.token,
} as AuthGetters;
