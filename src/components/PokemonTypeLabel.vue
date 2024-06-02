<script setup lang="ts">

    import { PokemonTypeColors } from '@/types/colors';
    
    const props = defineProps<{
        type: string
    }>()

</script>

<template>
    <span class="pokemon-type" v-bind:style="{ backgroundColor: PokemonTypeColors[props.type] }" ><p>{{ props.type }}</p></span>
</template>

<style scoped>
    .pokemon-type{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 35px;
        border-radius: 10px;
        font-style: bold;
        color: white;
        margin-right: 10px;
    }
    .pokemon-type:hover {
        cursor: pointer;
    }
</style>