<template>
  <div class="app-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "app-breadcrumb",
  data() {
    return {};
  },
  computed: {
    bread() {
      return this.$route;
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';
.app-breadcrumb {
  .el-breadcrumb {
    line-height: @appHeaderHeight;
  }
}
</style>