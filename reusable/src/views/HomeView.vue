<template>
<MainLayout>
  <template #slot1> 
    <!-- v-slot: es # -->
    <h1>Slot 1</h1>
  </template>
  <template #aux>
    <h1>Home View</h1>
    <p>X {{ x }}</p>
    <p>Y {{ y }}</p>
  </template>
</MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { useMouse } from '@/composable/useMouse';

const { x, y } = useMouse();
</script>

<style scoped>

</style>