<template>
  <div class="plp">
    <ProductPdp
      v-for="(prod, index) in productInfo"
      :index="index"
      :key="index"
      :productInfo="productInfo"
    />
  </div>
</template>

<script>
import ProductPdp from './ProductPdp.vue'
import products from '../products.json'
export default {
  name: 'ProductPlp',
  components: {
    ProductPdp
  },
  data() {
    return{
      products: products,
      productInfo: products.Products
    }
  }
}
</script>

<style scoped>
  @import '../style/Plp.scss';
</style>
