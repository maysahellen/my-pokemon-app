<template>
    <div>
        <img src="../assets/image 1.svg" alt="title">
        <!-- <ListComponent :pokemons="pokemons" /> -->
         <LoadingComponent />
    </div>
</template>

<script>
import { callApi } from '@/gateways/gateway';
import LoadingComponent from '@/components/LoadingComponent.vue';
//import ListComponent from '@/components/ListComponent.vue';

export default {
    name: 'PokemonView',

    components: {
        LoadingComponent
        //ListComponent
    },

    data: () => ({
        pokemons: []
    }),

    async mounted(){
        this.pokemons = await callApi();
    } 
}
</script>

<style>
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