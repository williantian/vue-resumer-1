<template>
   <div id="topbar">
    <div class="logo">
      VueResumer
    </div>
    <div class="actions">
      <el-button type="primary">注册</el-button>
      <el-button>登陆</el-button>
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
