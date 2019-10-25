<template>
  <el-submenu :index="menu.path">
    <template slot="title">
      <i :class="menu.icon" v-if="menu.icon"></i>
      <span slot="title">{{menu.title}}</span>
    </template>
    <template v-for="(item, index) in menu.children">
      <template v-if="item.children.length === 0">
        <el-menu-item :key="index" :index="item.path">{{item.title}}</el-menu-item>
      </template>
      <template v-else>
        <!-- 递归组件 -->
        <app-submenu :menu="item" :key="index"></app-submenu>
      </template>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: 'app-submenu',
  data() {
    return {}
  },
  props: {
    menu: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
</style>
