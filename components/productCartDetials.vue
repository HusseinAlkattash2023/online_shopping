<template>
    <div class="card shadow-2xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="p-3 md:p-7">
                <img :src="product.image" alt="" class="mx-auto my-2 md:my-7"/>
            </div>
            <div class="md:py-7 py-0">
                <h2 class="md:text-4xl md:my-7 text-2xl my-2">{{ product.title }}</h2>
                <p class="text-xl my-7">Price - ${{ product.price * product.quantity }}</p>
                <p class="text-xl my-7">Quantity: {{ product.quantity }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
                <p class="mb-7">{{ product.description }}</p>
                <div class="flex btns">
                    <button class="btn mr-3" @click="addToCart(product)">
                        <i class="material-icons">add</i>
                    </button>
                    <button class="btn" @click="decreaseQty(product)">
                        <i class="material-icons">remove</i>
                    </button>
                </div>
                <button class="btn mt-3" @click="removeItem(product.id)">
                    <i class="material-icons">delete</i>
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
const removeItem = (productId) => {
    store.removeItem(productId)
}

const decreaseQty = (product) => {
    // store.decreaseQty(product)
    if(product.quantity > 1){
        product.quantity--
    }else{
        removeItem(product.id)
    }
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

button{
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
button i{
    text-align: center;
}
</style>