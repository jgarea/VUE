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

<script setup lang="ts">
import { ref, Ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
let email: Ref<string> = ref('');
let password: Ref<string> = ref('');

const authUser = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('User signed in:', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            switch (errorCode) {
                case 'auth/invalid-email':
                console.error('El correo electrónico no tiene un formato válido.');
                break;
                case 'auth/user-disabled':
                console.error('El usuario ha sido deshabilitado por un administrador.');
                break;
                case 'auth/user-not-found':
                console.error('No existe una cuenta con este correo.');
                break;
                case 'auth/wrong-password':
                console.error('La contraseña no es correcta.');
                break;
                case 'auth/too-many-requests':
                console.error('Demasiados intentos fallidos. Intenta más tarde.');
                break;
                case 'auth/invalid-credential':
                console.error('Credenciales inválidas. Verifica correo y contraseña.');
                break;
                default:
                console.error(`Error desconocido (${errorCode}): ${errorMessage}`);
            }
        });

}
</script>