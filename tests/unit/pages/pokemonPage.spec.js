import { mount, shallowMount} from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage';
import {pokemons} from '../components/mocks/pokemonsMock'


describe('PokemonPage Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage);
    })
    

    test('should match with the snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()

    });

    test('should call mixPokemonArray in Mounted', () => {
        
        const mixPokemonArrSpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArr');
        shallowMount(PokemonPage)
        expect(mixPokemonArrSpy).toHaveBeenCalled();

    })
    
  
    test('checkanswer should return the correct answer ', async () => {
      
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

    await wrapper.vm.checkAnswer(5)

    expect( wrapper.find('h2').exists() ).toBeTruthy()
    expect( wrapper.vm.showPokemon ).toBe(true)
    expect( wrapper.find('h2').text() ).toBe(`Pokémon incorrecto, era "${ pokemons[0].name }"`)

   
})

    


})