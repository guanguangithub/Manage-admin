<template>
  <div class="editexam-bg">
    <h5>{{ flag?"添加试题":"所有题目" }}</h5>
    <div :class="className">
      <p><el-button plain size="large" @click="addNewQuestion">添加新题</el-button></p>
      <div class="content">
        <h3>{{ this.newPaper.title }}</h3>
        <span>考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于</span>
        <div class="questions">
          <dl v-for="(item,i) in this.newPaper.questions" :key="item.questions_id" class="question-list">
            <dt><span>{{ i }}.{{ item.title }}</span> <span class="del" @click="dele(item.questions_id)">删除</span></dt>
            <dd>
              <pre>
                <code>{{ item.questions_stem }}</code>
              </pre></dd>
          </dl>
        </div>
        <el-button type="primary" size="large" @click="jump">创建试卷</el-button>
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
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      flag: true,
      className: '',
      allQues: 'editexam-container none'
    }
  },
  computed: {
    ...mapGetters([
      'newPaper'
    ])
  },
  methods: {
    ...mapActions({
      updateDetailPaper: 'exam/updateDetailPaper'
    }),
    addNewQuestion() {
      this.flag = false
      this.className = this.flag ? 'editexam-container' : 'editexam-container none'
      this.allQues = this.flag ? 'editexam-container none' : 'editexam-container'
    },
    async jump() {
      const id = this.$route.params.id
      var questions_id = this.newPaper.questions.map(item => item.questions_id)
      await this.updateDetailPaper({ id: id, question_ids: JSON.stringify(questions_id) })
      this.$router.push({ path: '/exams/paperList' })
    },
    dele() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
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
      border-radius: 10px;
      background: #fff;
  }
}
.none{
    display:none
}
.content{
    background: #fff;
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
.questions{
  width: 100%;
  height:auto;
  >.question-list{
    width: 100%;padding:10px;
    min-height: 80px;
    border:1px solid #eee;
    padding:20px;
    margin:20px 0;
  >dt{
     display: flex;
     justify-content: space-between;
      align-items: center;
      margin:20px 0;
    .del{
      font-size: 16px;
      color:#44f;
      &:hover{
        color:#66e;
        cursor: pointer;
      }
    }
   }
   dd{
    line-height: 30px;
   }
  }
}
</style>
