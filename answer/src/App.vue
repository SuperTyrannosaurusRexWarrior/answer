<template>
  <div id="app">
<<<<<<< HEAD
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>

    <el-row gutter="20">
      <el-col :span="6">
        <el-input placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input1"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input3"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input4"></el-input>
      </el-col>
    </el-row>
=======
>>>>>>> 1c8f5ba8d8aa80b25a4d97fb1e5b879dec61065f

  </div>
</template>

<script>

export default {
<<<<<<< HEAD
  name: 'app',
  components: {},
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
=======
  name: 'app'
>>>>>>> 1c8f5ba8d8aa80b25a4d97fb1e5b879dec61065f
}
</script>

<style scoped lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
