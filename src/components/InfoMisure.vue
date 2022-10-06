<template>
    <div class="info-misure-container">
        <h1 class="title-taglie">{{config.howToMeasure.title}}</h1>
        <div class="info-misure" v-if="Category.includes('Top')">
            <div class="info-testo">
                <p class="titolo-info">{{config.chest}}</p>
                <p>{{config.howToMeasure.chest}}</p>
            </div>
            <img :src="Pics.chest" />
        </div>
        <div class="info-misure" v-if="Category.includes('womanTop') || Category.includes('Bottom') ">
            <div class="info-testo">
                <p class="titolo-info">{{config.waist}}</p>
                <p>{{config.howToMeasure.waist}}</p>
            </div>
            <img :src="Pics.waist" />
        </div>
        <div class="info-misure" v-if="Category.includes('woman') ">
            <div class="info-testo">
                <p class="titolo-info">{{config.hips}}</p>
                <p>{{config.howToMeasure.hips}}</p>
            </div>
            <img :src="Pics.hips" />
        </div>
    </div>
</template>

<script>
import configuration from '../configuration.json'
import measuresImages from '../measuresImages.json'
export default {
  name: 'InfoMisure',
  props: ['Pics', 'Category'],
  data() {
    return {
        config: configuration,
        images: measuresImages
    }
  }
}

</script>

<style scoped>
  @import '../style/Misure.scss';
</style>
