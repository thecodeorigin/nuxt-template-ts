import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  // Preflight is enabled on-demanded.
  // https://windicss.org/integrations/nuxt.html#preflight-style-resetting
  preflight: true,
  // By default, we scan your source code statically and find all the usages of the utilities
  // this will not be detected
  // <div :class="{ ['p-'+ size]: true}">
  safelist: [],
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: [
      'node_modules',
      'dist',
      '.git',
      '.github',
      '.nuxt',
    ],
  },
});
