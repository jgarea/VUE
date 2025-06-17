<template>
<h1>Listado de post</h1>
<ul class="post-list">
    <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
</ul>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import PostService from '@/services/PostService';

        const postService = new PostService();
        const posts = postService.getPosts();
        onMounted(async () => {
            await postService.fetchAll();
        });
   
</script>

<style scoped>

</style>