<template>
  <h3>{{ store.count }}</h3>
  <button @click="store.increment(1)">Añadir</button>
</template>

<script lang="ts" setup>
import { useExample } from '@/store/useExample';
const store = useExample();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
