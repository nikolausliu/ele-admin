<template>
  <div class="app-header">
    <app-header-controller
      class="app-header-controller"
      :fold="sidebar.fold"
      @switch="switchSidebarFold"
    ></app-header-controller>
    <app-breadcrumb class="app-breadcrumb"></app-breadcrumb>
    <div class="app-header-menu">
      <el-dropdown trigger="click">
        <div class="avatar">
          <img :src="avatar" />
        </div>
        <el-dropdown-menu slot="dropdown" class="dropdown-menu">
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
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
    return {
      avatar: require("@/assets/avatar.png")
    };
  },
  computed: {
    ...mapGetters(["sidebar"])
  },
  methods: {
    switchSidebarFold() {
      this.$store.dispatch("app/switchSidebarFold");
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/variables.less";
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
  &-menu {
    float: right;
    height: 100%;
    line-height: @appHeaderHeight;
    .avatar {
      margin: 5px;
      margin-right: 20px;
      outline: none;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
}
.dropdown-menu {
  top: 45px !important;
}
</style>
<style lang="less">
.el-popper.dropdown-menu .popper__arrow {
  display: none !important;
}
</style>