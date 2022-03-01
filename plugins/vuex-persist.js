// ~/plugins/vuex-persist.js
import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    modules: ['cart'],
  }).plugin(store)
}
