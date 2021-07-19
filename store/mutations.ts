import Vue from 'vue';
import { MutationTree } from 'vuex';
import { RootState } from './state';

export type RootMutation = MutationTree<RootState>;

export default {
  SET_LOCALE(state, locale) {
    Vue.set(state, 'locale', locale);
  },
} as RootMutation;
