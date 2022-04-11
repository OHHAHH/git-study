<template>
<div class="login">
   <div class="title">
       <h2><i class="el-icon-eleme"></i>学生成绩管理系统</h2>
   </div>
    <div >
               
        <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="学生登录" name="student"></el-tab-pane>
            <el-tab-pane label="教师登录" name="teacher"></el-tab-pane>
            <el-tab-pane label="管理员登录" name="admin"></el-tab-pane>
        </el-tabs>  u
            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-button type="primary" @click="submitLogin" style="width:100%">登录</el-button>
        </el-form> 
    </div>
</div>
</template>

<script>

export default {
    name:"Login",
    data(){
        return{
            activeName: 'student',
            loginForm:{
                username:'admin',
                password:'123',
            } ,
            rules:{
                username:[{required:true,message:'请输入用户名',trigger:'blur'}],
                password:[{required:true,message:'请输入密码',trigger:'blur'}],

            }
        }
    },
    methods:{
        handleClick(tab, event) {
        console.log(tab, event);
      },
        submitLogin(){
            this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.$router.push({
                path:'/home'
            })
          } else {
            this.$message.error('请输入完全');
            return false;
          }
        });
        }
    }
}
</script>

<style>
   .login {
    height: 100%;
  }
   .loginContainer{
       border-radius: 15px;
       background-clip: padding-box;
       margin: 180px auto;
       width: 350px;
       padding: 15px 35px 15px 35px;
       background: white;
       border: 1px solid yellowgreen;
       box-shadow: 0 0 25px #cac6c6;
       
   }
   
</style>