<template>
  <div class="page-login" id="container">
    <!-- <canvas id="canvas"></canvas> -->
  </div>
</template>

<script>
import Particle from 'zhihu-particle';
export default {
  name: "login",
  mounted() {
    this.canvasInit();
  },
  methods: {
    canvasInit() {
      // https://github.com/jf3096/zhihu-particle
      const options = {
        atomColor: '#E4E5E6',
        interactive: true,
        density: 'medium',
        velocity: 'medium'
      }
      const particle = new Particle(document.getElementById("container"), options);
    }
  }
};
</script>

<style lang="less" scoped>
.page-login {
  height: 100vh;
  background: #2d3a4b;
  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>