<template>
    <div class="wrapper">
        <nuxt-img :src="require('../assets/roller.png')" />
    </div>
</template>

<script>
    export default {
        /* clip-path: polygon(0px 0px, 100% 0px, 100% 80vh, 0px 100%); */
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        --lightblack: rgb(32, 33, 38);
        height: 40rem;
        width: 100%;
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 72%, 0% 100%);
        clip-path: polygon(0 0, 100% 0, 100% 72%, 0% 100%);
        background: var(--lightblack);
    }
</style>

