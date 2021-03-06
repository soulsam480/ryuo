<template>
  <div class="app">
    <router-view> </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useNotes } from './hooks';

export default defineComponent({
  components: {},
  setup() {
    const { getAllnotes, createNote } = useNotes();
    onMounted(async () => {
      await createNote({ data: 'New note', meta: 'some meta data' });
      console.log(await getAllnotes());
    });
  },
});
</script>

<style></style>
