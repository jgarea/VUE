# VUE
## Componentes
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
## Directivas
### v-if
- La directiva `v-if` se utiliza para renderizar un bloque de código condicionalmente. Si la expresión evaluada es verdadera, el bloque se renderiza; de lo contrario, no se renderiza.
### v-else
- La directiva `v-else` se utiliza junto con `v-if` para proporcionar una alternativa cuando la condición de `v-if` es falsa. Debe colocarse inmediatamente después de un bloque `v-if`.
### v-else-if
- La directiva `v-else-if` se utiliza para agregar condiciones adicionales a un bloque `v-if`. Permite evaluar múltiples condiciones en secuencia.
### v-show
- La directiva `v-show` se utiliza para mostrar u ocultar un elemento basado en una expresión booleana. A diferencia de `v-if`, `v-show` no elimina el elemento del DOM, sino que simplemente cambia su estilo `display` entre `none` y su valor original.
### v-for
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
### v-bind
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
### vbind:style
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
### v-on
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
### v-model
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