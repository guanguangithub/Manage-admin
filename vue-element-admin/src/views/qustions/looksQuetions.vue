<template>
  <div class="add-wraps">
    <div class="divscroll">
      <div class="header">
        <h3>添加试题</h3>
      </div>
      <div class="section">
        <div class="content">
          <div class="content-top">
            <p>题目信息</p>
            <span>题干</span>
            <p class="inp">
              <el-input v-model="input" placeholder="请输入内容" />
            </p>
          </div>
          <div class="content-main" />

        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {

    }
  }
}
</script>
<style scoped  lang="scss">
    .check-item{
        color:red;
    }
</style>
