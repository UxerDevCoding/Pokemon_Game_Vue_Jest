import { shallowMount } from "@vue/test-utils";
import PokemonType from "@/components/PokemonType";
import { pokemons } from "../components/mocks/pokemonsMock";

describe('PokemonsType Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonType, {
            props: {
                pokemons
            }
        })
    });

    test('should match with the snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()

    });

    test('should show 4 pokemon options correctly', () => {

        const pokeList = wrapper.findAll('li');

        expect(pokeList.length).toBe(4);

        expect(pokeList[0].text()).toBe('bulbasaur')
        expect(pokeList[1].text()).toBe('ivysaur')
        expect(pokeList[2].text()).toBe('venusaur')
        expect(pokeList[3].text()).toBe('charmander')
    
    });

    test('should emit selection with its parameters on click', () => {

        const [li1, li2, li3, li4] = wrapper.findAll('li');

        li1.trigger('click');
        li2.trigger('click');
        li3.trigger('click');
        li4.trigger('click');

        console.log(wrapper.emitted('selection'));

        expect(wrapper.emitted('selection').length).toBe(4)
        expect(wrapper.emitted('selection')[0]).toEqual([1])
        expect(wrapper.emitted('selection')[1]).toEqual([2])
        expect(wrapper.emitted('selection')[2]).toEqual([3])
        expect(wrapper.emitted('selection')[3]).toEqual([4])

    });
});