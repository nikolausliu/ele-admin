<template>
  <div class="page-home">
    <div v-html="msg"></div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {}
  },
  computed: {
    msg() {
      return Array(100).fill('首页').join('<br>');
    }
  }
}
</script>

<style lang="less" scoped>

</style>