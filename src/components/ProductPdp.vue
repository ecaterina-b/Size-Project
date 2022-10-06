<template>
    <div class="product">
        <img :src="productInfo[index].image" alt="#">
        <p>{{productInfo[index].name}}</p>
        <span v-on:click="open()">guida alle taglie</span>
    </div>
</template>

<script>
import configuration from '../configuration.json'
export default {
  name: 'ProductPdp',
  props: ['productInfo', 'index'],
  emits: ['isOpen', 'InfoProd', 'category', 'sizes'],
  data() {
    return {
      config: configuration,
      isOpen: false,
      Info: this.productInfo[this.index],
      category: '',
      sizes: []
    }
  },
  methods: {
    open:function() {
        this.$emit('isOpen', this.isOpen = true )
        this.$emit('InfoProd', this.Info )
        this.category = this.Info.category;
        for (let index = 0; index < Object.keys(this.config.categories).length; index ++) {
          if(this.Info.category === Object.keys(this.config.categories)[index]) {
            this.sizes = (Object.values(this.config.categories)[index]).sizes 
          }
        }
        this.$emit('category', this.category )
        this.$emit('sizes', this.sizes )
    }
  }
}
</script>

<style scoped>
  @import '../style/Plp.scss';
</style>