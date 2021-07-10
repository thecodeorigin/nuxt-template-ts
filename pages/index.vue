<template>
  <div>
    {{ $t('hello') }}
    <ExampleBase />
    <!-- ProductItem is not a base component -->
    <!-- <ProductItem /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'IndexPage',
});
</script>

<i18n lang="yaml">
en:
  hello: 'hello world!'
vi:
  hello: 'Xin chào thế giới!'
</i18n>
