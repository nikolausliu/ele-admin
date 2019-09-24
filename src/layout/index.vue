<template>
  <div class="app-layout">
    <app-sidebar class="app-sidebar"></app-sidebar>
    <div class="app-main-container" :class="{'app-main-container--is-collapse': isCollapse}">
      <app-header></app-header>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {AppSidebar, AppHeader, AppMain} from './components'
export default {
  name: 'app-layout',
  components: {
    [AppSidebar.name]: AppSidebar,
    [AppHeader.name]: AppHeader,
    [AppMain.name]: AppMain,
  },
  computed: {
    ...mapGetters(["sidebar"]),
    isCollapse() {
      return this.sidebar.fold;
    }
  },
}
</script>

<style lang="less" scoped>
.app-sidebar {
  position: fixed;
  left: 0;
  top: 0;
}
.app-main-container {
  margin-left: 210px;
  transition: margin .3s;
  &--is-collapse {
    margin-left: 64px;
  }                                                                                                                                                                                      
}
</style>