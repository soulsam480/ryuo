<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Sidebar',
  setup() {
    const state = ref();

    return { state };
  },
});
</script>

<template>
  <div class="r-sidebar-container">
    <a href="j">kjn </a>
  </div>
</template>

<style lang="scss" scoped>
.r-sidebar-container {
  transition-property: width;
  transition-duration: 0.15s;
  transition-timing-function: ease-in;
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  // background-color: var(--secondary);
  overflow-x: hidden;
  padding-bottom: 20px;
  a:not(.user-link) {
    cursor: pointer;
    padding: 6px 8px 6px 16px;
    display: block;
    color: var(--primary);
    white-space: nowrap;
    &:hover {
      cursor: pointer;
      // background-color: $secondary-light !important;
      // color: $primary !important;
    }
  }
}
</style>
