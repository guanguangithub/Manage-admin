<template>
  <div class="box">
    <div class="top">
      班级管理
    </div>
    <div class="main">
      <div class="but">
        <button> ＋ 添加班级</button>
      </div>
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
    height: 800px;
    background: #fff;
    border-radius: 10px;
    margin-bottom: 30px;
  }
  .inp{
    margin-left: 20px;
    padding-top: 20px;
    div{
      line-height: 40px;
    }
  }
  .but{
    width: 100%;
    height: 100px;
    line-height: 100px;
    margin-left: 10px;
    button{
      width: 200px;
      height: 50px;
      background: blue;
      border: none;
      border-radius: 5px;
      color: #fff;
    }
  }
</style>
