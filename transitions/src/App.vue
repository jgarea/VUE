<template>
<button @click="show = !show">Mostrar / Ocultar</button>
<Transition>
  <h1 v-if="show">Hello world animated</h1>
</Transition>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const show = ref(false);
</script>

<style lang="scss">
//En css
enter-from {
    opacity: 0;
    transform: translateY(-20px);
}
enter-active {
    transition: all 0.5s ease;
}
enter-to {
    opacity: 1;
    transform: translateY(0);
}
leave-from {
    opacity: 1;
    transform: translateY(0);
}
leave-active {
    transition: all 0.5s ease;
}
leave-to {
    opacity: 0;
    transform: translateY(20px);
}
// Con transicion
.v-enter-active{
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.v-leave-active{
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.v-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
