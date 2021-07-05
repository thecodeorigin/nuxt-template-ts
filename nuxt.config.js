import fs from 'fs'
import path from 'path'
import YAML from 'yaml'

function readYamlFile (path) {
  const file = fs.readFileSync(path, 'utf8')
  return YAML.parse(file)
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-template-ts',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/core/plugins/i18n' },
    { src: '@/core/apis/client' },
    { src: '@/core/apis/auth' },
    { src: '@/core/utils' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://composition-api.nuxtjs.org
    '@nuxtjs/composition-api/module',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'vi',
    vueI18n: {
      fallbackLocale: 'en',
      silentFallbackWarn: true,
      messages: {
        en: readYamlFile('./core/locales/en.yaml'),
        vi: readYamlFile('./core/locales/vi.yaml'),
      },
    },
    vueI18nLoader: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  watch: [
    /* '~/custom/*.js' */
  ],

  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,vue}',
      },
    },
  },

  alias: {
    // Root folder
    '~~': path.resolve(__dirname),
    '@@': path.resolve(__dirname),
    // Source folder
    '~': path.resolve(__dirname, './'),
    '@': path.resolve(__dirname, './'),
    '@services': path.resolve(__dirname, './services'),
    '@components': path.resolve(__dirname, './components'),
    '@apis': path.resolve(__dirname, './core/apis'),
    '@constants': path.resolve(__dirname, './core/constants'),
    '@mixins': path.resolve(__dirname, './core/mixins'),
    '@models': path.resolve(__dirname, './core/models'),
    '@utils': path.resolve(__dirname, './core/utils'),
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
