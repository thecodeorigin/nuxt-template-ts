<template>
  <div :class="$style.abc">
    <span class="text-primary-300">{{ $t('hello') }}</span>
    <span class="text-warning-700">{{ $t('hello') }}</span>
    <ExampleBase />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'IndexPage',
});
</script>

<style lang="scss" module>
.abc {
  color: $--color-red;
}
</style>

<i18n lang="yaml">
en:
  hello: 'hello world!'
vi:
  hello: 'Xin chào thế giới!'
</i18n>
