import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: [],
    datas: null
  },
  mutations: {
    addTosongs (state, data) {
      state.songs.push(data)
    },
    updateData (state, parts) {
      state.datas = parts.content
    }
  },
  actions: {
    getsongsdata ({ commit }) {
      axios.get('/api/songs?offset=0&limit=100')
        .then(result => commit('updateData', result.data))
        .catch(console.error)
    }
  }
})
