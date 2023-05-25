<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/products" class="font-bold">Nuxt Dojo Merch</NuxtLink>
                <NuxtLink to="/products/cart">
                    <i class="material-icons">shopping_cart</i>
                    <span v-if="store.items.length !== 0" class="add">{{ store.items.length }}</span>
                </NuxtLink>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot/>
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Products</NuxtLink>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script setup>
import {cartStore} from "@/stores/cart";
// import { useStore } from 'pinia';


const store = cartStore()

</script>


<style scoped>
.router-link-exact-active{
    color:#12b488;
}
nav a{
    position: relative;
}
nav .add{
    position: absolute;
    top:-11px;
    right:-10px;
    width: 20px;
    height: 20px;
    background: red;
    display: grid;
    place-items: center;;
    border-radius: 50%;
    color: aliceblue;
}
nav a i{
    color:#12b488;
    cursor: pointer;
    font-size: 30px;
}
</style>