<template>
  <div class="page-404">
    <h1>404</h1>
    <h2>Page not found</h2>
    <el-button @click="$router.replace('/')">Back to home</el-button>
  </div>
</template>

<script>
export default {
  name: '404'
}
</script>

<style lang="less" scoped>
.page-404 {
  text-align: center;
  margin-top: 100px;
  h1 {
    font-size: 100px;
    margin: 20px 0;
  }
}
</style>