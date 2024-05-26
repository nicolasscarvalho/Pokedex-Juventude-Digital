<script setup lang="ts">

    const props = defineProps<{
        pokemonIndex: number,
        pokemonImg: string,
        pokemonName: string,
        pokemonType: string
    }>()

    const title = `${props.pokemonIndex}. ${props.pokemonName}`

</script>

<template>
    <div class="pokemon-card">
        <img src="#" placeholder="Imagem do Pokemon">
        <section>
            <h2>{{ title }}</h2>
            <p>{{ props.pokemonType }}</p>
        </section>
    </div>

</template>

<style scoped>
    .pokemon-card {
        background-color: white;
        color: #333333;
        border-radius: 20px;
        padding: 25px;
        width: 406px;
        height: 150px;
        box-shadow: 0px 8px 22px 6px #18274B1F;
        transition: 250ms;
        display: flex;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
    }


    .pokemon-card:hover {
        background-color: #333333;
        color: white
    }

    .pokemon-card img {
        width: 96px;
        height: 96px;
    }

</style>