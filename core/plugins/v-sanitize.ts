import Vue from 'vue';
import { sanitize } from 'isomorphic-dompurify';
import { Plugin } from '@nuxt/types';

export const FILTER_BASIC = Object.freeze({
  USE_PROFILES: { html: false },
});

export const FILTER_INLINE = Object.freeze({
  ALLOWED_TAGS: ['a', 'b', 'br', 'code', 'em', 'i', 'span', 'strike', 'strong', 'u'],
  ALLOWED_ATTR: ['href', 'target', 'style'],
  ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,
});

export const FILTER_NOTHING = Object.freeze({
  USE_PROFILES: { html: true },
});

export const FILTER_STRIP = Object.freeze({
  ADD_TAGS: [],
  ADD_ATTR: [],
});

const IsomorphicDompurify: Plugin = (_, inject) => {
  const sanitizeFn = (dirty: any): any => sanitize(dirty);
  Object.defineProperty(Vue, '$sanitize', sanitizeFn);
  
  Vue.directive('sanitize', (el, binding) => {
    if (binding.value !== binding.oldValue) {
      if (Array.isArray(binding.value)) {
        el.innerHTML = sanitize(binding.value[1], binding.value[0]).toString();
      } else {
        if (binding.modifiers.strip) {
          el.innerHTML = sanitize(binding.value, FILTER_STRIP).toString();
        } else if (binding.modifiers.basic) {
          el.innerHTML = sanitize(binding.value, FILTER_BASIC).toString();
        } else if (binding.modifiers.inline) {
          el.innerHTML = sanitize(binding.value, FILTER_INLINE).toString();
        } else if (binding.modifiers.nothing) {
          el.innerHTML = sanitize(binding.value, FILTER_NOTHING).toString();
        }
        el.innerHTML = sanitize(binding.value);
      }
    }
  });
  
  inject('sanitize', sanitizeFn);
};

export default IsomorphicDompurify;
