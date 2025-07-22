import axios from 'axios';
import { chamarApi } from '../../gateways/gateway';

jest.mock('axios');

describe("when callApi is called", () => {
    describe('and the API is accessed', () => {
        it('then return pokemon data', async () => {
            const mockPokemons = Array.from({ length: 30 }, (_, index) => ({
                name: 'pokemon' + (index + 1),
                url: 'https://pokeapi.co/api/v2/pokemon/' + (index + 1),
            }));

            // Simula uma resposta bem-sucedida da API
            axios.get.mockResolvedValue({ data: { results: mockPokemons } });

            const pokemons = await chamarApi();
            expect(pokemons).toEqual(mockPokemons);
            expect(axios.get).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0");
        });
    });

    describe('and the API is not accessed', () => {
        it('then it should show error message', async () => {
            const mockErro = new Error('Ocorreu um erro durante a chamada da API');
    
            // Simula uma resposta com erro da API
            axios.get.mockRejectedValue(mockErro);
    
            // Teste para rejeitar promessa e lançar erro
            await expect(chamarApi()).rejects.toThrow('Ocorreu um erro durante a chamada da API');
        });
    });
});