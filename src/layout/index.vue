<template>
  <div class="app-layout">
    <app-sidebar></app-sidebar>
    <div class="app-main-wrap">
      <app-header></app-header>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import {AppSidebar, AppHeader, AppMain} from './components'
export default {
  name: 'app-layout',
  components: {
    [AppSidebar.name]: AppSidebar,
    [AppHeader.name]: AppHeader,
    [AppMain.name]: AppMain,
  },
}
</script>

<style lang="less" scoped>

</style>