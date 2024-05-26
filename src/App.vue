<script setup lang="ts">
    import PokemonListing from './components/PokemonListing.vue';
    import PokemonCard from './components/PokemonCard.vue';
    import { Pokemon } from '@/types/pokemon';
    import {ref} from 'vue'

    const pokemonArray = ref([
        new Pokemon(1, "asd", "asasd", "asdasd")
    ])
</script>

<template>
    <PokemonListing :pokemon-array="pokemonArray"/>
</template>

<style scoped>
</style>
