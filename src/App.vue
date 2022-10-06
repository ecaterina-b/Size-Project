<template>
  <div id="app">
    <div class="overlay" :class="{hide : GuideStatus === false}"></div>
    <ProductsPlp 
      @isOpen="(isOpen)=> GuideStatus = isOpen" 
      @InfoProd="(InfoProd)=> Info = InfoProd"
      @category="(category)=> Category = category"
      @sizes="(sizes)=> Sizes = sizes"
      @gender="(gender)=> Gender = gender"
    />
    <Container 
      @isOpen="(isOpen)=> GuideStatus = isOpen"  
      :class="{hide : GuideStatus === false}" 
      :Info="Info"
      :Category="Category"
      :Sizes="Sizes"
    />
  </div>
</template>

<script>
import Container from './components/Container.vue'
import ProductsPlp from './components/ProductsPlp.vue'
export default {
  name: 'App',
  data() {
    return {
      GuideStatus: false,
      Info: '',
      Category: '',
      Sizes: []
    }
  },
  components: {
    Container,
    ProductsPlp
  }
}
</script>

<style>
@import './style/App.scss';
</style>
