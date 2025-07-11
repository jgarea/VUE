<template>
 <h1>Notas:</h1>
 <input type="text" v-model="note" >
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const note = ref<string>('');

watch(note, (newValue, oldValue) => {
  alert(`Nota alterada de "${oldValue}" para "${newValue}"`);
  localStorage.setItem('note', newValue);
});

</script>


<style>

</style>
