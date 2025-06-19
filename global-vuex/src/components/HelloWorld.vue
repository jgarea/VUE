<template>
<h3>{{counter}}</h3>
<h3>Contador x2 = {{times2}}</h3>
<button @click="increment">Increment</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HelloWorld',
  computed:{
    counter(){
      //TODO: Read from store
      return this.$store.state.counter;
    },
    times2(){
      //TODO: Read from store
      return this.$store.getters.times2;
    }
  },
  methods:{
    //TODO: Call setCounter mutation from store
    increment(){
      this.$store.commit('setCounter', this.counter + 1);
    }

  }
});
</script>

<style scoped>

</style>