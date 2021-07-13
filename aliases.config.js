// From vue-enterprise-template
// See repo: https://github.com/chrisvfritz/vue-enterprise-boilerplate
const path = require('path');
const fs = require('fs');
const prettier = require('prettier');

const aliases = {
  '@': '.',
  '~': '.',
  '@@': '.',
  '~~': '.',
  '@core': './core',
  '@services': './services',
  '@components': './components',
  '@constants': './constants',
  '@store': './store',
  '@types': './types',
  '@apis': './core/apis',
  '@mixins': './core/mixins',
  '@utils': './core/utils',
};

const prettierConfig = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'strict',
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  printWidth: 100,
  proseWrap: 'never',
  quoteProps: 'consistent',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  vueIndentScriptAndStyle: false,
};

module.exports = {
  webpack: {},
  tsconfig: {},
  jsconfig: {},
};

for (const alias in aliases) {
  const aliasTo = aliases[alias];
  module.exports.webpack[alias] = resolveSrc(aliasTo);
  module.exports.tsconfig[alias + '/*'] = [aliasTo + '/*'];
  module.exports.tsconfig[alias] = aliasTo.includes('/index.')
    ? [aliasTo]
    : [
      aliasTo + '/index.js',
      aliasTo + '/index.json',
      aliasTo + '/index.vue',
      aliasTo + '/index.scss',
      aliasTo + '/index.css',
    ];

  module.exports.jsconfig[alias + '/*'] = [aliasTo + '/*'];
  module.exports.jsconfig[alias] = aliasTo.includes('/index.')
    ? [aliasTo]
    : [
      aliasTo + '/index.js',
      aliasTo + '/index.json',
      aliasTo + '/index.vue',
      aliasTo + '/index.scss',
      aliasTo + '/index.css',
    ];
}

const tsconfigTemplate = require('./tsconfig.template');
const tsconfigPath = path.resolve(__dirname, 'tsconfig.json');

const jsconfigTemplate = require('./jsconfig.template');
const jsconfigPath = path.resolve(__dirname, 'jsconfig.json');

function writeConfigFile(configPath, configTemplate, configFileName) {
  fs.writeFile(
    configPath,
    prettier.format(
      JSON.stringify({
        ...configTemplate,
        compilerOptions: {
          ...(configTemplate.compilerOptions || {}),
          paths: module.exports[configFileName],
        },
      }),
      {
        ...prettierConfig,
        parser: 'json',
      },
    ),
    (error) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.error('Error while creating tsconfig.json from aliases.config.js.');
        throw error;
      }
    },
  );
}

writeConfigFile(tsconfigPath, tsconfigTemplate, 'tsconfig');
writeConfigFile(jsconfigPath, jsconfigTemplate, 'jsconfig');

function resolveSrc(_path) {
  return path.resolve(__dirname, _path);
}
