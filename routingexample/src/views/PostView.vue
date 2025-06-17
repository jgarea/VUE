<template>
    <div>
        <h1>Post view</h1>
        <p>Post ID: {{ postId }}</p>
    </div>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import { useRoute } from 'vue-router';

let postId = ref('');
onMounted(() => {
    const route = useRoute();
    postId.value = route.params.id;
    console.log('Post ID:', postId.value);
    // Here you can fetch the post data using the ID from the route params
    // For example, you might call an API to get the post details
});
</script>