- [1. VUE](#1-vue)
  - [1.1. Componentes](#11-componentes)
  - [1.2. Directivas](#12-directivas)
    - [1.2.1. v-if](#121-v-if)
    - [1.2.2. v-else](#122-v-else)
    - [1.2.3. v-else-if](#123-v-else-if)
    - [1.2.4. v-show](#124-v-show)
    - [1.2.5. v-for](#125-v-for)
    - [1.2.6. v-bind](#126-v-bind)
    - [1.2.7. vbind:style](#127-vbindstyle)
    - [1.2.8. v-on](#128-v-on)
    - [1.2.9. v-model](#129-v-model)
  - [1.3. Comunicación Vertical Y Ciclo De Vida](#13-comunicación-vertical-y-ciclo-de-vida)
    - [1.3.1. beforeCreate](#131-beforecreate)
    - [1.3.2. created](#132-created)
    - [1.3.3. beforeMount](#133-beforemount)
    - [1.3.4. mounted](#134-mounted)
    - [1.3.5. beforeUpdate](#135-beforeupdate)
    - [1.3.6. updated](#136-updated)
    - [1.3.7. beforeUnmounted](#137-beforeunmounted)
    - [1.3.8. unmounted](#138-unmounted)
    - [1.3.9. En Opction API](#139-en-opction-api)
    - [1.3.10. En Composition API](#1310-en-composition-api)
    - [1.3.11. Comunicación Vertical](#1311-comunicación-vertical)
  - [1.4. Dato computado](#14-dato-computado)
  - [1.5. Directivas personalizadas](#15-directivas-personalizadas)
  - [1.6. Servicios](#16-servicios)
  - [1.7. Estilos](#17-estilos)
    - [1.7.1. Bootstrap](#171-bootstrap)
  - [1.8. Enrutado](#18-enrutado)
    - [1.8.1. Ruta con parámetros](#181-ruta-con-parámetros)
    - [1.8.2. Enrutado con servicios](#182-enrutado-con-servicios)
  - [Autentificación](#autentificación)
    - [JWT](#jwt)
    - [Sesiones](#sesiones)
    - [Autentificación contra backend](#autentificación-contra-backend)
    - [Auth contra firebase](#auth-contra-firebase)
    - [Auth con google](#auth-con-google)
    - [Auth contra AWS](#auth-contra-aws)
    - [Auth contra Azure](#auth-contra-azure)
  - [Vuex](#vuex)
  - [Pinia](#pinia)
  - [cookies y sessions](#cookies-y-sessions)
  - [Peticiones autenticadas y proteccion de rutas](#peticiones-autenticadas-y-proteccion-de-rutas)
  - [Backend ejemplo](#backend-ejemplo)
  - [Layout slots y composables](#layout-slots-y-composables)
  - [COMPONENTES DINÁMICOS](#componentes-dinámicos)

# 1. VUE
## 1.1. Componentes
```vue
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'ExampleSelective',
    setup(){
        let age = 19;
        return { age }
    }
})
    
</script>
```
```vue
<script lang="ts" setup>
        let age = 12;    
</script>

```
## 1.2. Directivas
### 1.2.1. v-if
- La directiva `v-if` se utiliza para renderizar un bloque de código condicionalmente. Si la expresión evaluada es verdadera, el bloque se renderiza; de lo contrario, no se renderiza.
### 1.2.2. v-else
- La directiva `v-else` se utiliza junto con `v-if` para proporcionar una alternativa cuando la condición de `v-if` es falsa. Debe colocarse inmediatamente después de un bloque `v-if`.
### 1.2.3. v-else-if
- La directiva `v-else-if` se utiliza para agregar condiciones adicionales a un bloque `v-if`. Permite evaluar múltiples condiciones en secuencia.
### 1.2.4. v-show
- La directiva `v-show` se utiliza para mostrar u ocultar un elemento basado en una expresión booleana. A diferencia de `v-if`, `v-show` no elimina el elemento del DOM, sino que simplemente cambia su estilo `display` entre `none` y su valor original.
### 1.2.5. v-for
- La directiva `v-for` se utiliza para renderizar una lista de elementos a partir de un array. Permite iterar sobre los elementos del array y crear un nuevo elemento para cada uno de ellos.
```vue
<template>
<ul>
    <li v-for="country in countries" :key="country">{{ country }}</li>
</ul>
</template>

<script lang="ts" setup>
import {Ref,ref} from 'vue';
let countries:Ref<Array<string>> = ref(['Spain', 'France', 'Germany', 'Italy']);
</script>

<style scoped></style>
```
```vue
<template>
<ul>
    <li v-for="country in countries" v-bind:key="country.code">{{ country.name }}</li>
</ul>
</template>

<script lang="ts" setup>
import {Ref,ref} from 'vue';
interface ICountry {
    code: string,
    name: string
}
let countries:Ref<Array<ICountry>>= ref([
    {
        code: 'es',
        name: 'Spain'
    },
    {
        code: 'fr',
        name: 'France'
    },
    {
        code: 'de',
        name: 'Germany'
    },
    {
        code: 'it',
        name: 'Italy'
    }

]);
</script>

<style scoped></style>
```
### 1.2.6. v-bind
- La directiva `v-bind` se utiliza para enlazar atributos de un elemento a una expresión de Vue. Permite actualizar dinámicamente los atributos del elemento en función de los datos del componente.
```vue
<template>
<p v-bind:class="{ danger: hasError }">El mensaje se ha enviado satisfactoriamente</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ClassBind',
  setup() {
    let hasError = true;
    return {
      hasError
    }
  }
})
</script>

<style scoped>
.danger{
    color:red
}
</style>
```
### 1.2.7. vbind:style
- La directiva `v-bind:style` se utiliza para aplicar estilos en línea a un elemento HTML. Permite enlazar un objeto de estilos a un elemento, lo que facilita la personalización dinámica de los estilos.
```vue
<template>
<p v-bind:style="{
    backgroundColor: 'green',
    color: 'white'
}">El mensaje se ha enviado satisfactoriamente</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

</script>

<style scoped>

</style>
```
### 1.2.8. v-on
- La directiva `v-on` se utiliza para escuchar eventos en un elemento HTML. Permite ejecutar una función o método cuando ocurre un evento específico, como un clic o un cambio de valor.
```vue
<template>
<p v-bind:style="{
    backgroundColor: 'grey',
    color: c
}">El mensaje se ha enviado satisfactoriamente</p>
<button @click="handleClick">Cambiar color</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let c = ref('#fff');
const handleClick = () => {c.value = '#ff0000'}
</script>

<style scoped>

</style>
```
### 1.2.9. v-model
- La directiva `v-model` se utiliza para crear un enlace bidireccional entre un elemento de formulario y una propiedad del componente. Permite que los cambios en el valor del elemento se reflejen automáticamente en la propiedad del componente y viceversa.
```vue
<template>
    <form>
        <input type="text" v-model="inputText">
    </form>
    <h3>{{ inputText }}</h3>
</template>

<script lang="ts" setup>
    import {Ref, ref } from 'vue'

    let inputText: Ref<string> = ref('');
</script>

<style scoped>

</style>
```
```vue
<template>
    <form>
        <input type="text" v-model="inputText">
        <input type="checkbox" name="checkbox" id="checkbox" v-model="agree"/> Acepto los términos y condiciones
        <select name="select" id="select" v-model="selectedOption">
            <option>Opción 1</option>
            <option>Opción 2</option>
        </select>
    </form>
    <h3>{{ inputText }}</h3>
    <h3>{{ agree ? 'Aceptado' : 'No aceptado' }}</h3>
    <h3>{{ selectedOption }}</h3>
</template>

<script lang="ts" setup>
    import {Ref, ref } from 'vue'

    let inputText: Ref<string> = ref('');
    let agree: Ref<boolean> = ref(false);
    let selectedOption: Ref<string> = ref('option1');
</script>

<style scoped>

</style>
```
## 1.3. Comunicación Vertical Y Ciclo De Vida
### 1.3.1. beforeCreate
- Se ejecuta antes de que se inicialicen las propiedades reactivas y los eventos del componente. En este punto, el componente aún no está completamente configurado.
### 1.3.2. created
- Se ejecuta después de que el componente ha sido creado y las propiedades reactivas han sido inicializadas. En este punto, el componente está listo para ser utilizado, pero aún no se ha montado en el DOM.
### 1.3.3. beforeMount
- Se ejecuta justo antes de que el componente sea montado en el DOM. En este punto, el componente aún no es visible en la página.
### 1.3.4. mounted
- Se ejecuta después de que el componente ha sido montado en el DOM. En este punto, el componente es visible en la página y se pueden realizar manipulaciones del DOM.
### 1.3.5. beforeUpdate
- Se ejecuta antes de que el componente sea actualizado debido a un cambio en sus propiedades reactivas. En este punto, el componente aún no ha sido renderizado con los nuevos datos.
### 1.3.6. updated
- Se ejecuta después de que el componente ha sido actualizado y renderizado con los nuevos datos. En este punto, el componente refleja los cambios realizados en sus propiedades reactivas.
### 1.3.7. beforeUnmounted
- Se ejecuta justo antes de que el componente sea desmontado del DOM. En este punto, el componente aún es visible en la página, pero se está preparando para ser eliminado.
### 1.3.8. unmounted
- Se ejecuta después de que el componente ha sido desmontado del DOM. En este punto, el componente ya no es visible en la página y se han limpiado los recursos asociados a él.

### 1.3.9. En Opction API
```vue
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CycleOption',
    created() {
        console.log('created');
    },
    mounted() {
        console.log('mounted');
    },
})
</script>
```
### 1.3.10. En Composition API
```vue
<template>
<div></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(() => {
    console.log('mounted');
});

</script>

<style scoped>

</style>
```
### 1.3.11. Comunicación Vertical
- En Vue, la comunicación vertical se refiere a la forma en que los componentes se comunican entre sí a través de la jerarquía de componentes. Los componentes padres pueden pasar datos a sus hijos mediante props, y los hijos pueden emitir eventos para notificar a sus padres sobre cambios o acciones.
```vue
<template>
    <div class="container">
        <PostDetail v-for="(post, index) in info" :key="index" :title="post.title" 
        :content="post.content" @sayHi="showAlert" />
    </div>
</template>

<script lang="ts" setup>
import PostDetail from './PostDetail.vue';
interface Post {
    title: string;
    content: string;
}
let info: Array<Post> = [
    { title: 'Post 1', content: 'Content for post 1' },
    { title: 'Post 2', content: 'Content for post 2' },
    { title: 'Post 3', content: 'Content for post 3' },
    { title: 'Post 4', content: 'Content for post 4' },
    { title: 'Post 5', content: 'Content for post 5' }
];
function showAlert(msg: string) {
    alert(msg);
}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
}
</style>
```
```vue
<template>
<div class="post">
    <h3>{{ props.title }}</h3>
    <p>{{ props.content }}</p>
    <button @click="handleClick">Di hola</button>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'PostDetail',
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false,
            default: 'Este post no tiene contenido'
        }
    },
    emits: ['sayHi'],
    setup(props, { emit }) {
        // You can add any additional logic here if needed
        const handleClick = () => {
            emit('sayHi', `Hola desde ${props.title}`);
        };
        return {
            props,
            handleClick
        };
    }
});
</script>

<style scoped>
.post {
    
    width: 300px;
    /* height: 100px; */
    background-color: #a1a996;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
```
```vue
<script lang="ts" setup>
  
import { Ref,ref,defineProps,defineEmits} from 'vue';
// You can add any additional logic here if needed
const props = defineProps({
    title: String,
    content: {
        type: String,
        default: 'Este post no tiene contenido'
    }
});
const emit = defineEmits(['sayHi']);
const handleClick = () => {
    emit('sayHi', `Hola desde ${props.title}`);
};
   
</script>
```
## 1.4. Dato computado
- Los datos computados son propiedades que se calculan en función de otras propiedades reactivas. Se utilizan para realizar cálculos o transformaciones en los datos y se actualizan automáticamente cuando las propiedades de las que dependen cambian.
Option API:
```vue
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ComputedExample',
    data() {
        return {
            message: '',    
        }
    },
    computed: {
        reversedMessage(): string {
            return this.message.split('').reverse().join('');
        }
    }
})
</script>
```
Composition API:
```vue
<script lang="ts">
import { defineComponent,ref,Ref,computed } from 'vue';

export default defineComponent({
    name: 'ComputedExample',
    setup(){
        let message:Ref<string> = ref('')
        const reversedMessage = computed(() => 
            message.value.split('').reverse().join('')
        );
        return {
            message,
            reversedMessage
        }
    }
})
</script>
```
```vue

<script lang="ts" setup>
import { ref,Ref,computed } from 'vue';

let message:Ref<string> = ref('')
const reversedMessage = computed(() => 
    message.value.split('').reverse().join('')
);
     
</script>
```
## 1.5. Directivas personalizadas
- Las directivas personalizadas son extensiones de las directivas incorporadas de Vue que permiten agregar funcionalidad personalizada a los elementos del DOM. Se pueden utilizar para manipular el DOM, agregar comportamientos personalizados o realizar tareas específicas.
```vue
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('font-size', {
    beforeMount:(el,binding) =>{
        el.style.fontSize = binding.value + 'px'
    }
})

app.mount('#app')

```
```vue
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('font-size', {
    beforeMount:(el,binding) =>{
        let size = 18;
        switch (binding.arg) {
            case 'sm':
                size = 10;
                break;
            case 'md':
                size = 16;
                break;
            case 'lg':
                size = 20;
                break;
            default:
                break;
        }
        el.style.fontSize = size + 'px';
    }
})

app.mount('#app')
```
```vue
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('font-size', {
    beforeMount:(el,binding) =>{
        let size = 18;
        switch (binding.arg) {
            case 'sm':
                size = 10;
                break;
            case 'md':
                size = 16;
                break;
            case 'lg':
                size = 20;
                break;
            default:
                break;
        }
        el.style.fontSize = size + 'px';
    }
})
app.directive('custom-font', {
    beforeMount:(el,binding) =>{
        let size = 18;

        if(binding.modifiers.sm) {
            size = 10;
        }
        if(binding.modifiers.md) {
            size = 16;
        }
        if(binding.modifiers.lg) {
            size = 20;
        }
        if(binding.modifiers.xxl) {
            size = 30;
        }
        el.style.fontSize = size + 'px';
        
        if(binding.modifiers.red) {
            el.style.color = 'red';
        }
        if(binding.modifiers.blue) {
            el.style.color = 'blue';
        }
        if(binding.modifiers.green) {
            el.style.color = 'green';
        }
        
    }
}
)
app.mount('#app')
```
## 1.6. Servicios
- Los servicios en Vue son objetos que encapsulan lógica de negocio o funcionalidad reutilizable que puede ser compartida entre diferentes componentes. Se utilizan para separar la lógica de negocio de la presentación y facilitar la reutilización del código.

## 1.7. Estilos
LESS y SASS son preprocesadores de CSS que permiten escribir estilos de manera más eficiente y organizada. Ambos ofrecen características como variables, anidamiento, mixins y funciones, lo que facilita la creación y mantenimiento de estilos complejos.
```ts
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css:{
    loaderOptions:{
      sass: {
        additionalData: `@use "@/scss/variables" as *;`
      }
    }
  }
})
```
### 1.7.1. Bootstrap
`npm install --save bootstrap`
`npm install --save @popperjs/core`

## 1.8. Enrutado
- El enrutado en Vue se maneja principalmente a través de la biblioteca Vue Router, que permite definir rutas y navegar entre diferentes vistas o componentes en una aplicación Vue. Vue Router proporciona una forma sencilla de gestionar la navegación y el estado de la aplicación.

### 1.8.1. Ruta con parámetros
```ts
<li><router-link :to="{name: 'post', params: { id: 1 }}">Primer Post</router-link></li>
```
```ts
{
    path: '/blog/:id',
    name: 'post',
    component: PostView
}
```
### 1.8.2. Enrutado con servicios
``npm install vue-router``

## Autentificación
### JWT
### Sesiones

### Autentificación contra backend
### Auth contra firebase
### Auth con google
### Auth contra AWS
### Auth contra Azure

## Vuex
- Vuex es una biblioteca de gestión del estado para aplicaciones Vue.js. Proporciona un almacén centralizado para todos los componentes de la aplicación, lo que facilita la gestión y el seguimiento del estado compartido entre diferentes componentes.
- state, getters, mutations, actions, modules
- Data, Computed, set sync, set async, subdivide the store

## Pinia
- Pinia es una alternativa a Vuex para la gestión del estado en aplicaciones Vue.js. Es más ligera y fácil de usar, y se integra perfectamente con la Composition API de Vue 3.
- Al igual que Vuex, Pinia utiliza un almacén centralizado, pero su API es más simple y se basa en la creación de "stores" individuales para cada módulo de la aplicación.

``npm i pinia``
```ts
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).mount('#app')
```

## cookies y sessions
``npm install vue-cookies``

``npm install vue-session``

## Peticiones autenticadas y proteccion de rutas
- Para realizar peticiones autenticadas, se puede utilizar la biblioteca Axios junto con Vuex o Pinia para gestionar el estado de autenticación. Se pueden configurar interceptores de Axios para agregar el token de autenticación a las cabeceras de las peticiones.

## Backend ejemplo
https://github.com/JJRuizDeveloper/vue-example-server/tree/main

## Layout slots y composables
- Los layout slots permiten a los componentes definir áreas específicas donde se puede insertar contenido dinámico. Esto es útil para crear diseños flexibles y reutilizables.
- Los composables son funciones reutilizables que encapsulan lógica de negocio o funcionalidad específica. Se pueden utilizar en múltiples componentes y ayudan a mantener el código limpio y organizado.

## COMPONENTES DINÁMICOS