<template>
<h1>Listado de usuarios</h1>
<input type="text" name="search" id="search" placeholder="Buscar usuario..." v-model="search" @keyup="handleSearch" />
<div>
  <button @click="handleLayoutChange(ListLayout)">Ver en lista</button>
  <button @click="handleLayoutChange(CardLayout)">Ver en tarjetas</button>
  <button @click="handleLayoutChange(TableLayout)">Ver en tabla</button>
</div>
<component v-bind:is="layout" :content="filteredUsers" />
</template>

<script lang="ts" setup>
import { ref,defineAsyncComponent } from 'vue';

const ListLayout = defineAsyncComponent(() => import('../layouts/ListLayout.vue'));
const TableLayout = defineAsyncComponent(() => import('../layouts/TableLayout.vue'));
const CardLayout = defineAsyncComponent(() => import('../layouts/CardLayout.vue'));

const layout = ref(ListLayout);

const handleLayoutChange = (newLayout: any) => {
  layout.value = newLayout;
};
const search = ref('');

const handleSearch = () => {
  filteredUsers.value = users.value.filter(user => 
    user.name.toLowerCase().includes(search.value.toLowerCase())
  );
  if (filteredUsers.value.length === 0) {
    filteredUsers.value = users.value; // Reset if no matches found
  }
}

const users = ref([
  { name: 'Alice', age: 30, position: 'Developer' },
  { name: 'Bob', age: 25, position: 'Designer' },
  { name: 'Charlie', age: 35, position: 'Manager' }
]);

const filteredUsers = ref([]);

filteredUsers.value = users.value; // Initialize with all users
</script>
