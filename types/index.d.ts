import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { AuthApi } from '@apis/auth';
import { ClientApi } from '@apis/client';

declare module '@nuxt/types' {
  interface Context {
    $axios: NuxtAxiosInstance;
    $clientApi: ClientApi;
    $authApi: AuthApi;
  }
}

declare module 'vuex' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ActionContext<S, R> {
    $axios: NuxtAxiosInstance;
    $clientApi: ClientApi;
    $authApi: AuthApi;
  }
}
