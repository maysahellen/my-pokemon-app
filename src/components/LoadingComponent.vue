<template>
    <div class="loading" v-if="isLoading">
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
    data: () => ({
        loadingImage: require('../assets/loading_gray.gif')
    })
}
</script>
 
<style scoped lang="scss">
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
 