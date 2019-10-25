<template>
  <div class="app-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumblist"
        :key="index"
        :to="item.path"
      >{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'app-breadcrumb',
  data() {
    return {}
  },
  computed: {
    breadcrumblist() {
      let matched = this.$route.matched
      const home = {
        path: '/',
        meta: {
          title: '首页'
        }
      }
      if (
        matched[matched.length - 1].meta &&
        matched[matched.length - 1].meta.title === '首页'
      ) {
        matched = [home]
      }
      return matched
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';
.app-breadcrumb {
  .el-breadcrumb {
    line-height: @appHeaderHeight;
  }
}
</style>
