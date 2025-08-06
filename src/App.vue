<template>
  <div id="app">
    <img src="./assets/image 1.svg" alt="title">
    <ListComponent/>
    <router-view></router-view>
    <!-- <div v-for="pokemon in pokemons" :key="pokemon.name">
      {{ pokemon.name }}
    </div>  -->
  </div>
</template>

<script>
import { callApi } from './gateways/gateway';
//import LoadingComponent from './components/LoadingComponent.vue';
import ListComponent from './components/ListComponent.vue';

export default {
  name: 'App',

  components: {
    //LoadingComponent
    ListComponent
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
}

img {
  display: block;
  margin-left: auto; 
  margin-right: auto;
  margin-top: 21px;
  max-width: 400px;
  height: 147px;

  @media screen and (max-width: 1000px) {
      display: block;
      margin-left: auto; 
      margin-right: auto;
      margin-top: 27px;
      max-width: 200px;
      height: 73.5px;
  }
}


</style>