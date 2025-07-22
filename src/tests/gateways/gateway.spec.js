import axios from 'axios';
import { chamarApi } from '../gateways/gateway.js';

jest.mock('axios');

describe("when callApi is called", () => {

    describe('and the api is accessed', () => {

        beforeEach(async () => {

        })

        it('then return pokemon data', async () => {

            // array com 30 valores e urls ficticios de pokemons
            const mockPokemons = Array.from({length: 30}, (_, i) => ({
                name: 'pokemon' + (index + 1),
                url: 'https://pokeapi.co/api/v2/pokemon/' + (index + 1), 
            }));

            // passando a array de pokemons como mock no retorno total da api
            axios.getmockResolvedValue( // getmock.Resolved quando da certo 
                { data: {results: mockPokemons}}
            )

            // chamando a api que deve retornar o que foi mockado
            const pokemons = await chamarApi();
            
            // verificando se a chamada da api e o mock que criamos sao iguais
            expect(pokemons).toEqual(mockPokemons);

        })
    })

    describe('and the api is not accessed', () => {

        beforeEach(async () => {

        })

        it('then it should show error message', async () => {

            // coloco o erro em uma variavel
            const mockErro = new Error('Ocorreu um erro durante a chamada da API');

            // passando o erro como retorno da api
            axios.getmockRejectedValue(mockErro); // getmockRejected quancdo da erro

            // chamando a api que deve retornar o que foi mockado
            const pokemons = await chamarApi();

            
            expect(pokemons).toEqual(mockErro);
        })
    })
})