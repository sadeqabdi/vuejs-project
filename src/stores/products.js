import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: []
  }),
  actions: {
    async fetchProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        this.products = await res.json()
      } catch (err) {
        console.error('Failed to fetch products', err)
      }
    }
  }
})
