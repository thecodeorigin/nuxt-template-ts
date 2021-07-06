import { Context } from '@nuxt/types';
import dev from '@utils/functions/dev';

/* eslint-disable @typescript-eslint/no-unused-vars */
export default function({ app }: Context): void {
  // beforeLanguageSwitch called right before setting a new locale
  app.i18n.onBeforeLanguageSwitch = (
    oldLocale: string,
    newLocale: string,
    isInitialSetup: any,
    context: any,
  ): void => {
    dev.log(oldLocale, newLocale, isInitialSetup);
  };
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (oldLocale: string, newLocale: string): void => {
    dev.log(oldLocale, newLocale);
  };
}
