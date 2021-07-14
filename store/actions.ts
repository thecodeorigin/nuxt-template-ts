import { ActionTree } from 'vuex';
import { RootState } from './state';

export type RootAction = ActionTree<RootState, RootState>;

export default {
  nuxtServerInit: ({ commit }) => {
    commit('auth/SET_AUTH', {
      user: {
        email: 'contact@thecodeorigin.com',
        fullName: 'thecodeorigin',
        avatar: 'https://avatars.githubusercontent.com/u/60340907?s=200&v=4',
      },
      token: 'ultraSecretToken',
    });
  },
} as RootAction;
