<template>
<div><h1>Post detail</h1></div>
<div class="post-container">
    <div class="post-card">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
    </div>
    <router-link :to="{ name: 'PostList' }">Volver atras</router-link>
</div>
</template>

<script lang="ts" setup>
import PostService from '@/services/PostService';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const service = new PostService();
const post = service.getPost();

onMounted(async () => {
   const route = useRoute();
   const id = route.params.id;
   await service.fetchById(id);
})

</script>

<style lang="scss" scoped>
.post-container {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.post-card {
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 10px;
}
</style>