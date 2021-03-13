<template>
  <div class="app container">
    <Sidebar />
    <div class="r-container">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useNotes } from './hooks';
import Sidebar from '/@/components/App/Sidebar.vue';
export default defineComponent({
  components: {
    Sidebar,
  },
  setup() {
    const { getAllnotes, deleteNote, createNote } = useNotes();
    onMounted(async () => {
      // await createNote({ data: 'New note', meta: { title: 'Hello world' } });
      const notes = await getAllnotes();
    });
  },
});
</script>

<style lang="scss"></style>
