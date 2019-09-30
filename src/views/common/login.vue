<template>
  <div class="page-login" id="page-login">
    <!-- <canvas id="canvas"></canvas> -->
    <div class="login-form">
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="用户名" clearable>
            <i class="el-icon-user" slot="prepend"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            placeholder="密码"
            type="password"
            clearable
            show-password
          >
            <i class="el-icon-lock" slot="prepend"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-button" @click="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Particle from "zhihu-particle";
export default {
  name: "login",
  mounted() {
    this.canvasInit();
  },
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "用户名不能为空" }],
        password: [{ required: true, message: "密码不能为空" }]
      }
    };
  },
  methods: {
    canvasInit() {
      // https://github.com/jf3096/zhihu-particle
      const options = {
        atomColor: "#E4E5E6",
        interactive: true,
        density: "medium",
        velocity: "medium"
      };
      return;
      const particle = new Particle(
        document.getElementById("page-login"),
        options
      );
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
        } else {
        }
      });
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
  .login-form {
    position: absolute;
    z-index: 100;
    width: 350px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .login-button {
      width: 100%;
    }
  }
}
</style>
<style lang="less">
.login-form {
  .el-input-group__prepend {
    background: #283443;
    border-color: #3e4957;
  }
  .el-input__inner {
    border-color: #3e4957;
    border-left: 0;
    background: #283443;
  }
  .el-form-item.is-error .el-input-group__prepend {
    border-color: #f56c6c;
  }
}
</style>