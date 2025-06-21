<template>
<div class="list">
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
.list {
    background-color: aquamarine;
    border-radius: 10px;
    padding: 12px 16px;
    margin: 8px 0;
    display: flex;
    margin: 10px;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
}
</style>