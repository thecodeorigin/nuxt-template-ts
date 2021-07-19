import { Plugin } from '@nuxt/types';
import moment from 'moment';
import 'moment/locale/vi';

const momentPlugin: Plugin = ({ store }, inject) => {
  const currentLocale = store.getters.locale;

  moment.locale(currentLocale);
  inject('moment', moment);
};

export default momentPlugin;
