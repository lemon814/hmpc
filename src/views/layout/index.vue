<template>
    <el-container class="layout-container">
        <el-aside
        class="aside"
        width="200px"
        >
            <!-- 上面是一个logo -->
            <div class="logo"></div>
            <!-- 菜单区域 -->
            <el-menu
            default-active="2"
            class="nav-menu"
            background-color="#002033"
            text-color="#fff"
            active-text-color="#ffd04b"
            >
                <el-menu-item index="/">
                    <i class="el-icon-s-home"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="/articles">
                    <i class="el-icon-document"></i>
                    <span slot="title">内容管理</span>
                </el-menu-item>
                <el-menu-item index="/image">
                    <i class="el-icon-picture"></i>
                    <span slot="title">素材管理</span>
                </el-menu-item>
                <el-menu-item index="/addArticle">
                    <i class="el-icon-s-promotion"></i>
                    <span slot="title">发布文章</span>
                </el-menu-item>
                <el-menu-item index="/comment">
                    <i class="el-icon-chat-dot-round"></i>
                    <span slot="title">评论管理</span>
                </el-menu-item>
                <el-menu-item index="/fans">
                    <i class="el-icon-setting"></i>
                    <span slot="title">粉丝管理</span>
                </el-menu-item>
                <el-menu-item index="/settings">
                    <i class="el-icon-setting"></i>
                    <span slot="title">个人设置</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header class="header">Header</el-header>
            <el-main class="main">Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'Layout',
  props: { },
  data () {
    return { }
  },
  computed: { },
  created () { },
  mounted () { }
}
</script>

<style lang="less">
    /* 外层的容器占满整个页面 */
    .layout-container {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    .aside {
        background-color: #002033;
        .el-menu {
            border-right: none;
        }
        .logo{
            width: 100%;
            height: 60px;
            background: #002244 url(../../assets/logo_admin.png) no-repeat center / 140px auto;
        }
        // 覆盖background 的图片和大小，类书写在logo的下方。
        .minLogo{
            background-image: url(../../assets/logo_admin_01.png);
            background-size: 36px auto;
        }
    }

    .header {
        background-color: #b3c0d1;
    }

    .main {
        background-color: #e9eef3;
    }
</style>
