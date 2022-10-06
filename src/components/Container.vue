<template>
  <div class="container">
    <Header 
      v-on="$listeners" 
      :Info="Info"
      @isOpen="(isOpen) => OpenBtn = isOpen"
    />
    <Taglie 
      @activeTab="(activeTab)=> isActive = activeTab" 
      @info="(info) => infoTaglie = info"
      @pics="(pics) => Pics = pics"
      @Open_btn="(Open_btn) => OpenBtn = Open_btn"
      :Info="Info"
      :Category="Category"
      :Sizes="Sizes"
      :OpenBtn="OpenBtn"
      :elActive="elActive"
    />
    <Misure 
      v-if="isActive === true && OpenBtn" 
      v-bind:infoTaglie="infoTaglie" 
      :Info="Info"
      :Category="Category"
      :Pics="Pics"
    />
  </div>
</template>

<script>
import Header from './Header.vue'
import Taglie from './Taglie.vue'
import Misure from './Misure.vue'

export default {
  props: ['Info', 'Category', 'Sizes', 'Open'],
  data() {
    return {
      isActive: false,
      infoTaglie: {},
      Pics: {},
      OpenBtn: true,
      elActive: null
    }
  },
  name: 'ContainerComponent',
    components: {
    Header,
    Taglie,
    Misure
  }
}

</script>

<style scoped>
  @import '../style/Container.scss';
</style>
