<template>
  <div>
    <!--<a>详情页面 {{ this.$route.params.id }}</a>-->
    <p>姓名： {{data.name}}</p>
    <p>日期： {{data.date}}</p>
    <p>地址： {{data.address}}</p>
  </div>
</template>

<script>
  export default {
    name: 'bye',
    computed: {
      data () {
//          console.log(this.$store.state.staffs)
        return this.$store.state.staffs[this.$route.params.id]
      }
    },
    data () {
      return {
      }
    }
  }
</script>
