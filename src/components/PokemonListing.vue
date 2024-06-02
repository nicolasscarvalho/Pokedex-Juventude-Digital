<script setup lang="ts">

    import { Pokemon } from '@/types/pokemon';
    import PokemonCard from './PokemonCard.vue'
    
    const props = defineProps<{
        pokemonArray: Pokemon[]
    }>()

</script>


<template>

    <div class="pokemon-listing">
        <PokemonCard v-if="props.pokemonArray" v-for="(pokemon,index) in props.pokemonArray" 
        :pokemon-index="index" 
        :pokemon-img="pokemon.pokemonImg"
        :pokemon-name="pokemon.pokemonName"
        :pokemon-type="pokemon.pokemonType" />
        <div v-if="props.pokemonArray.length == 0" class="empty-message-background">
            <div class="empty-message-content">
                <h2>Sem pokemons por aqui...</h2>
            </div>
        </div>
    </div>

</template>

<style scoped>
    .pokemon-listing {
        width: 100%;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-gap: 50px;
        justify-content: center;
        align-content: space-around;
        gap: 20px;
        flex-wrap: wrap;
    }

    .empty-message-background, .empty-message-content {
        width: 600px;
        height: 400px;
        border-radius: 20px;
    }

    .empty-message-background {
        background-color: #333333;
    }

    .empty-message-content {
        background-color: orange;
        color: whitesmoke;
        top: 20px;
        left: 20px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .empty-message-content:hover{
        top: 30px;
        left: 30px;
    }

</style>