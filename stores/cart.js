import { defineStore } from 'pinia'

export const cartStore = defineStore('cart',{
    state:()=>({
        items:[],
    }),
    actions:{
        addToCart(item){
            const findProduct = this.items.find(
                (product) => product.id === item.id
            );
            if (findProduct) {
                findProduct.quantity +=1;
            } else {
                const productClone = { ...item, quantity: 1 };
                this.items.push(productClone);
            }
        },
        decreaseQty:(item)=>{
            const findProduct = this.items.find(
                (product) => product.id === item.id
            );
            if (findProduct) {
                findProduct.quantity > 0 ? findProduct.quantity -=1 : findProduct.quantity = 0;
            } else {
                const productClone = { ...item, quantity: 1 };
                this.items.push(productClone);
        }
        },
        removeItem(itemId){
            this.items = this.items.filter(product => product.id !== itemId)
        },
    },
    getters:{
        totalPrice() {
            return this.items.reduce((total, item) => total + item.price * item.quantity, 0)
    }
}
})