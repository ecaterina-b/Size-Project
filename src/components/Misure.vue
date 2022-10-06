<template>
  <div class="container-misure">
    <div class="misure">
        <div class="row" v-if="Category.includes('Top') ">
            <img :src="Pics.chest" />
            <div class="size">
                <p>chest</p>
                <h2>{{infoTaglie.chest}}</h2>
            </div>
        </div>
        <div class="row" v-if="Category.includes('womanTop') || Category.includes('Bottom') ">
            <img :src="Pics.waist" />
            <div class="size">
                <p>waist</p>
                <h2>{{infoTaglie.waist}}</h2>
            </div>
        </div>
        <div class="row" v-if="Category.includes('woman') ">
            <img :src="Pics.hips" />
            <div class="size">
                <p>hips</p>
                <h2>{{infoTaglie.hips}}</h2>
            </div>
        </div>
    </div>
    <InfoMisure 
    v-bind="$props"
    />
  </div>
</template>

<script>
import InfoMisure from './InfoMisure.vue'
import measuresImages from '../measuresImages.json'
export default {
  props: ['infoTaglie', 'Category', 'Pics'],
  name: 'MisureComponent',
  components: {
    InfoMisure
  },
  data() {
    return {
      images: measuresImages
    }
  }
}
</script>

<style scoped>
  @import '../style/Misure.scss';
</style>
