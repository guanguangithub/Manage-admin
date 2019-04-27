<template>
  <div class="add-wraps">
    <div class="header">
      <h3 v-if="ischange">添加试题</h3>
      <h3 v-else>编辑试题</h3>
    </div>
    <div class="section">
      <div class="content">
        <div class="content-top">
          <p>题目信息</p>
          <span>题干</span>
          <p class="inp">
            <el-input v-model="contenttitle" placeholder="请输入内容" @blur="getinp($event)" />
          </p>
        </div>
        <div class="content-main">
          <p>题目主题</p>
          <div class="content-box">
            <markdown-editor v-model="inpustem" />
          </div>
          <div class="select-check">
            <p>请选择考试类型</p>
            <el-select v-model="exam" placeholder="请选择" @change="getvalue">
              <el-option
                v-for="item in examlist.data"
                :key="item.exam_id"
                :value="item.exam_id"
                :label="item.exam_name"
              />
            </el-select>
          </div>
          <div class="select-check">
            <p>请选择以下课程</p>
            <el-select v-model="subject" placeholder="请选择" @change="getsubject">
              <el-option
                v-for="item in subjectlist.data"
                :key="item.subject_id"
                :label="item.subject_text"
                :value="item.subject_id"
              />
            </el-select>
          </div>
          <div class="select-check">
            <p>请选择题目类型</p>
            <el-select v-model="questions" placeholder="请选择" @change="getquestions">
              <el-option
                v-for="item in getquestionslist.data"
                :key="item.questions_type_id"
                :value="item.questions_type_id"
                :label="item.questions_type_text"
              />
            </el-select>
          </div>
          <p>答案信息</p>
          <div class="content-box">
            <markdown-editor v-model="content" />
          </div>
        </div>
        <!-- 提交时请求接口 /exam/questions 参数questions_type_id(试题类型id)  questions_stem(题干) subject_id(课程id) exam_id(考试类型id) user_id(用户id) questions_answer(题目答案) title(试题的标题)-->
        <el-button type="primary" @click="sub">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MarkdownEditor from '@/components/MarkdownEditor'
export default {
  components: { MarkdownEditor },
  props: {},
  data() {
    return {
      exam: '',
      questions: '',
      subject: '',
      inpustem: '', // 题干
      ischange: true,
      hasid: '',
      detailobj: {},
      content: '',
      contenttitle: ''
    }
  },
  computed: {
    // 获取到getters上的examlist
    ...mapGetters([
      'examlist',
      'subjectlist',
      'getquestionslist',
      'checkitemlist'
    ])
  },
  mounted() {
    this.getexamtype() // 初始化数据考试类型的数据
    this.getexamsubject()
    this.getQuestionsType()
    this.checkitems()
    const id = this.$route.query.id
    this.detailobj = this.checkitemlist.find((item, ind) => {
      return item.questions_id === id
    })
    this.getinitId()
    if (!this.ischange && this.detailobj) {
      this.exam = this.detailobj.exam_id
      this.questions = this.detailobj.questions_type_id
      this.subject = this.detailobj.subject_id
      this.contenttitle = this.detailobj.title
      this.inpustem = this.detailobj.questions_stem
      this.content = this.detailobj.questions_answer
    }
  },
  methods: {
    ...mapActions({
      // 前面的属性是自由命名的 ：第一个是命名空间的文件名/ 最后的这个是命名空间中actions中的方法
      getexamtype: 'examType/getexamtype',
      getexamsubject: 'examType/getexamsubject',
      getQuestionsType: 'examType/getquestionstype',
      addquestions: 'examType/addquestionstype',
      checkitems: 'examType/checkitems',
      updateQuestionsType: 'examType/updateQuestionsType'
    }),
    getinitId() {
      // 如果有id说明是编辑页 ischange就要变为false
      this.hasid = this.$route.query.id
      if (this.hasid) {
        this.ischange = false
      }
    },
    getvalue(value) {
      this.exam = value
    },
    getsubject(value) {
      this.subject = value
    },
    getquestions(value) {
      this.questions = value
    },
    getinp(e) {
      this.contenttitle = e.target.value
    },

    sub() {
      if (this.ischange) { // 如果是添加试题 就发送添加试题的接口
        if (this.inpustem !== '' && this.contenttitle !== '' && this.content !== '' && this.exam !== '' && this.questions !== '' && this.subject !== '') {
          this.$confirm('确定要添加是试题吗？', '真的要添加吗', {
            configtext: '确定',
            deteleconfig: '取消'
          })
            .then(() => {
              this.addquestions({ // 传参
                questions_type_id: this.questions,
                questions_stem: this.inpustem,
                subject_id: this.subject,
                exam_id: this.exam,
                user_id: 'w6l6n-cbvl6s',
                questions_answer: this.content,
                title: this.contenttitle
              })
              this.$message({
                type: 'success',
                message: '添加成功!'
              })
              this.exam = ''
              this.questions = ''
              this.subject = ''
              this.inpustem = '' // 题干
              this.contenttitle = '' // 题目
              this.content = '' // 答案
            })
            .catch(() => {
              this.$message({
                type: 'info',
                message: '已取消添加'
              })
            })
        } else {
          alert('您的参数不足')
        }
      } else { // 如果是更新试题  就发送更新试题的接口
        if (this.inpustem !== '' && this.contenttitle !== '' && this.content !== '' && this.exam !== '' && this.questions !== '' && this.subject !== '') {
          this.$confirm('确定要修改试题吗？', '真的要修改吗', {
            configtext: '确定',
            deteleconfig: '取消'
          })
            .then(() => {
              // 调用方法传参
              this.updateQuestionsType({ // 传参
                questions_id: this.$route.query.id,
                questions_type_id: this.questions,
                questions_stem: this.inpustem,
                subject_id: this.subject,
                exam_id: this.exam,
                user_id: 'w6l6n-cbvl6s',
                questions_answer: this.content,
                title: this.contenttitle
              }).then((res) => {
                if (res) {
                  if (res.code === 1) {
                    alert(res.msg)
                    location.href = 'http://169.254.12.1:9527/#/quetions/looks'
                  }
                } else {
                  alert('更新失败')
                }
              })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消编辑'
              })
            })
        } else {
          alert('您的参数不足')
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  font-size:16px;
}
@mixin num($w, $h) {
  width: $w;
  height: $h;
}
@mixin flex($j: space-between) {
  display: flex;
  justify-content: $j;
  align-items: center;
  display: -webkit-flex;
  -webkit-justify-content: $j;
  -webkit-align-items: center;
}

.add-wraps {
  @include num(100%, 100%);
  background: #f0f2f5;
  overflow-y: auto;
}
.add-wraps {
  .header {
    @include num(100%, 100px);
    h3 {
      @include num(100%, 100px);
      line-height: 100px;
      font-weight: 400;
      font-size: 24px;
      text-indent: 2em;
    }
  }
  .section {
    @include num(100%, 100%);
    .content {
      padding-left: 24px;
      width: 95%;
      height: 100%;
      margin: 0 auto;
      border-radius: 10px;
      background: #fff;
      .content-top {
        width: 100%;
        height: 120px;
        & > p {
          @include num(100%, 45px);
          line-height: 45px;
        }
        .inp {
          width: 30%;
        }
      }
    }
  }
}

.content-main {
  & > p {
    @include num(100%, 50px);
    line-height: 50px;
  }
}
.content-box {
  position: relative;
  width: 96%;
  height: 500px;
  overflow: hidden;
  border:1.5px solid #ccc;

}
.select-check {
  @include num(100%, 100px);
  margin: 5px 0px;
  & > p {
    @include num(100%, 45px);
    line-height: 45px;
  }
}
.el-select-dropdown__item{
  padding-left:12px;
}
.el-button--medium {
  margin: 20px 0;
  @include num(111px, 40px);
  background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
}

</style>
