<script setup lang="ts">

    const props = defineProps<{
        pokemonIndex: number,
        pokemonImg: string,
        pokemonName: string,
        pokemonType: string[]
    }>()

    const title = `${props.pokemonIndex + 1}. ${props.pokemonName}`
    const types = props.pokemonType.join(' / ')
    const detailRoute = `/pokemon-detail/${props.pokemonName}`

</script>


<template>

    <RouterLink :to="{name: 'PokemonDetail', params: {pokemonName: props.pokemonName}}" class="router-link">
        <div class="pokemon-card">
            <img :src="props.pokemonImg" placeholder="Imagem do Pokemon">
            <section>
                <h2>{{ title }}</h2>
                <p>{{ types }}</p>
            </section>
        </div>
    </RouterLink>

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
        display: flex;
        align-items: center;
        justify-content: space-around;
        cursor: pointer;
    }

    .router-link{
        text-decoration: none;
    }

    .pokemon-card:hover {
        background-color: #333333;
        color: white
    }

    .pokemon-card img {
        width: 96px;
        height: 96px;
    }

    .pokemon-card section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>