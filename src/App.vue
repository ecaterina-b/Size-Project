<template>
  <div id="app">
    <div class="overlay" :class="{hide : $store.state.isOpen === false}"></div>
    <ProductsPlp />
    <Container
      :class="{hide : $store.state.isOpen === false}" 
    />
  </div>
</template>

<script>
import Container from './components/Container.vue'
import ProductsPlp from './components/ProductsPlp.vue'
export default {
  name: 'App',
  components: {
    Container,
    ProductsPlp
  }
}
</script>

<style>
@import './style/App.scss';
</style>
