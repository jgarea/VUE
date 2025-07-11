<template>
<h1>Porcentaje: {{ percentage }}%</h1>
</template>

<script lang="ts" setup>
import { ref,onMounted,defineExpose } from 'vue';
const percentage = ref<number>(0);
onMounted(() => {
  percentage.value = 24;
});


const recalculatePercentage = () => {
    percentage.value = 42;
}

defineExpose({
  recalculatePercentage
});
</script>

<style scoped>

</style>