<template>
  <h1>Adivina el Pokémon</h1>
    <pokemon-image :pokemonId="4" :showPokemon="true"/>
    <pokemon-type />
    
</template>

<script>


import PokemonImage from '@/components/PokemonImage.vue'
import PokemonType from '@/components/PokemonType.vue'

import getPokemonType from '@/helpers/getPokemonType'

export default {
    components: {
        PokemonImage,
        PokemonType,
        getPokemonType,
    }

}
</script>

<style>

</style>