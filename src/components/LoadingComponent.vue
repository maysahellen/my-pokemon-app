<template>
    <div class="loading">
        <img :src="loadingImage" alt="loading">
    </div>
</template>
 
<script>
export default {
    name: 'LoadingComponent',
    props: {
        isLoading: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            loadingImage: require('../assets/loading_gray.gif')
        }
    }
}
</script>
 
<style>
body {
    background-color: #F13F07;
    /* tira o espacamento padrao do site */
    padding: 0;
    margin: 0;
    /* serve pro tamanho inicial do site ser o tamanho da tela */
    height: 100vh;
}
 
.loading {
    /* centraliza a div */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* centraliza o que tem dentro da div */
    display: flex;
    justify-content: center;
    align-items: center;
}
 
img {
    max-width: 200px;
    max-height: 200px;

    @media screen and (max-width: 1023px) {
        max-width: 100px;
        max-height: 100px;
    }
}
</style>
 