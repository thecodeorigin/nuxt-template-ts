import { GetterTree } from 'vuex'
import { AuthState } from './state'

export type AuthGetters = GetterTree<AuthState, AuthState>

export default {
  currentUser (state: AuthState) {
    return state.data?.user
  },
  token (state: AuthState) {
    return state.data?.token
  },
} as AuthGetters
