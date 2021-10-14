<template>
    <div class="wrapper">
        <div class="banner" />
        <article>
            <h3>Lorem ipsum dolor sit amet, consectetur</h3>
            <p>Lorem ipsum dolor sit amet, consectet</p>
        </article>

        <div class="product-wrapper">
            <div class="product-container" v-for="product in products" :key="product.productId">
                <b-img class="product-image" src="@/assets/nature.jpg" fluid alt="Responsive image"></b-img>
                <!--<b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image"></b-img>  -->
                <h5>{{product.productName}}</h5>
                <p>{{product.productDescription}}</p>
                <p>${{product.productPrice}}</p>
            </div>
        </div>

        <div class="special-wrapper">
            <div>photo goes here</div>
            <div>text here</div>
        </div>
    </div>
</template>

<script>
    export default {
        /* clip-path: polygon(0px 0px, 100% 0px, 100% 80vh, 0px 100%); */
        data() {
            return {
                products: [
                    {
                        productId: 123,
                        productImage: '@/assets/nature.jpg',
                        productName: 'Headphone',
                        productDescription: 'Dope ass Headphone',
                        productPrice: 130,
                    },
                    {
                        productId: 234,
                        productImage: '../assets/nature.jpg',
                        productName: 'Keyboard',
                        productDescription: 'Dope ass Keyboard',
                        productPrice: 340,
                    },
                    {
                        productId: 345,
                        productImage: '../assets/nature.jpg',
                        productName: 'Mouse',
                        productDescription: 'Dope ass Mouse',
                        productPrice: 540,
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .banner {
        --lightblack: rgb(32, 33, 38);
        height: 40rem;
        width: 100vw;
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 72%, 0% 100%);
        clip-path: polygon(0 0, 100% 0, 100% 72%, 0% 100%);
        background: var(--lightblack);
        background-image: url("../assets/nature.jpg");
        background-repeat: no-repeat
    }

    article {
/*         border: solid 2px red; */
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
    }

    .product-wrapper {
        width: 100%;
        max-width: 1200px;
       /*  display: flex; */
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center; // horizontal
        align-items: center; // vertical
    }

    .product-container {
        /* Come back here and add some box shadow behind these boxes */
        width: 18rem;
        height: 23rem;
        border: solid 2px blue;
        margin-bottom: 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

    }

    .product-image {
        height: 12rem;
    }

    .special-wrapper {
        border: solid 2px red;
        width: 1000px;
        max-width: 1200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 960px) {
        .product-wrapper {
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(2, 1fr);
        }
        h3, p {
            font-size: 1.3rem;
        }
    }

    @media (max-width: 640px) {
        .product-wrapper {
            grid-template-rows: repeat(3, 1fr);
            grid-template-columns: repeat(1, 1fr);
        }
        h3, p {
            font-size: 1.2rem;
        }
    }
</style>

