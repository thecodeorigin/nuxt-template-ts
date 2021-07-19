import { GetterTree } from 'vuex';
import { RootState } from './state';

export type RootGetters = GetterTree<RootState, RootState>;

export default {
  locale: state => state.locale || 'en',
} as RootGetters;
