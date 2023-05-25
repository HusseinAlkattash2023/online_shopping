<template>
    <div>
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="product in products" :key="product">
                <ProductCard :product="product"/>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:'products'
})

const {data:products} = await useFetch('https://fakestoreapi.com/products')
useHead({
    title:'Nuxt Dojo | Merch',
    meta:[
        {name:"description" , content:"Nuxt 3 Merch"}
    ]

})
</script>

<style scoped>

</style>