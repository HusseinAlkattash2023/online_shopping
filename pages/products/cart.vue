<template>
    <div>
    <div class="border-y-4 mb-10" v-for="product in store.items" :key="product">
        <ProductCartDetials :product="product"/>
    </div>
    <div v-if="store.items.length > 0" class="card font-bold text-xl md:text-3xl text-center py-4 mx-10">
        <p>total price: ${{ store.totalPrice }}</p>
    </div>
    </div>
</template>

<script setup>
import {cartStore} from "@/stores/cart";
definePageMeta({
    layout:'products'
})

const store = cartStore();
</script>

<style lang="scss" scoped>

</style>