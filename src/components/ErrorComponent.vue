<template>
    <div class="error">
        <p>{{ errorMessage }}</p>
        <div class="tryAgainButton">
            <button>{{ buttonText }}</button>
        </div>
    </div>
</template>
 
<script>
export default {
    name: 'ErrorComponent',
    props: {
        isError: {
            type: Boolean,
            default: false
        },
    },
    data: () => ({
        errorMessage: 'Não foi possível carregar os pokemóns. Tente novamente',
        buttonText: 'Tentar de novo'
    }),
};
</script>

<style scoped lang="scss">
@font-face {
    font-family: 'Goldman';
    src: url('@/assets/Goldman/Goldman-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

.error {
    margin: 198px auto 0;
    max-height: 58px;
    max-width: 616px;

    @media screen and (max-width: 1000px) {
        margin: 158px auto 0;
        height: 136px;
        width: 307px;
        padding: 16px 8px 16px 8px;
    }
}

.error p {
    font-family: Goldman;
    color: #FFFFFF;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
}

.tryAgainButton {
    margin: 22px auto 0;

    @media screen and (max-width: 1000px) {
        margin: 41px auto 0;
    } 
}

.tryAgainButton button {
    background-color: #D9D9D9;
    max-width: 616px;
    max-height: 53px;
    padding: 16px 8px 16px 8px;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    font-family: Goldman;
    color: #000000;
    font-size: 24px;
    letter-spacing: 0%;
    line-height: 100%; 
    text-align: center;
    width: 100%;

    @media screen and (max-width: 1000px) {
        width: 316px;
    }
}

</style>
 