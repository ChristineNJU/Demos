<template>
  <div>
    <!--<a>详情页面 {{ this.$route.params.id }}</a>-->
    <p>姓名： {{data[this.$route.params.id].name}}</p>
    <p>日期： {{data[this.$route.params.id].date}}</p>
    <p>地址： {{data[this.$route.params.id].address}}</p>
  </div>
</template>

<script>
  export default {
    name: 'bye',
    data () {
      return {
        data: [{
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
    }
  }
</script>
