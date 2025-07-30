import axios from 'axios';
import { callApi } from '../../../gateways/gateway';

jest.mock('axios');

describe("when callApi is called", () => {

    describe('and the API is accessed', () => {

        let mockPokemons;
        let pokemons;
        
        beforeEach( async () => {

            mockPokemons = Array.from({ length: 30 }, (_, index) => ({ 
                name: 'pokemon' + (index + 1),
                url: 'https://pokeapi.co/api/v2/pokemon/' + (index + 1),
            }));

            axios.get.mockResolvedValue({ data: { results: mockPokemons } }); 

            pokemons = await callApi(); 
        });

        it('then HTTPClient.get is called with correct params', async () => {
            expect(axios.get).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0"); 
        });

        it('then return pokemon data', async () => {

            const expectedPokemons = Array.from({ length: 30 }, (_, index) => ({ 
                name: 'pokemon' + (index + 1),
                url: 'https://pokeapi.co/api/v2/pokemon/' + (index + 1),
            }));

            expect(pokemons).toEqual(expectedPokemons);
        });
    })
});
