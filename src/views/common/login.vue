<template>
  <div class="page-login" id="page-login">
    <canvas id="canvas"></canvas>
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
            @keyup.enter.native="submit"
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
// import Particle from "zhihu-particle"
import canvas from '@/utils/canvas'

export default {
  name: 'login',
  mounted() {
    this.canvasInit()
  },
  data() {
    return {
      form: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [{ required: true, message: '用户名不能为空' }],
        password: [{ required: true, message: '密码不能为空' }]
      }
    }
  },
  methods: {
    canvasInit() {
      // return;
      // https://github.com/jf3096/zhihu-particle
      // const options = {
      //   atomColor: "#E4E5E6",
      //   interactive: true,
      //   density: "medium",
      //   velocity: "medium"
      // };
      // const particle = new Particle(
      //   document.getElementById("page-login"),
      //   options
      // );
      canvas()
    },
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$store
            .dispatch('user/login', this.form)
            .then(res => {
              const { code, msg, data } = res
              if (code === 0) {
                this.$message({
                  message: '登录成功，欢迎回来！',
                  type: 'success',
                  showClose: true
                })
                this.$router.replace('/')
              } else {
                this.$message({
                  message: msg,
                  type: 'error',
                  showClose: true
                })
              }
            })
            .catch(err => {
              console.warn('登录出错:', err.msg)
              this.$message({
                message: '登录遇到问题，请稍后重试',
                type: 'error',
                showClose: true
              })
            })
        } else {
        }
      })
    }
  }
}
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
@bgColor: #283443;
@borderColor: #3e4957;
.login-form {
  .el-input-group__prepend {
    background: @bgColor;
    border-color: @borderColor;
  }
  .el-input__inner {
    border-color: @borderColor;
    border-left: 0;
    background: @bgColor;
    color: #eee;
  }
  .el-form-item.is-error .el-input__inner {
    border-color: @borderColor;
  }
  .el-form-item.is-error .el-input-group__prepend {
    // border-color: #f56c6c;
  }
}
</style>
