<template>
  <div class="container-taglie">
    <h1 class="title-taglie">{{config.title}}</h1>
    <p class="text-taglie">{{config.instructionsMain}}</p>
    <ul class="griglia-taglie">
        <li class="grid-box"
        v-for="(size, index) in $store.state.sizes" :key="'item-'+index"
        v-on:click="$store.commit('activate',index)" 
        :class="{ active : $store.state.active_el == index && $store.state.isActive == true }">
          <span>{{ $store.state.category.includes('Top') ? $store.state.sizes[index].similarSizes[0] : $store.state.sizes[index].code }}</span>
        </li>
    </ul>
  </div>
</template>

<script>
import configuration from '../configuration.json'
export default {
  name: 'TaglieComponent',
  data() {
    return {
      config: configuration
    }
  }
}
</script>

<style scoped>
  @import '../style/Taglie.scss';
</style>
