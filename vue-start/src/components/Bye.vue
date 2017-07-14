<template>
  <div>
    <a>一个链接</a>
    <a>两个链接 {{ msg }}</a>
  </div>
</template>

<script>
export default {
  name: 'bye',
  data () {
    return {
      msg: 'goodbye'
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
