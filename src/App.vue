<template>
  <div id="app">
      <router-view></router-view>
      <div v-for="pokemon in pokemons" :key="pokemon.name">
        {{ pokemon.name }}
      </div>
  </div>
</template>

<script>
import { callApi } from './gateways/gateway';

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    pokemons: []
  }),

  async mounted(){
    this.pokemons = await callApi();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
