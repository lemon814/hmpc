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
        <!-- 表单部分
        要做表单验证要加： rulues,model,prop

        ref="myform" : 在代码中就可以通过this.$refs.myform (或 this.$refs["myform"]) 来访问组件
        -->
        <el-form class="login-form" :model="user" ref="myform" :rules="rules">
            <el-form-item prop="mobile">
              <!-- 手机号 -->
              <el-input v-model.trim="user.mobile" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <!-- 验证号 -->
              <el-input v-model.trim="user.code" placeholder="请输入验证号"></el-input>
            </el-form-item>

            <el-form-item prop="agree">
              <el-checkbox v-model="user.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
            </el-form-item>

            <el-form-item>
              <el-button :loading="loginLoading" @click="hLogin" class="login-btn" type="primary">登录</el-button>
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
      // 表单验证规则
      rules: {
        // 属性名，就是一类验证规则，可以自己起名字
        // 属性值：是一个数组，其每个对象表示一种规则。
        mobile: [
          // required 是否必须， message:错误提示, triggr: 验证时机
          { required: true, message: '必须要输入手机号', trigger: 'change' },
          // /^1[35789]\d{9}$/
          // ^: 以什么开头。 ^1：表示以1开头.
          // $: 以什么结束
          // [35789] : 表示第二位是35789中的一个。
          // \d{9} : 表示9个数字
          { pattern: /^1[35789]\d{9}$/, message: '手机号格式不对', trigger: 'change' }
        ],
        // 手机验证码，规则必须是6位数字
        code: [
          { required: true, message: '必须要输入验证码', trigger: 'change' },
          { pattern: /^\d{6}$/, message: '验证码格式不对', trigger: 'change' }
        ],
        // 自定义验证规则
        agree: [
          {
            // value: 表示当前值
            // 验证通过： 直接写callback()
            // 验证不通过： callback(new Error(‘错误消息))
            validator: (rule, value, callback) => {
              if (value) {
                // 如是选中，则验证通过
                callback()
              } else {
                // 如是不选中，则给出错误提示通过
                callback(new Error('请同意用户协议'))
              }
            },
            trigger: 'change'
          }
        ]
      },
      // 设置数据项,双向绑定
      user: {
        mobile: '13911111111',
        code: '246810',
        agree: false // 是否同意协议
      },
      // 如果它为true，则会转圈圈
      loginLoading: false // 登陆按钮上的loading
    }
  },
  methods: {
    login () {
      // 开启按钮上的loading效果
      this.loginLoading = true

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
        this.$message({
          message: '登陆成功',
          type: 'success'
        })
        console.log(res.data)
        // 关闭loading状态
        this.loginLoading = false
      }).catch(err => {
        // 登陆出错了
        this.$message.error('登陆出错了')
        console.log(err)
        // 关闭loading状态
        this.loginLoading = false
      })
    },
    // 实现登陆功能
    hLogin () {
      // 调用表单验证功能
      // https://element.eleme.cn/#/zh-CN/component/form#form-methods
      // element-ui的form组件提供了一个整体验证的函数:validate
      // 1. 格式： form组件.validate( valid => { } )
      ///   如何选中某个组件？ (1) 给组件添加属性ref (2)通过this.$refs[ref属性值] 来访问
      //                           this.$refs 专用来获取对组件的引用
      console.log(this.$refs.myform)
      this.$refs.myform.validate(valid => {
        console.log('验证结果', valid)
        if (valid) {
          // 验证成功
          this.login()
        }
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
