<template>
  <header>
    <img :src="products.Products[$store.state.itemIndex].image" alt="#">
    <p class="header-name"> {{products.Products[$store.state.itemIndex].name}} </p>
    <button class="close-btn" v-on:click="$store.commit('close')"></button>
  </header>
</template>

<script>
import products from '../products.json'
export default {
  name: 'HeaderComponent',
  data() {
    return {
      products: products
    }
  }
}
</script>

<style scoped>
 @import '../style/Header.scss';
</style>

