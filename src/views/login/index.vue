<template>
  <div class="login-container">
      <!--
      el-form 表单组件
      每个表单项都必须使用 el-form-item 组件包裹
     -->
    <div class="login-form-wrap">
      <!-- logo部分 -->
        <div class="login-head">
            <div class="logo"></div>
        </div>
        <!-- 表单部分 -->
        <el-form class="login-form" ref="form">
            <el-form-item>
            <el-input></el-input>
            </el-form-item>
            <el-form-item>
            <el-input></el-input>
            </el-form-item>

            <el-form-item>
            <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
            </el-form-item>
            <el-form-item>
            <el-button class="login-btn" type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
// 铺满整屏
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background: url("../../assets/login_bg.jpg") no-repeat;
  background-size: cover;
  .login-form-wrap {
    min-width: 300px;
    padding: 30px 50px 10px;
    background-color: #fff;
    .login-head {
      display: flex;
      justify-content: center;
      .logo {
        width: 200px;
        height: 57px;
        background: url("../../assets/logo_index.png") no-repeat;
        background-size: contain;
      }
    }
    .login-form {
      .login-btn {
        width: 100%;
      }
    }
  }
}
</style>
