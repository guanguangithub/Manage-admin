<template>
  <div class="box">
    <div class="top">
      学生管理
    </div>
    <div class="main">
      1
    </div>
    <div class="bottom">
      1
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .box {
    width: 100%;
    height: 100%;
    background: #ccc;
    overflow:auto;
  }
  .top{
    width: 94%;
    height: 100px;
    line-height: 100px;
    margin-left: 3%;
    font-size: 28px;
  }
  .main{
    margin-left: 3%;
    width: 94%;
    height: 100px;
    background: #fff;
    border-radius: 10px;
  }
  .bottom{
    margin-top: 20px;
    margin-left: 3%;
    width: 94%;
    height: 300px;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 30px;
  }
</style>
