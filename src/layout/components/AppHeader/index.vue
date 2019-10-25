<template>
  <div class="app-header">
    <app-header-controller
      class="app-header-controller"
      :fold="sidebarFold"
      @switch="switchSidebarFold"
    ></app-header-controller>
    <app-breadcrumb class="app-breadcrumb"></app-breadcrumb>
    <div class="app-header-menu">
      <el-dropdown trigger="click" @command="commandHandle">
        <div class="avatar">
          <span class="username">{{ userInfo.username }}</span>
          <img :src="userInfo.avatar" />
        </div>
        <el-dropdown-menu slot="dropdown" class="dropdown-menu">
          <el-dropdown-item command="logout">
            <i class="el-icon-switch-button"></i>退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="app-header-settings" @click="settingsClickHandle">
        <i class="el-icon-s-tools"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { AppHeaderController, AppBreadcrumb } from '..'
import { mapGetters } from 'vuex'
export default {
  name: 'app-header',
  components: {
    [AppHeaderController.name]: AppHeaderController,
    [AppBreadcrumb.name]: AppBreadcrumb
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['sidebarFold', 'userInfo'])
  },
  methods: {
    switchSidebarFold() {
      this.$store.dispatch('app/switchSidebarFold')
    },
    settingsClickHandle() {
      this.$store.dispatch('app/switchHeaderFixed')
    },
    commandHandle(command) {
      this[`${command}Handle`]()
    },
    logoutHandle() {
      this.$store
        .dispatch('user/logout')
        .then(res => {
          this.$message({
            message: '退出登录成功',
            type: 'success',
            showClose: true
          })
          this.$router.replace('/login')
        })
        .catch(err => {
          console.warn('退出登录出错:', err.msg)
          this.$message({
            message: '退出登录遇到问题，请稍后重试',
            type: 'error',
            showClose: true
          })
        })
    }
  }
}
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
  &-menu {
    float: right;
    height: 100%;
    margin-right: 20px;
    line-height: @appHeaderHeight;
    .avatar {
      width: auto;
      height: 40px;
      margin-top: 5px;
      margin-left: 20px;
      outline: none;
      cursor: pointer;
      .username {
        display: inline-block;
        vertical-align: top;
        line-height: 40px;
        margin-right: 10px;
      }
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
  .el-dropdown {
    float: left;
  }
  &-settings {
    float: left;
    margin-left: 20px;
    i {
      line-height: @appHeaderHeight;
      font-size: 24px;
      color: #5e5e66;
      cursor: pointer;
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
