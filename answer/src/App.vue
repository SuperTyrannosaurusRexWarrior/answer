<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="18" :offset="3">
        <el-container>
          <el-header>
              <el-row :gutter="20" class="grid-content bg-purple-dark">
                <el-col :span="18">
                  <el-breadcrumb separator="/" style="display: flex;">
                    <el-breadcrumb-item v-for="(item,index) in items" :key="item.id" :to="item.to">{{item.title}}</el-breadcrumb-item>
                  </el-breadcrumb>
                </el-col>
                <el-col :span="6" :offset="12">
                  <el-avatar :size="50" :src="user.photo">
                  </el-avatar>
                </el-col>
              </el-row>
          </el-header>
          <el-row>
            <el-col :span="5">
              <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen"  @close="handleClose" @select="handleSelect" :unique-opened="menuConfig.isOpened" :router="menuConfig.isRouter">
                <el-menu-item v-for="(menu,index) in menus" :index="menu.index">
                  <i :class="menu.icon"></i>
                  <span slot="title">{{menu.title}}</span>
                </el-menu-item>
              </el-menu>
            </el-col>
            <el-col :span="18">
              <router-view></router-view>
            </el-col>
          </el-row>
        </el-container>
      </el-col>
    </el-row>
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
      },
      
      user:{
        photo:require("../public/1.jpg"),
        name:"",
        account:"",
        password:"",
        sex:"",
        birthday:"",
        entryTime:"",
        job:"",
        phone:"",
        email:""
      },

      items:[{
          id:1,
          title:"首页",
          to:{path : "/"}
        },{
          id:2,
          title:"课程",
          to:{path : "/"}
        },{
          id:3,
          title:"OK",
          to:{path : "/"}
        }],

      menus:[{
        icon:"el-icon-document",
        index:"list",
        title:"课程列表"
      },{
        icon:"el-icon-circle-plus-outline",
        index:"puls",
        title:"添加课程"
      },{
        icon:"el-icon-edit-outline",
        index:"personalCenter",
        title:"个人信息"
      },{
        icon:"el-icon-setting",
        index:"setting",
        title:"基础设置"
      },{
        icon:"el-icon-info",
        index:"about",
        title:"关于我们"
      }]
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
  margin-top: 0;
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
  background: linear-gradient(to right,#00b865, #00febe);;
}

.el-breadcrumb{
  color: #fff;
  width: 300px;
}

.grid-content {
  display: flex;
  align-items: center;
  border-radius: 4px;
  min-height: 60px;
}
</style>
