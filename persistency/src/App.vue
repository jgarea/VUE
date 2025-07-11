<template>
 <h1>Notas:</h1>
 <input type="text" v-model="note" >
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';

const note = ref<string>('');

watchEffect(() => {
  alert(`Nota guardada: ${note.value}`);
  localStorage.setItem('note', note.value);
});

</script>


<style>

</style>
