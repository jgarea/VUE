import { ref,Ref } from 'vue';
import IPost from '@/interfaces/IPost';
class PostService {
    private posts: Ref<IPost[]>;

    constructor() {
        this.posts = ref<IPost[]>([]);

    }

    getPosts(): Ref<IPost[]> {
        return this.posts;
    }

    async fetchAll(): Promise<void> {
        try{
            const url = 'https://jsonplaceholder.typicode.com/posts';
            const response = await fetch(url);
            const json = await response.json();
            this.posts.value = await json;

        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    } 
}

export default PostService