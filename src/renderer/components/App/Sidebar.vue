<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Notes } from '/@/../main/db/entities/notes';
import { useNotes } from '/@/hooks';

export default defineComponent({
  name: 'Sidebar',
  setup() {
    const notes = ref<Notes[]>([]);
    const { getAllnotes } = useNotes();
    (async () => {
      notes.value = await getAllnotes();
    })();
    return { notes };
  },
});
</script>

<template>
  <div class="r-sidebar-container">
    <div class="r-sidenav__outline">
      <div class="r-sidenav__link" v-for="note in notes" :key="note.id">
        <router-link :to="`/note/${note.id}`">{{
          note.meta.title
        }}</router-link>
      </div>
    </div>
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
  overflow-x: hidden;
  padding-bottom: 20px;
  border-right: 1px solid var(--primary-50);
}
</style>
