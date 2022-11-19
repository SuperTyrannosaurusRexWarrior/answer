<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
        </el-row>
      </el-header>
      <el-row>
        <el-col :span="4">
          <el-menu default-active="1-1" 
            class="el-menu-vertical-demo"
            @open="handleOpen" 
            @close="handleClose"
            @select="handleSelect"
            :unique-opened="menuConfig.isOpened"
            :router="menuConfig.isRouter">
            <el-menu-item index="list">
              <i class="el-icon-document"></i>
              <span slot="title">课程列表</span>
            </el-menu-item>
            <el-menu-item index="puls">
              <i class="el-icon-circle-plus-outline"></i>
              <span slot="title">添加课程</span>
            </el-menu-item>
            <el-menu-item index="personalCenter">
              <i class="el-icon-edit-outline"></i>
              <span slot="title">个人信息</span>
            </el-menu-item>
            <el-menu-item index="setting">
              <i class="el-icon-setting"></i>
              <span slot="title">基础设置</span>
            </el-menu-item>
            <el-menu-item index="about">
              <i class="el-icon-info"></i>
              <span slot="title">关于我们</span>
            </el-menu-item>
          </el-menu>
        </el-col>
        <el-col :span="18">
          <router-view></router-view>
        </el-col>
      </el-row>
    </el-container>

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  data() {
    return {
      menuConfig:{
        isRouter: true,
        isOpened: true
      }
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath){
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang="less">
.el-page-header {
  margin-top: 10px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #00ffc3;
}

.grid-content {
    border-radius: 4px;
    min-height: 60px;
  }
</style>
