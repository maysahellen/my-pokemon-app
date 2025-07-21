import axios from 'axios';

export async function chamarApi(){
    try{
        const resposta = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0");
        const pokemon = resposta.data.results;
        return pokemon;
    }
    catch(erro){
        console.error("Ocorreu um erro durante a chamada da API");
    }
}