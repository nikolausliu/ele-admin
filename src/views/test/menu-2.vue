<template>
  <div class="page-menu-2">
    <div v-html="msg"></div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {}
  },
  computed: {
    msg() {
      return Array(100)
        .fill('菜单2')
        .join('<br>')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
