import { defineStore } from 'pinia'

export const counterStore = defineStore('counter',{
    state:()=>({
        count:0
    }),
    actions:{
        increment(item){
            this.count++
        },
        decrement(item){
            this.count--
        },
    }
})