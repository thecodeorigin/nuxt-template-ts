import { Context } from '@nuxt/types';
import { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import dev from '@utils/functions/dev';

export interface AuthApi extends NuxtAxiosInstance {}

export default ({ $axios, store, error: nuxtError }: Context): void => {
  const authToken: string = store.getters['auth/token'];

  $axios.onRequest((config: AxiosRequestConfig) => {
    if (authToken) {
      config.headers.Authorization = 'Bearer ' + authToken;
    }
    dev.log((authToken && '[Authenticated]') + 'API executed');
  });

  $axios.onResponse((_response: AxiosResponse) => {});

  $axios.onError(async(error: AxiosError) => {
    await nuxtError({
      statusCode: error.response?.status,
      message: error.message,
    });
    dev.error(error);

    return Promise.resolve(false);
  });

  $axios.onRequestError((_err: AxiosError) => {});
  $axios.onResponseError((_err: AxiosError) => {});

};
