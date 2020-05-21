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
              <!-- 手机号 -->
              <el-input v-model.trim="user.mobile" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item>
              <!-- 验证号 -->
              <el-input v-model.trim="user.code" placeholder="请输入验证号"></el-input>
            </el-form-item>

            <el-form-item>
              <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
            </el-form-item>

            <el-form-item>
              <el-button class="login-btn" type="primary" @click="hLogin">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
// ajax名字是可以改的。它的格式与 axios()的格式是一样的
import ajax from '../../utils/request.js'
export default {
  name: 'Login',
  data () {
    return {
      // 设置数据项,双向绑定
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      checked: false
    }
  },
  methods: {
    // 实现登陆功能
    hLogin () {
      // 1. 收集用户信息，简单判空
      if (this.user.mobile === '') {
        return
      }

      if (this.user.code === '') {
        return
      }

      // 2. 检测是否同意
      if (this.checked === false) {
        return
      }

      // 3. 发根据接口文档的要求，发出ajax请求
      //  1) 引入request.js
      //  2) 发请求
      ajax({
        method: 'POST',
        url: '/mp/v1_0/authorizations',
        data: {
          mobile: this.user.mobile,
          code: this.user.code
        }
      }).then(res => {
        alert('ok')
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
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
