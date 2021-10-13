<template>
    <div class="wrapper">
        <div class="nav-container">
            <div class="logo">logo</div>
            <nav v-if="this.showBurgerMenu">
                <nuxt-link to="#">About</nuxt-link>
                <nuxt-link to="#">Shop</nuxt-link>
                <nuxt-link to="#"><font-awesome-icon :icon="['fas', 'user-alt']"/></nuxt-link>
                <nuxt-link to="#"><font-awesome-icon :icon="['fas', 'shopping-cart']"/></nuxt-link>
            </nav>
            <div v-else class="burgerMenu">
                <font-awesome-icon :icon="['fas', 'align-justify']"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showBurgerMenu: false,
                windowWidth: window.innerWidth,
            }
        },
        created() {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },

        methods: {
            handleResize() {
                window.innerWidth < 800 ? this.showBurgerMenu = false : this.showBurgerMenu = true;
                this.windowWidth = window.innerWidth;
                
            }
        }

    }
</script>

<style lang="scss" scoped>
    .wrapper {
        --lightblack: rgb(32, 33, 38);
        width: 100%;
        height: 10vh;
        background: var(--lightblack);
        color: white;
    }

    .nav-container {
        
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

   .logo {
       margin-left: 5rem;
   }

   .burgerMenu {
       margin-right: 3rem;
   }

    nav {
       margin-right: 3rem;
       text-decoration: none;       
    }

    a {
        color: white;
        padding: 2rem 2rem 2rem 2rem ; // top right bottom left
    }

    a:hover {
        text-decoration: none;
    }
</style>