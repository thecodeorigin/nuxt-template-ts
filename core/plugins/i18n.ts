import Cookies from 'js-cookie';
import { Plugin } from '@nuxt/types';
import dev from '@utils/functions/dev';

const i18nPlugin: Plugin = async({ store, app }) => {
  // set default locale from store (Cookie)
  if (store.getters.locale) {
    await app.i18n.setLocale(store.getters.locale);
  }
  // beforeLanguageSwitch called right before setting a new locale
  app.i18n.onBeforeLanguageSwitch = (oldLocale: string, newLocale: string): void => {
    dev.log(oldLocale, newLocale);
  };
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (_: string, newLocale: string): void => {
    store.commit('SET_LOCALE', newLocale);
    Cookies.set('lang', newLocale);
  };
};

export default i18nPlugin;
