/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Vue from 'vue';

// Any modules in @utils will be registered
export default (_: any, inject: any): void => {
  // Setup all utilities
  // Filters, directives global components and helper functions are setup

  // See docs: https://webpack.js.org/guides/dependency-management/#context-module-api
  const requireModule = require.context(
    './',
    true,
    /^(?!.*index).*\.ts$/, /* Every javascript file except index.ts file */
  );
  requireModule.keys().forEach((fileName: string) => {
    const module = requireModule(fileName).default;

    const temp = fileName.replace(/(\.\/|\.ts)/g /* Remove "./" and ".ts" */, '').split('/');
    const moduleName = temp.length > 1 ? temp[temp.length - 1] : temp[0];

    switch (temp[0]) {
      case 'filters':
        Vue.filter(moduleName, module);
        break;
      case 'directives':
        Vue.directive(moduleName, module);
        break;
      case 'functions':
        inject(moduleName, module);
        break;
      default:
        break;
    }
  });
};
