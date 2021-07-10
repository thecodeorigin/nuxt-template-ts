import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { AuthApi } from '@apis/auth';
import { ClientApi } from '@apis/client';

declare interface Service {
  [key: string]: any;
}

declare interface ServiceContext {
  $axios: NuxtAxiosInstance;
  $clientApi: ClientApi;
  $authApi: AuthApi;
}
