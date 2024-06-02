<script setup lang="ts">

    import PokemonListing from '@/components/PokemonListing.vue';
    import { usePokedex } from '@/stores/pokemonStore';

    const pokedex = usePokedex()

</script>


<template>

    <PokemonListing :pokemon-array="pokedex.getPokedex()" class="pokedex-list"/>

</template>


<style scoped>

    .pokedex-list{
        margin-top: 120px;
    }
    
</style>