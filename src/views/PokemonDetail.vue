<script setup lang="ts">

    import PokemonData from '@/components/PokemonData.vue'
    import { useActualPokemon } from "@/stores/pokemonStore"
    import PokemonHeader from "@/components/PokemonHeader.vue";
    import { useRoute } from "vue-router";

    const route = useRoute()
    const actualPokemon = useActualPokemon()
    const pokemonName = route.params.pokemonName as string

    actualPokemon.updateActualPokemon(pokemonName)

</script>


<template>

    <PokemonHeader 
    v-if="actualPokemon.actualPokemon"
    :pokemonName="actualPokemon.actualPokemon.pokemonName"
    :pokemonImg="actualPokemon.actualPokemon.pokemonImg"
    :pokemonMainType="actualPokemon.actualPokemon.pokemonType[0]"
    />

    <PokemonData 
    v-if="actualPokemon.actualPokemon"
    :typeList="actualPokemon.actualPokemon.pokemonType"
    :height="actualPokemon.actualPokemon.pokemonHeight"
    :weight="actualPokemon.actualPokemon.pokemonWeight"
    :hpValue="actualPokemon.actualPokemon.pokemonHP"
    :attackValue="actualPokemon.actualPokemon.pokemonAttack"
    :defenseValue="actualPokemon.actualPokemon.pokemonDefense"
    :speedValue="actualPokemon.actualPokemon.pokemonSpeed"/>

</template>