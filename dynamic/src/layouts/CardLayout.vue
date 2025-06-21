<template>
    <h1>Componente Tarjeta</h1>
    <div class="container">
        <UserCard v-for="item in props.content" :key="item.name" :content="item" />
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import UserCard from '@/components/UserCard.vue';
const props = defineProps(['content']);
</script>

<style>
.container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
</style>