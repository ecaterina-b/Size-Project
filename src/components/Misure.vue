<template>
  <div class="container-misure">
    <div class="misure">
        <div class="row" v-for="(image, index) in $store.state.MeasureImg" :key="index" >
            <img :src="$store.state.MeasureImg[index]" />
            <div class="size">
                <p>{{ $store.state.lang == 'en' ? config.en[index] : config.it[index] }}</p>
                <h2>{{$store.state.sizes[$store.state.active_el].measures[index]}}</h2>
            </div>
        </div>
    </div>
    <InfoMisure />
  </div>
</template>

<script>
import InfoMisure from './InfoMisure.vue'
import configuration from '../configuration.json'
export default {
  name: 'MisureComponent',
  components: {
    InfoMisure
  },
  data() {
    return {
        config: configuration
    }
  }
}
</script>

<style scoped>
  @import '../style/Misure.scss';
</style>
