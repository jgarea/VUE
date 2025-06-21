<template>
    <h1>Componente Lista</h1>
    <div class="container">
        <UserList v-for="item in props.content" :key="item.name" :content="item" />
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import UserList from '@/components/UserList.vue';
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