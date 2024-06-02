<script setup lang="ts">

</script>


<template>

    <div class="trainer-header">
        <img src="https://media.licdn.com/dms/image/D4D03AQF_9afP1U6OrQ/profile-displayphoto-shrink_200_200/0/1712795749845?e=1723075200&v=beta&t=0hybaouvAff9veES9HJBvnPPWLhlVqf_yG9ly23WiEY">
        <a class="linkedin-link" href="https://www.linkedin.com/in/n%C3%ADcolas-carvalho-968113263/" target="_blank">
            <span>Linkedin</span>
        </a>
        <a class="github-link" href="https://github.com/nicolasscarvalho" target="_blank">
            <span>Github</span>
        </a>
    </div>

    <div class="trainer-description">
        <div class="paragraph">
            <h2>🙋Prazer, Nícolas Carvalho!! </h2>
            <p>Atualmente, sou formado no curso técnico integrado em informática pelo IFCE campus Fortaleza e 
                possuo foco em programação full stack, metodologias ágeis e emprededorismo. Além disso,
                faço parte do projeto de residência tecnológica do IREDE, curso introdutório de VueJS da Juventude Digital
                da Prefeitura de Fortaleza e sou vestibulando de ciência da computação.</p>
        </div>

        <div class="paragraph">
            <h2>🔎Sobre meus interesses </h2>
            <p>Possuo um vasto leque de apreços envolvendo desenvolvimento 
                mobile, web, desktop, automações, ciência de dados, inteligência artifical e design </p>
        </div>

        <div class="paragraph">
            <h2>👀Ficou curioso? Confira minhas redes sociais! </h2>
              
        </div>
    </div>

</template>


<style>

    .trainer-header {
        width: 500px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }

    .trainer-header a {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        cursor: pointer;
        width: 100px;
        height: 35px;
        border-radius: 25px;
        color: whitesmoke;
    }

    .trainer-header img {
        border-radius: 50%;
        box-shadow: 0px 0px 5px 5px #33333375;
    }

    .linkedin-link {
        background-color: #0A66C2;
    }
    .github-link {
        background-color: #000000;
    }

    .trainer-description {
        width: 500px;
        display: flex;
        flex-direction: column;
        gap: 25px;
        text-align: justify;
    }
    
</style>