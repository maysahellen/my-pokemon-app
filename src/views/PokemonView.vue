<template>
    <div>
        <img :src="titleImage" alt="title">
        <ErrorComponent v-if="isError" :isError="true"/>
        <ListComponent v-if="pokemons && !isLoading && !isError" :pokemons="pokemons"/>
        <LoadingComponent v-if="isLoading && !isError" :isLoading="isLoading"/>
    </div>
</template>

<script>
import { callApi } from '../gateways/gateway';
import LoadingComponent from '../components/LoadingComponent.vue';
import ListComponent from '../components/ListComponent.vue';
import ErrorComponent from '../components/ErrorComponent.vue';

export default {
    name: 'PokemonView',

    components: {
        LoadingComponent,
        ListComponent,
        ErrorComponent
    },

    data: () => ({
        pokemons: [],
        titleImage: require('../assets/image 1.svg'),
        isLoading: false,
        isError: false
    }),

    methods: {
        async fetchPokemons() {
            this.isLoading = true;
            this.isError = false;
            try {
                this.pokemons = await callApi();
            }
            catch (error) {
                this.isError = true;
            }
            finally {
                this.isLoading = false;
            }
        }
    },

    mounted() {
        this.fetchPokemons();
    }
}
</script>

<style>
body {
    background-color: #F13F07;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    height: 100vh;
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