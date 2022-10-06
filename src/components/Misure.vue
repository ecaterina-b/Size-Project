<template>
  <div class="container-misure">
    <div class="misure">
        <div class="row" v-for="(image, index) in $store.state.MeasureImg" :key="index" >
            <img :src="$store.state.MeasureImg[index]" />
            <div class="size">
                <p>{{index}}</p>
                <h2>{{$store.state.sizes[$store.state.active_el].measures[index]}}</h2>
            </div>
        </div>
    </div>
    <InfoMisure />
  </div>
</template>

<script>
import InfoMisure from './InfoMisure.vue'
export default {
  name: 'MisureComponent',
  components: {
    InfoMisure
  }
}
</script>

<style scoped>
  @import '../style/Misure.scss';
</style>
