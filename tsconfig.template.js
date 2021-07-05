// From vue-enterprise-template
// See repo: https://github.com/chrisvfritz/vue-enterprise-boilerplate
// This is a template for a jsconfig.json file which will be
// generated when starting the dev server or a build.

module.exports = {
  compilerOptions: {
    target: 'ES2018',
    module: 'ESNext',
    moduleResolution: 'Node',
    lib: [
      'ESNext',
      'ESNext.AsyncIterable',
      'DOM'
    ],
    esModuleInterop: true,
    allowJs: true,
    sourceMap: true,
    strict: true,
    noEmit: true,
    experimentalDecorators: true,
    baseUrl: '.',
    paths: {
      '~/*': [
        './*'
      ],
      '@/*': [
        './*'
      ]
    },
    types: ['@nuxt/types', '@nuxtjs/axios', '@types/node', '@types/webpack-env'],
    // ...
    // `paths` will be automatically generated using aliases.config.js
    // ...
  },
  exclude: [
    'node_modules',
    '.nuxt',
    'dist'
  ],
}
