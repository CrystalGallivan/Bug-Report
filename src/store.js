import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';


let _api = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/TestCrystal'
})
Vue.use(Vuex)
// https://bcw-sandbox.herokuapp.com/api/testcrystal
// ''
export default new Vuex.Store({
  state: {
    bug: {},
    bugs: [],
    note: {},
    notes: []
  },
  mutations: {
    setBugs(state, bugs = []) {
      state.bugs = bugs
    },
    setBug(state, bug) {
      state.bug = bug
      router.push({ name: 'bug', params: { id: bug._id } })
    },
    setNotes(state, notes = []) {
      state.notes = notes
    },
    setNote(state, note) {
      state.note = note
      // { name: 'note', params: { id: note._id }
    }
  },
  actions: {
    async getAllBugs({ commit, dispatch }) {

      try {
        let res = await _api.get('/bugs')
        console.log(res.data)
        commit('setBugs', res.data.results)
      } catch (error) {
        console.log(error)
      }
    },
    async getBugById({ commit, dispatch }, id) {
      try {
        let res = await _api.get('/bugs/' + id)
        console.log(res)
        commit('setBug', res.data.results)
      } catch (error) {
        console.log(error)
      }
    },
    setBug({ commit, dispatch }, bug) {
      commit('setBug', bug)
    },
    async createBug({ commit, dispatch }, payload) {
      try {
        let res = await _api.post('/bugs', payload)
        dispatch('getAllBugs', res.data)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteBug({ commit, dispatch }, id) {
      try {
        let res = await _api.delete('/bugs/' + id)
        dispatch('getBugById', id)
      } catch (error) {
        console.log(error)
      }
    },
    async getAllNotes({ commit, dispatch }, payload) {
      try {
        let res = await _api.get('/bugs/' + payload.bug + '/notes')
        commit('setNotes', res.data.results)
      } catch (error) {
        console.log(error)
      }
    },
    async createNote({ commit, dispatch }, payload) {
      try {
        let res = await _api.post('/bugs/' + payload.bug + '/notes', payload)
        dispatch('getAllNotes', payload.bug)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
