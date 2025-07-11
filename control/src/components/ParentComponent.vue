<template>
<ChildComponent ref="percentageComponent"/>
<button @click="banco">Añadir cuenta bancaria</button>
</template>

<script lang="ts" setup>
import ChildComponent from './ChildComponent.vue';
import { ref } from 'vue';
const percentageComponent = ref(null);
const banco = () => {
  alert('Cuenta subida correctamente');
  percentageComponent.value.recalculatePercentage();
};

</script>

<style scoped>

</style>