<template>
    <div class="info-misure-container">
        <h1 class="title-taglie">{{config.howToMeasure.title}}</h1>
        <div class="info-misure" v-for="(image, index) in $store.state.MeasureImg" :key="'img-'+index">
            <div class="info-testo">
                <p class="titolo-info">{{index}}</p>
                <p>{{config.howToMeasure[index]}}</p>
            </div>
            <img :src="$store.state.MeasureImg[index]" />
        </div>
    </div>
</template>

<script>
import configuration from '../configuration.json'
export default {
  name: 'InfoMisure',
  props: ['Pics', 'Category'],
  data() {
    return {
        config: configuration,
    }
  }
  
}

</script>

<style scoped>
  @import '../style/Misure.scss';
</style>
