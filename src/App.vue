<template>
  <div class="app">
    <div class="login-container">
      <el-form
        ref="formRef"
        style="max-width: 350px"
        :model="user"
        label-width="auto"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            v-model.number="user.username"
            type="text"
            autocomplete="off"
          />
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="user.password" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(formRef)"
            >登录</el-button
          >
          <el-button @click="resetForm(formRef)">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import { reactive, ref } from "vue";
import type { FormInstance } from "element-plus";
import { ElMessage } from "element-plus";
import { requestPost } from "./api/request";
const formRef = ref<FormInstance>();

const user = reactive({
  username: "",
  password: "",
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!user.username || !user.password) {
    ElMessage({
      message: "账号或密码不能为空.",
      type: "warning",
    });
    return;
  } else {
    requestPost("/login", user, null).then((res: any) => {
      if (res.code === 200) {
        handleSuccess();
      } else {
        ElMessage({
          message: "账号或密码错误.",
          type: "error",
        });
      }
    });
  }
};

const handleSuccess = () => {
  if (formRef.value) {
    formRef.value.resetFields();
    console.log(user);
    alert("登录成功");
  }
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
<style lang="less" scoped>
.app {
  display: flex;
  justify-content: center;
}
.login-container {
  margin-top: 15%;
  padding: 20px;
  align-items: center;
}
</style>
