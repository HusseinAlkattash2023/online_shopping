<template>
    <div class="card shadow-2xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class=" p-3 md:p-7">
                <img :src="product.image" alt="" class="mx-auto my-2 md:my-7"/>
            </div>
            <div class="md:py-7 py-0">
                <h2 class="md:text-4xl md:my-7 text-2xl my-2">{{ product.title }}</h2>
                <p class="text-xl my-7">Price - ${{ product.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
                <p class="mb-7">{{ product.description }}</p>
                <button class="btn flex" @click="addToCart(product)">
                    <i class="material-icons mr-2">add_shopping_cart</i>
                    <span class="text-lg">Add to cart</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {cartStore} from "@/stores/cart";

const {product} = defineProps(['product'])

const store = cartStore();
const addToCart = (product) => {
    store.addToCart(product)
}

</script>

<style scoped>
img{
    max-width: 400px;
}
@media only screen and (max-width: 1020px) {
    img{
    max-width: 300px;
}
}
@media only screen and (max-width: 520px) {
    img{
    max-width: 200px;
}
}
</style>