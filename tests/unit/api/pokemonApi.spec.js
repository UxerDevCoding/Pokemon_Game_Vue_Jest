import pokemonApi from '@/api/pokemonApi';

describe('pokemonApi', () => {

    test('URL axios run correctly in pokemon API', () => {

        expect(pokemonApi.defaults.baseURL)
            .toBe('https://pokeapi.co/api/v2/pokemon')
    })
})