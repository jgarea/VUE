<template>
 <h1>Notas:</h1>
 <input type="text" v-model="note" >
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  data() {
    return {
      note: ''
    };
  },
  watch: {
    note(value, oldValue) {
      alert(`Nota alterada de "${oldValue}" para "${value}"`);
      localStorage.setItem('note', value);
    }
  }
});
</script>

<style>

</style>
