export const STORAGE_KEY = 'todos-vuejs'
import Vue from 'vue'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const state = {
  staffs: []
}

export const mutations = {
  updateSuccess (state, { id, name, address, date }) {
    let index = state.staffs.findIndex(function (item) {
      return item.id === id
    })
    console.log('in updateSuccess', date)
    state.staffs[index] = {id: id, name: name, address: address, date: date}
    state.staffs = state.staffs.slice(0)
  },

  deleteSuccess (state, {id}) {
    let index = state.staffs.findIndex(function (item) {
      return item.id === id
    })
    state.staffs.splice(index, 1)
  },

  initStaff (state, {data}) {
    console.log(data)
    state.staffs = data
  }
}

export const actions = {
  fetchStaff ({ commit }, payload) {
    Vue.http.get('/api/staffs').then(response => {
      commit({
        type: 'initStaff',
        data: response.data
      })
    }, response => {
      console.error(response)
    })
  },
  insertStaff ({commit}, {date, name, address}) {
    Vue.http.post('/api/staffs', {
      date: date, name: name, address: address
    }).then(response => {
      console.log(response)
    }, response => {
      console.error(response)
    })
  },
  updateStaff ({commit}, {date, name, address, id}) {
    console.log('in mutations, id:' + id)
    Vue.http.put('/api/staffs', {
      date: date,
      name: name,
      address: address,
      id: id
    }).then(response => {
      commit({
        type: 'updateSuccess',
        date: date,
        name: name,
        address: address,
        id: id
      })
    }, response => {
      console.error(response)
    })
  },
  deleteStaff ({commit}, {id}) {
    console.log('delete Staff', id)
    Vue.http.delete('/api/staffs/' + id).then(response => {
      commit({
        type: 'deleteSuccess'
      })
      console.log(response.data)
    }, response => {
      console.error(response)
    })
  }
}
