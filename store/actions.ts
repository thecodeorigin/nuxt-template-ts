import { ActionTree } from 'vuex';
import { RootState } from './state';
const cookieparser = process.server ? require('cookieparser') : undefined;

export type RootAction = ActionTree<RootState, RootState>;

export default {
  nuxtServerInit({ commit }, { req }) {
    const cookie = cookieparser.parse(req.headers.cookie);

    commit('SET_LOCALE', cookie.lang);

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
