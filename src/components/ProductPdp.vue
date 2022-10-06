<template>
    <div class="product">
        <img :src="productInfo[index].image" alt="#">
        <p>{{productInfo[index].name}}</p>
        <span v-on:click="$store.commit('open', index)">guida alle taglie</span>
    </div>
</template>

<script>
export default {
  name: 'ProductPdp',
  props: ['productInfo', 'index'],
  data() {
    return {
      isOpen: false,
      Info: this.productInfo[this.index]
    }
  }
}
</script>

<style scoped>
  @import '../style/Plp.scss';
</style>