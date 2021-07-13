<template>
  <div :class="$style.sidebarWrapper">
    <nuxt-link v-for="(item, index) in sidebarItems" :key="'sidebar-item-' + index" :to="item.route" :class="$style.sidebarItem">
      <i :class="item.icon" />
    </nuxt-link>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'MySidebar',
  props: {},
  setup() {
    const data = reactive({
      sidebarItems: [
        {
          icon: 'icon-user',
          route: { name: 'index___vi' },
        },
      ],
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" module>
.sidebarWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: $--color-danger;
  width: 70px;
  height: 100vh;
}
</style>
