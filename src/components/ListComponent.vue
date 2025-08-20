<template>
    <div id="cards">
        <div class="card" v-for="pokemon in pokemons" :key=pokemon.name>
            <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(pokemon)}.png`" :alt="pokemon.name">
            <h1>{{pokemon.name}}</h1>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ListComponent',

  props: {
    pokemons: {
      type: Array,
      required: true
    }
  },

  methods: {
    getId(pokemon){
        return pokemon.url.split("/")[6];
    }
  }
};
</script>
 
<style scoped lang="scss">
@font-face {
    font-family: 'Goldman';
    src: url('@/assets/Goldman/Goldman-Bold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

#cards {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    gap: 16px 8px; /* gap: linha coluna */
    justify-content: center;
    margin-top: 42px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(3, 100px);
        margin-top: 24.5px;
    }
}

.card {
    background-color: #D9D9D9;
    max-width: 200px;
    max-height: 200px;
    border-radius: 5px;
    padding: 0 25px 21px 25px;

    @media screen and (max-width: 1000px) {
      max-width: 100px;
      max-height: 100px;
      padding: 0 12px 9px 12px;
    }
}

.card img {
    display: block;
    max-width: 150px;
    max-height: 150px;
    margin-top: 0;

    @media screen and (max-width: 1000px){
        max-width: 75px;
        max-height: 75px;
    }
}

.card h1 {
    font-family: Goldman;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;

    @media screen and (max-width: 1000px){
        font-size: 10px; 
    }
}
</style>
 