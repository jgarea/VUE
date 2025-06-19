<template>
<h3>{{counter}}</h3>
<h3>Contador x2 = {{times2}}</h3>
<button @click="increment">Increment</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState,mapMutations, mapGetters } from 'vuex';
export default defineComponent({
  name: 'HelloWorld',
  computed:{
    ...mapState(['counter']),
    ...mapGetters(['times2']),
  },
  methods:{
    ...mapMutations(['setCounter']),
    increment(){
      this.setCounter(this.counter + 1);
    }

  }
});
</script>

<style scoped>

</style>