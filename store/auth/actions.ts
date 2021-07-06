import { ActionTree } from 'vuex';
import { AuthState } from './state';

export type AuthAction = ActionTree<AuthState, AuthState>;

export default {} as AuthAction;
