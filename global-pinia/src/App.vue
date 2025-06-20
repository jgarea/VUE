<template>
<h3>{{ store.count }} * 2 = {{ store.time2 }}</h3>
<button @click="store.increment(1)">Increment</button>
</template>

<script lang="ts" setup>
import { useCounterStore } from './store/counter';

//si hay varios counterStore
const store = useCounterStore();
</script>

<style scoped>

</style>