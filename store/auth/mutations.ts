import { MutationTree } from 'vuex';
import { AuthState } from './state';

export type AuthMutation = MutationTree<AuthState>;

export default {
  SET_AUTH(state, auth: AuthData): void {
    state.data = auth;
  },
} as AuthMutation;
