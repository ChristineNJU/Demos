export const STORAGE_KEY = 'todos-vuejs'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const state = {
  staffs: [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    id: 0
  }, {
    date: '2016-05-04',
    name: '王大虎',
    address: '上海市普陀区金沙江路 1517 弄',
    id: 1
  }, {
    date: '2016-05-01',
    name: '王二虎',
    address: '上海市普陀区金沙江路 1519 弄',
    id: 2
  }, {
    date: '2016-05-03',
    name: '王虎',
    address: '上海市普陀区金沙江路 1516 弄',
    id: 3
  }]
}

export const mutations = {
  addStaff (state, { id, name, address, date }) {
    let index = state.staffs.findIndex(function (item) {
      return item.id === id
    })
    state.staffs[index] = {id: id, name: name, address: address, date: date}
    state.staffs = state.staffs.slice(0)
  },

  deleteStaff (state, {id}) {
    let index = state.staffs.findIndex(function (item) {
      return item.id === id
    })
    state.staffs.splice(index, 1)
  }
}
