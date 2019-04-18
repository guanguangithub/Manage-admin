<template>
  <div class="editexam-bg">
    <h5>{{ flag?"添加试题":"所有题目" }}</h5>
    <div :class="className">
      <p><el-button plain size="large" @click="addNewQuestion">添加新题</el-button></p>
      <div class="content">
        <h3>十点多</h3>
        <span>考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于</span>
        <el-button type="primary" size="large">创建试卷</el-button>
      </div>
    </div>
    <div :class="allQues">
      ome contents...

      Some contents...

      Some contents...
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: true,
      className: '',
      allQues: 'editexam-container none'
    }
  },
  methods: {
    addNewQuestion() {
      this.flag = false
      this.className = this.flag ? 'editexam-container' : 'editexam-container none'
      this.allQues = this.flag ? 'editexam-container none' : 'editexam-container'
    }
  }
}
</script>
<style lang="scss" scoped>
.editexam-bg{
    height:698px;
    background: #F0F2F5;
    padding:0 35px;
    overflow-y: auto;
    >h5{padding:0;
        margin:0;
        width: 100%;
        height: 100px;
        line-height: 100px;
        font-weight: normal;
        font-size: 24px;
        color:#242425;
    }
    .editexam-container{
        width: 100%;
        height: auto;
        padding: 30px;
        background: #fff;
        border-radius: 10px;
    }
}
.none{
    display:none
}
.content{
    width: 90%;
    min-height: 200px;
    padding:40px;
    box-sizing: border-box;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    >h3{
        width:100%;
        text-align: center;
        height:70px;
        font-size: 24px;
        font-weight: normal;
        line-height:70px;
    }
    >span{
        width:50%;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        padding:0 40px 20px 40px;
        box-sizing: border-box;
        margin:20px 0;
    }
}
.el-button--primary{
    display:block;
    margin-left:20px;
    background:linear-gradient(-90deg,#4e75ff,#0139fd)!important;
    border:0!important;
    width:150px;
}
</style>
