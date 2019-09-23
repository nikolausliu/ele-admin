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
</style>