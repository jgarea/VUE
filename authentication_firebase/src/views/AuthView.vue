<template>
<div class="container">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary mt-2" @click.prevent="authUser">Submit</button>
    </form>
</div>
</template>

<script lang="ts" setup>
import { ref,Ref } from 'vue';
import AuthService from '@/services/AuthService';

let email: Ref<string> = ref('');
let password: Ref<string> = ref('');
const authUser = async () => {
    const authService = new AuthService();
    const success = await authService.login(email.value, password.value)
    if (success) {
      alert('Login successful!');
    }
    else {
      alert('Login failed. Please check your credentials.');
    }
        
};

</script>

<style scoped>

</style>