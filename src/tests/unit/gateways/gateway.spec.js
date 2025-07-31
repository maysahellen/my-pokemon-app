import axios from 'axios';
import { callApi } from '../../../gateways/gateway';

jest.mock('axios');

describe("Given callApi", () => {

    describe('When the API is accessed', () => {

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

        it('Then HTTPClient.get is called with correct params', async () => {
            expect(axios.get).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0"); 
        });

        it('Then return pokemon data', async () => {
            expect(pokemons).toEqual(mockPokemons);
        });
    });
});
