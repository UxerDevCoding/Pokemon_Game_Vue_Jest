import getPokemonType, { getPokemon, getPokemonNames } from '@/helpers/getPokemonType';

describe('getPokemonType felpers', () => {

    test('should return an array of 650 numbers', () => {

        const pokemons = getPokemon()

        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[649]).toBe(650)
    })

    test('should return an array with 4 pokemon names', async () =>  {

        const pokemons = await getPokemonNames([1,2,3,4])
       
        expect(pokemons).toStrictEqual([
            { 
                name: 'bulbasaur', 
                id: 1 
            },
            { 
                name: 'ivysaur', 
                id: 2 
            },
            { 
                name: 'venusaur', 
                id: 3 
            },
            { 
                name: 'charmander',
                 id: 4 
            }
          ]
        )
    })

    test('should return a mixed array of pokemons', async () => {

        const pokemons = await getPokemonType()

        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
                { 
                    name: expect.any(String), 
                    id: expect.any(Number)
                },
                { 
                    name: expect.any(String), 
                    id: expect.any(Number)
                },
                { 
                    name: expect.any(String), 
                    id: expect.any(Number)
                },
                {
                    name: expect.any(String), 
                    id: expect.any(Number)
                }
            ]
        )
    })
})