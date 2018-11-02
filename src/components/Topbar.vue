<template>
   <div id="topbar">
    <div class="logo">
      VueResumer
    </div>
    <div class="actions">
      <router-link to="/signup"><el-button type="primary">注册</el-button></router-link>
      <router-link to="/signin"><el-button>登陆</el-button></router-link>
      <el-button v-on:click="preview">预览</el-button>
    </div>
   </div>
</template>

<script>
  export default {
    methods: {
      preview(){
        this.$emit('preview')
      }
    }
  }
</script>
<style>
  #topbar{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      font-size:20px;
  }
</style>
