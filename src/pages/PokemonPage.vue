<template>
    <h1 v-if="!pokemon"> Cargando ...</h1>
    <div v-else>
        <h1>¿Qué Pokémon es este?</h1>
        <pokemon-image 
            :pokemonId="pokemon.id" 
            :showPokemon="showPokemon"/>

        <pokemon-type 
            :pokemons="pokemonArr"
            @selection="checkAnswer" />
    </div>

    <div v-if="showAnswer">
        <h2>{{message}}</h2>
        <button @click="newGame">
            Nuevo Juego
        </button>
   </div>
</template>

<script>


import PokemonImage from '@/components/PokemonImage.vue'
import PokemonType from '@/components/PokemonType.vue'

import getPokemonType from '@/helpers/getPokemonType'

export default {
    components: {
        PokemonImage,
        PokemonType,
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: '',

        }
    },
    methods: {
        async mixPokemonArr() {
            this.pokemonArr = await getPokemonType()

            const rndInt = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArr[rndInt]
        },
        checkAnswer(pokemonId) {
             this.showPokemon = true
            this.showAnswer = true;

            if (pokemonId === this.pokemon.id) {
                this.message = `Pokémon correcto, es "${this.pokemon.name}"`
            } else {
                this.message = `Pokémon incorrecto, era "${this.pokemon.name}"`  
            }

        },
    newGame() {

        this.showPokemon = false
        this.showAnswer = false
        this.pokemonArr = []
        this.pokemon = null
        this.mixPokemonArr()     
        }
    },
    mounted() {
        this.mixPokemonArr()

    }

}
</script>

<style scoped>

button {
    background-color: #77e9c3;
    border: none;
    padding: 6px 8px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
}

</style>