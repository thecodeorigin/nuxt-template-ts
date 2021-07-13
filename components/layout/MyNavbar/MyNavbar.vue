<template>
  <div :class="$style.navbarWrapper">
    <!--  -->
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'MyNavbar',
  props: {},
  setup() {
    //
  },
});
</script>

<style lang="scss" module>
.navbarWrapper {
  background-color: $--color-warning;
  width: 100%;
  height: 60px;
}
</style>
