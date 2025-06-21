<template>
<TransitionGroup name="list" tag="ul">
  <li v-for="note in notes" :key="note">{{ note }}</li>
</TransitionGroup>
<input type="text" v-model="newNote" placeholder="Add a note">
<button @click="addNote">Save note</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const notes = ref<string[]>([]);
const newNote = ref<string>('');

const addNote = () => {
  if (newNote.value.trim()) {
    notes.value.push(newNote.value.trim());
    newNote.value = '';
  }
};
</script>

<style scoped>
.list-enter-active {
  transition: all 0.5s ease;
  
  
}
.list-leave-active {
  transition: all 0.5s ease;
  
  
}
.list-enter-from, .list-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>