<script setup lang="ts">
    import ProgressBar from './ProgressBar.vue';
    import PokemonTypeLabel from './PokemonTypeLabel.vue';

    const props = defineProps<{
        typeList: string[],
        height: number,
        weight: number,
        hpValue: number,
        attackValue: number,
        defenseValue: number,
        speedValue: number
    }>()
</script>


<template>

    <div class="pokemon-data">
        <section class="pokemon-data-section type">
            <h2>Tipo</h2>
            <PokemonTypeLabel v-for="typeName in typeList" :type="typeName" />
        </section>

        <section class="pokemon-data-section height-weight">
            <h2>Altura</h2> <span>{{height}}m</span>
            <h2>Peso</h2> <span>{{weight}}Kg</span>
        </section>

        <section class="pokemon-data-section statistics">
            <h2>Estatísticas</h2>
            <ProgressBar title="HP" :percentage="hpValue" />
            <ProgressBar title="Attack" :percentage="attackValue" />
            <ProgressBar title="Defense" :percentage="defenseValue" />
            <ProgressBar title="Speed" :percentage="speedValue" />
        </section>
    </div>

</template>

<style scoped>

    .pokemon-data .type, .height-weight{
        height: max-content;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .pokemon-data-section {
        margin-bottom: 30px;
    }

    .type h2 {
        margin-right: 30px;
    }

    .type {
        width: max-content;
    }

    .height-weight {
        width: 300px;
    }

    .statistics{
        width: 300px;
    }

    .statistics .progress-bar{
        position: relative;
        right: 0px;
    }

    .statistics h2{
        margin-bottom: 15px;
    }



</style>