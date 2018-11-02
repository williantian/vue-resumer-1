<template>
    <div class="signInPage">
      <div class="picture">
        <img src="https://cdn.dribbble.com/users/4228/screenshots/4315235/confirm.jpg" style="width: 400px; height: 460px;" />
      </div>
      <div class="form">
        <el-form style="padding: 10px 20px" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="messages.userName"></el-input>
          </el-form-item>
          <el-form-item style="margin-top:16px" label="密码">
            <el-input v-model="messages.password"></el-input>
          </el-form-item>
        </el-form>
        <div class="buttons">
          <router-link to="/"><el-button class="sign" v-on:click="signInComfirm">登陆</el-button></router-link>
          <router-link to="signup"><el-button class="find" type="text">立即注册</el-button></router-link>
          <el-button class="find" type="text">忘记密码?</el-button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            messages: {
              uesrName: '',
              password: '' ,
              comfirmPasswork: '' ,
            }
          }
        },
      methods: {
          signInComfirm(){
            this.$emit('signInComfirm')
          }
      }
    }
</script>

<style scoped>
  .signInPage{
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 800px;
    box-shadow:  0 2px 5px 2px rgb(0,0,0,0.5);
  }
  .picture{
    width: 400px;
    height:460px;
  }
 .form{
   width:400px;
   padding-top: 100px;
 }
  .buttons{
    display: flex;
    justify-content: space-between;
    margin-top:40px;
  }
  .buttons .sign{
    margin-left: 10%;
  }
 .buttons .find{
   margin-right: 10%;
 }
</style>
