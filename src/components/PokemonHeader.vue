<script setup lang="ts">

    import { usePokedex } from '@/stores/pokemonStore';
    import { PokemonTypeColors } from '@/types/colors';

    const pokedex = usePokedex()

    const props = defineProps<{
        pokemonImg: string,
        pokemonName: string,
        pokemonMainType: string
    }>()

</script>

<template>

    <div class="pokemon-header" :style="{backgroundColor: PokemonTypeColors[pokemonMainType]}">
        <img :src="pokemonImg" placeholder="Imagem do Pokemon"/>
        <section>
            <h1>{{props.pokemonName}}</h1>
            <button v-on:click="pokedex.addPokemon()">Adicionar ao time</button>
            <button v-if="Object.keys(pokedex.pokedex).map(key => String(key)).includes(pokemonName)" v-on:click="pokedex.removePokemon()">Remover do time</button>
        </section>
    </div>

</template>

<style scoped>

    .pokemon-header{
        background-color: #77C850;
        color: white;
        width: 100%;
        height: max-content;
        display: flex;
        align-items: center;
        padding: 40px;
        margin-bottom: 70px;
    }

    .pokemon-header h1 {
        font-size: 64px;
    }

    .pokemon-header img {
        width: 275px;
        height: 258px;
        margin-right: 35px;
    }

    .pokemon-header section button {
        margin-right: 20px;
    }
    
</style>
