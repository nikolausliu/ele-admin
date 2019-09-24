<template>
  <div class="app-header-controller" :class="iconClass" @click="handlClick"></div>
</template>

<script>
export default {
  name: "app-header-controller",
  data() {
    return {};
  },
  props: {
    fold: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconClass() {
      return this.fold ? 'el-icon-s-unfold' : 'el-icon-s-fold';
    }
  },
  methods: {
    handlClick() {
      this.$emit('switch');
    }
  }
};
</script>

<style lang="less" scoped>
</style>