<template>
  <div class="app-header-controller" @click="handlClick">
    <i :class="iconClass"></i>
  </div>
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
@import '~@/styles/variables.less';
.app-header-controller {
  padding: 0 10px;
  line-height: @appHeaderHeight;
  font-size: 24px;
  cursor: pointer;
}
</style>