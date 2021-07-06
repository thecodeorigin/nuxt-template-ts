import { Context } from '@nuxt/types';
import { Inject } from '@nuxt/types/app';
import { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import dev from '@/core/utils/functions/dev';

export interface AuthApi extends NuxtAxiosInstance {}

export default ({ $axios, store, error: nuxtError }: Context, inject: Inject): void => {
  const authApi: AuthApi = $axios.create({
    headers: {
      common: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  });

  const authToken: string = store.getters['auth/token'];

  authApi.onRequest((config: AxiosRequestConfig) => {
    config.headers.Authorization = 'Bearer ' + authToken;
    dev.log('Auth API executed');
  });

  authApi.onResponse((_response: AxiosResponse) => {});

  authApi.onError(async(error: AxiosError) => {
    await nuxtError({
      statusCode: error.response?.status,
      message: error.message,
    });
    dev.error(error);

    return Promise.resolve(false);
  });

  authApi.onRequestError((_err: AxiosError) => {});
  authApi.onResponseError((_err: AxiosError) => {});

  inject('authApi', authApi);
};
