<script setup lang="ts">
    import { Pokemon } from '@/types/pokemon';
    import PokemonCard from './PokemonCard.vue'
    const props = defineProps<{
        pokemonArray: Pokemon[]
    }>()
</script>

<template>
    <div class="pokemon-listing">
        <PokemonCard v-for="pokemon in props.pokemonArray" 
        :pokemon-index="pokemon.pokemonIndex" 
        :pokemon-img="pokemon.pokemonImg"
        :pokemon-name="pokemon.pokemonName"
        :pokemon-type="pokemon.pokemonType" />
    </div>
</template>

<style scoped>
</style>