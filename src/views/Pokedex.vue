<script setup lang="ts">

    import PokemonListing from '@/components/PokemonListing.vue';
    import {usePokemonData} from '@/stores/pokemonStore'
    
    const pokemonData = usePokemonData()

</script>


<template>

    <PokemonListing :pokemon-array="pokemonData.pokemonData" class="pokedex-list"/>

</template>


<style scoped>

    .pokedex-list{
        margin-top: 120px;
    }

</style>