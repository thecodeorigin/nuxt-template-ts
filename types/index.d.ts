import { NuxtAxiosInstance } from '@nuxtjs/axios';

declare module '@nuxt/types' {
  interface Context {
    $axios: NuxtAxiosInstance;
  }
}

declare module 'vuex' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ActionContext<S, R> {
    $axios: NuxtAxiosInstance;
  }
}
