<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Note',
  setup() {
    const state = ref();

    return { state };
  },
});
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
