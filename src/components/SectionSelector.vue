<script setup lang="ts">
</script>

<template>

    <nav class='section-selection'>
        <section>
            <RouterLink class="router-link" to="/pokedex"><h1>Pokedex</h1></RouterLink>
            <RouterLink class="router-link" to="/party"><h1>Party</h1></RouterLink>
            <RouterLink class="router-link" to="/trainer"><h1>Trainer Card</h1></RouterLink>
        </section>
    </nav>

</template>

<style scoped>

    .section-selection, .section-selection section{
        display: flex;
        align-items: center;
        background-color: #333333;
    }

    .section-selection {
        justify-content: center;
        width: 100%;
        height: 80px;
        box-shadow: 0px 0px 60px 28px #18274B24;
    }

    .section-selection section {
        justify-content: space-between;
        width: 40%;
    }

    .router-link {
        text-decoration: none;
        color: whitesmoke;
    }

    .router-link:hover {
        text-decoration: underline 3px whitesmoke;
    }
    
</style>