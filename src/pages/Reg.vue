<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
  <h3 style="height: 40px; line-height: 40px; width: 550px; margin-bottom: 22px">注册页面</h3>
    <el-form-item label="用户名" prop="username">
      <el-input type="username" v-model="ruleForm.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password">
      <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login()">登录</el-button>
      <el-button @click="reg">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'reg',
  data() {
    var user = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    var pass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: user, trigger: "blur" }],
        password: [{ validator: pass, trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      this.$router.replace('/login')
    },
    reg() {
      const { ruleForm } = this;
        this.$request.post("/user", {
        ...ruleForm
      });
    }
  }
};
</script>

<style lang="scss">
.el-form {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
}
</style>