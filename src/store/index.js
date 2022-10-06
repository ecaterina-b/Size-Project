import Vue from 'vue'
import Vuex from 'vuex'
import products from '../products.json'
import configuration from '../configuration.json'
import measuresImages from '../measuresImages.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOpen: false,
    itemIndex: null,
    category: '',
    sizes: [],
    isActive: false,
    active_el: null,
    MeasureImg: {}
  },
  mutations: {
    open(state, id) {
      state.isOpen = !state.isOpen
      state.itemIndex = id
      state.category = products.Products[state.itemIndex].category
      for (let i = 0; i < Object.keys(configuration.categories).length; i ++) {
        if(state.category === Object.keys(configuration.categories)[i]) {
          state.sizes = (Object.values(configuration.categories)[i]).sizes 
        }
      }
    },
    close(state) {
      state.isOpen = !state.isOpen
      state.isActive = false
    },
    activate(state, el){
      state.isActive = true
      state.active_el = el
      for(let i = 0; i < Object.keys(measuresImages).length; i ++) {
        if(state.category === Object.keys(measuresImages)[i]) {
          state.MeasureImg = (Object.values(measuresImages)[i])
        }
      }
    }
  },
  getters: {
  },
  actions: {
  },
  modules: {
  }
})
