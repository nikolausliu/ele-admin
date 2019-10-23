<template>
  <div class="app-layout">
    <app-sidebar class="app-sidebar"></app-sidebar>
    <div class="app-main-container" :class="{'app-main-container--is-collapse': isCollapse}">
      <app-header :class="{'app-header--is-fixed': headerFixed}"></app-header>
      <app-main :class="{'app-main--is-fixed': headerFixed}"></app-main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { AppSidebar, AppHeader, AppMain } from "./components";
export default {
  name: "app-layout",
  components: {
    [AppSidebar.name]: AppSidebar,
    [AppHeader.name]: AppHeader,
    [AppMain.name]: AppMain
  },
  computed: {
    ...mapGetters(["sidebarFold", "headerFixed"]),
    isCollapse() {
      return this.sidebarFold;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/variables.less";
.app-sidebar {
  position: fixed;
  left: 0;
  top: 0;
}
.app-main-container {
  margin-left: @sidebarWidth;
  transition: margin 0.3s;
  .app-header {
    &--is-fixed {
      position: fixed;
      width: calc(100% - @sidebarWidth);
      z-index: 1;
      transition: width 0.3s;
    }
  }
  &--is-collapse {
    margin-left: @sidebarCollapseWidth;
    .app-header {
      width: calc(100% - @sidebarCollapseWidth);
    }
  }
  .app-main {
    position: relative;
    &--is-fixed {
      top: 50px;
    }
  }
}
</style>