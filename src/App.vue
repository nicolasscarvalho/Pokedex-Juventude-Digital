<script setup lang="ts">

    import {ref, onBeforeMount} from 'vue'
    import SectionSelector from './components/SectionSelector.vue';
    import {usePokemonData} from '@/stores/pokemonStore'

    onBeforeMount(() => {
        const pokemonData = usePokemonData()
        pokemonData.updatePokemonData()
    })

</script>

<template>
    <SectionSelector />
    <router-view/>
</template>

<style scoped>
</style>
