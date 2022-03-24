import { shallowMount } from '@vue/test-utils';
import PokemonImage from '@/components/PokemonImage'

describe('PokemonPicture component', () => {

    test('should match with the snapshot', () => {
        
        const wrapper = shallowMount(PokemonImage, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    })

    test('should show hide image and the 100 pokemon', () => {

        const wrapper = shallowMount(PokemonImage, {
            props: {
                pokemonId: 100,
                showPokemon:false
            }
        });

        const [img1, img2] = wrapper.findAll('img');
        
        expect(img1.exists()).toBe(true);
        expect(img2).toBeFalsy;
        expect(img1.classes('hidden-pokemon')).toBeTruthy;

        expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
    })

    test('should show hide image if showPokemon is true', () => {
        
        const wrapper = shallowMount(PokemonImage, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        });

        const img1 = wrapper.find('img');
        
        expect(img1.exists()).toBe(true);
        expect(img1.classes('hidden-pokemon')).toBeTruthy;
        expect(img1.classes('fade-in')).toBeTruthy;
    })
});