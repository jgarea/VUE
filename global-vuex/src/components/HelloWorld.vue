<template>
<h3>{{counter}}</h3>
<h3>Contador x2 = {{times2}}</h3>
<button @click="increment">Increment</button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'HelloWorld',
  setup() {
      const store = useStore();
      const counter = computed(() => store.state.counter);
      const times2 = computed(() => store.getters.times2);
      const increment = () => {
        store.commit('setCounter', counter.value + 1);
      };
      return {
        counter,
        increment,
        times2
      };
  }
  
});
</script>

<style scoped>

</style>