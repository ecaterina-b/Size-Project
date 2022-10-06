<template>
  <div class="container-taglie">
    <h1 class="title-taglie">{{config.title}}</h1>
    <p class="text-taglie">{{config.instructionsMain}}</p>
    <ul class="griglia-taglie">
        <li class="grid-box"
        v-for="(size, index) in Sizes" :key="'item-'+index"
        v-on:click="activate(index)" 
        :class="{ active : active_el == index && OpenBtn == true }">
          <span>{{ Category.includes('Top') ? size.similarSizes[0] : size.code }}</span>
        </li>
    </ul>
  </div>
</template>

<script>
import configuration from '../configuration.json'
import measuresImages from '../measuresImages.json'
export default {
  name: 'TaglieComponent',
  emits: ['activeTab', 'info', 'pics', 'Open_btn'],
  props: ['Info', 'Category', 'Sizes', 'OpenBtn'],
  data() {
    return {
      active_el: null,
      config: configuration,
      activeTab: false,
      images: measuresImages,
      pics: {},
      Open_btn: false
    }
  },
  methods: {
    activate:function(el){
      this.active_el = el;
      this.$emit('activeTab', !this.activeTab);
      this.$emit('info', this.Sizes[el].measures);
      this.$emit('Open_btn', !this.Open_btn);
      for(let i=0; i < Object.keys(this.images).length ;i++){
        if((Object.keys(this.images)[i]) === this.Category) {
          this.pics = (Object.values(this.images)[i])
        }
      }
      this.$emit('pics', this.pics);
    }
  }
}
</script>

<style scoped>
  @import '../style/Taglie.scss';
</style>
