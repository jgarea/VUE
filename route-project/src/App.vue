<template>
<router-view/>
</template>

<script lang="ts" setup>



</script>

<style scoped>

</style>

<!-- <template>
<input type="text" v-model="note" >
<button @click="sendToServer">Enviar nota al servidor</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

let note = ref('');
const sendToServer = async () => {
  const rawResponse = await fetch('https://xxxxxxxxxxxx',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer xxxxxxxxxxxxx'
    },
    body: JSON.stringify({ note: note.value })
  })

  const response = await rawResponse.json();
}
</script>

<style scoped>

</style> -->