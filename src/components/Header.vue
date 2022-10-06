<template>
  <header>
    <img :src="Info.image" alt="#">
    <p class="header-name"> {{Info.name}} </p>
    <button class="close-btn" v-on:click="close()" :class="{ active : active_el == 0 }"></button>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: ['Info'],
  emits: ['isOpen'],
  data() {
    return {
      isOpen: true,
      active_el: null
    }
  },
  methods: {
    close:function(){
      this.$emit('isOpen', this.isOpen = false);
    }
  }
}
</script>

<style scoped>
 @import '../style/Header.scss';
</style>

