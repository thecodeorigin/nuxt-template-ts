import { MutationTree } from 'vuex';
import { AuthState, IAuth } from './state';

export type AuthMutation = MutationTree<AuthState>;

export default {
  SET_AUTH(state, auth: IAuth) {
    state.data = auth;
  },
} as AuthMutation;
