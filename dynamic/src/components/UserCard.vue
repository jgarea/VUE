<template>
<div class="card">
    <h3>{{ props.content.name }}</h3>
    <p>Edad: {{ props.content.age }}</p>
    <p>Cargo: {{ props.content.position }}</p>
</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps(['content']);
</script>

<style scoped>
.card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 8px;
    width: 200px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>