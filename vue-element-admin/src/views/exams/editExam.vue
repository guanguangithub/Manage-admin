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
            <dt><span>{{ i }}.{{ item.title }}</span> <span class="del" @click="dele(i)">删除</span></dt>
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
      <ul class="addList">
        <li v-for="(item,i) in this.allPapers" :key="i">
          <span>{{ item.title }}</span>
          <b class="addbtn" @click="addPaper(item)">添加</b></li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
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
      'newPaper',
      'allPapers'
    ])
  },
  methods: {
    ...mapActions({
      updateDetailPaper: 'exam/updateDetailPaper',
      getallPapers: 'exam/getallPapers'
    }),
    ...mapMutations({
      deletePaper: 'exam/DELETEPAPER',
      addnewPaper: 'exam/ADDNEWPAPER'
    }),
    addNewQuestion() {
      this.flag = false
      this.className = this.flag ? 'editexam-container' : 'editexam-container none'
      this.allQues = this.flag ? 'editexam-container none' : 'editexam-container'
      console.log(this.newPaper)
      this.getallPapers()
    },
    async jump() {
      const id = this.$route.params.id
      var questions_id = this.newPaper.questions ? this.newPaper.questions.map(item => item.questions_id) : []
      console.log(id, questions_id)
      // console.log(this.updateDetailPaper())
      await this.updateDetailPaper({ id: id, question_ids: JSON.stringify(questions_id) })
      this.$router.push({ path: '/exams/paperList' })
    },
    dele(i) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        console.log(i)
        this.deletePaper(i)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    addPaper(item) {
      this.flag = true
      this.className = this.flag ? 'editexam-container' : 'editexam-container none'
      this.allQues = this.flag ? 'editexam-container none' : 'editexam-container'
      this.addnewPaper(item)
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
code{
   white-space: normal;
            white-space: pre-wrap;
            word-wrap: break-word;
}
.addList{
  width: 100%;
  height:auto;
  >li{
    width: 100%;
    height:40px;
    border-bottom: 1px solid #eee;
    font-size: 16px;color:#555;
    box-sizing: border-box;
    padding:0 50px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    >span{}
    >.addbtn{
      color:#e44;
      font-size: 14px;
      background: #eee;
      padding: 8px 10px;
      border-radius: 5px;
    }
  }
}
</style>
