<template>
<h1>Listado de post</h1>
<button class="btn btn-primary">Agregar Post</button>
<ul class="post-list">
    <li v-for="post in posts" :key="post.id"><router-link :to="{ name: 'PostDetail', params: { id: post.id } }">{{ post.title }}</router-link></li>
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

<style scoped lang="scss" >
    .post-list li {
        color: $blue;
        font-size: 20px;
        list-style-type: none;
        a {
            text-decoration: none;
            color: inherit;
        }
    }
</style>