<template>
  <div class="app-header">
    <app-header-controller class="app-header-controller" :fold="sidebar.fold" @switch="switchSidebarFold"></app-header-controller>
    <app-breadcrumb class="app-breadcrumb"></app-breadcrumb>
  </div>
</template>

<script>
import { AppHeaderController, AppBreadcrumb } from "..";
import { mapGetters } from "vuex";
export default {
  name: "app-header",
  components: {
    [AppHeaderController.name]: AppHeaderController,
    [AppBreadcrumb.name]: AppBreadcrumb
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sidebar"]),
  },
  methods: {
    switchSidebarFold() {
      this.$store.dispatch('app/switchSidebarFold');
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/variables.less';
.app-header {
  height: @appHeaderHeight;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  overflow: hidden;
  &-controller {
    float: left;
  }
  .app-breadcrumb {
    float: left;
  }
}
</style>