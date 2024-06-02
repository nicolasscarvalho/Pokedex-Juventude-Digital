<script setup lang="ts">

    import {ref, onBeforeMount} from 'vue'

    const props = defineProps<{
        title: string,
        percentage: number
    }>()

    const percentageString = ref(String(props.percentage))
    
</script>


<template>  
    <div class="progress-bar">
        <label><p>{{props.title}}: {{props.percentage}}%</p></label>
        <progress :value="percentageString" max="100" /> 
    </div>
</template>


<style scoped>

    .progress-bar{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .progress-bar p{
        margin-right: 20px;
    }

    .progress-bar progress {
        height: 20px;
        -webkit-appearance: none;
    }

    .progress-bar progress::-webkit-progress-bar {
        background-color: white;
        border-radius: 20px;
        box-shadow: 0px 1px 4px 0px #333333;
    }

    .progress-bar progress::-webkit-progress-value {
        background-color: #333333;
        border-radius: 20px;
    }
</style>