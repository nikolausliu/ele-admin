<template>
  <div class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app-main",
  data() {
    return {};
  },
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/variables.less";
.app-main {
  min-height: calc(100vh - @appHeaderHeight);
  box-sizing: border-box;
  padding: 20px;
  overflow: hidden;
}
</style>