import { NuxtAxiosInstance } from '@nuxtjs/axios';

declare interface Service {
  [key: string]: any;
}

declare interface ServiceContext {
  $axios: NuxtAxiosInstance;
}
