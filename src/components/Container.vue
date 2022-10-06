<template>
  <div class="container">
    <Header />
    <Taglie />
    <Misure v-if="$store.state.isActive" />
  </div>
</template>

<script>
import Header from './Header.vue'
import Taglie from './Taglie.vue'
import Misure from './Misure.vue'

export default {
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
