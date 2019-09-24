<template>
  <div class="app-sidebar" :class="{'app-sidebar--is-collapse': isCollapse}">
    <el-menu :collapse="isCollapse" router>
      <template v-for="(item, index) in menu">
        <template v-if="item.hasOwnProperty('children') && item.children.length === 0">
          <el-menu-item :key="index" :index="item.path">
            <i :class="item.icon" v-if="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
        <template v-else>
          <app-submenu :menu="item" :key="index"></app-submenu>
        </template>
      </template>
      <!-- <el-menu-item index="/home">
        <i class="el-icon-s-shop"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/test">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">测试</span>
        </template>
        <el-submenu index="/test/menu1">
          <template slot="title">菜单1</template>
          <el-menu-item index="/test/menu1/menu1-1">菜单1-1</el-menu-item>
          <el-submenu index="/test/menu1/menu1-2">
            <template slot="title">菜单1-2</template>
            <el-menu-item index="/test/menu1/menu1-2/menu1-2-1">菜单1-2-1</el-menu-item>
            <el-menu-item index="/test/menu1/menu1-2/menu1-2-2">菜单1-2-2</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="/test/menu2">菜单2</el-menu-item>
      </el-submenu> -->
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppSubmenu from "./app-submenu";
export default {
  name: "app-sidebar",
  components: {
    [AppSubmenu.name]: AppSubmenu
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(["sidebar", "menu"]),
    isCollapse() {
      return this.sidebar.fold;
    }
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.app-sidebar {
  width: 210px;
  transition: width 0.3s;
  background-color: #304156;
  &--is-collapse {
    width: 64px;
  }
  .el-menu {
    border-right: 0;
    background-color: #304156;
    &-item {
      color: #bfcbd0;
      &--is-active {
        color: #409eff;
      }
    }
  }
}
</style>