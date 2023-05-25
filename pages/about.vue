<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <p>{{ counter.count }}</p>
        <button class="btn" @click="counter.increment()">+</button>
        <button class="btn" @click="counter.decrement()">-</button>
    </div>
</template>

<script setup>
import {counterStore} from "@/stores/counter"
const counter = counterStore();

// const {data} = await useFetch('/api/currency/GBP')

</script>

<style scoped>
h2{
    margin-bottom: 20px;
    font-size: 36px;

}
p{
    margin: 20px 0px;
}
</style>