import axios from 'axios';

const API = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0";

export async function callApi() {
        const response = await axios.get(API);
        const pokemons = response.data.results;
        return pokemons;
}