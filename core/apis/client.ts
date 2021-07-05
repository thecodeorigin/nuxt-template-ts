import { Inject } from '@nuxt/types/app'
import { AxiosError, AxiosResponse } from 'axios'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Context } from '@nuxt/types'
import dev from '@/core/utils/functions/dev'

export type ClientApi = NuxtAxiosInstance

export default ({ app, $axios, error: nuxtError }: Context, inject: Inject): void => {
  const clientApi: ClientApi = $axios.create({
    headers: {
      common: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  })

  clientApi.onRequest(() => {
    dev.log('Client API executed')
  })

  clientApi.onResponse((_response: AxiosResponse) => {})

  clientApi.onError((error: AxiosError) => {
    dev.error(error)
    switch (error.response?.status) {
      case 404:
        nuxtError({
          statusCode: 404,
          message: app.i18n.t('error.404'),
        })
        break
      default:
        nuxtError({
          statusCode: 500,
          message: app.i18n.t('error.500'),
        })
        break
    }
  })

  clientApi.onRequestError((_err: AxiosError) => {})
  clientApi.onResponseError((_err: AxiosError) => {})

  inject('clientApi', clientApi)
}
