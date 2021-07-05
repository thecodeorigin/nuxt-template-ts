/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import dev from '@utils/functions/dev'

/* eslint-disable @typescript-eslint/no-unused-vars */
export default function ({ app }: any): void {
  // beforeLanguageSwitch called right before setting a new locale
  app.i18n.onBeforeLanguageSwitch = (
    oldLocale: string,
    newLocale: string,
    isInitialSetup: any,
    context: any
  ) => {
    dev.log(oldLocale, newLocale, isInitialSetup)
  }
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (oldLocale: string, newLocale: string) => {
    dev.log(oldLocale, newLocale)
  }
}
