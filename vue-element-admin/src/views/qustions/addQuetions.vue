<template>
  <div class="add-wraps">
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
        <div class="content-main">
          <p>题目主题</p>
          <div class="content-box">
            <texaImg />
            <textarea id name cols="30" rows="10" placeholder="请输入内容..." />

          </div>
          <div class="select-check">
            <p>请选择考试类型</p>
            <el-select v-model="exam" placeholder="请选择" @change="getvalue">
              <el-option v-for="item in examlist.data" :key="item.exam_id" :value="item.exam_name" />
            </el-select>
          </div>
          <div class="select-check">
            <p>请选择以下课程</p>
            <el-select v-model="subject" placeholder="请选择">
              <el-option
                v-for="item in subjectlist.data"
                :key="item.subject_id"
                :value="item.subject_text"
              />
            </el-select>
          </div>
          <div class="select-check">
            <p>请选择题目类型</p>
            <el-select v-model="questions" placeholder="请选择">
              <el-option
                v-for="item in getquestionslist.data"
                :key="item.questions_type_id"
                :value="item.questions_type_text"
              />
            </el-select>
          </div>
          <div class="content-box">
            <texaImg />
            <!-- <div class="content-textarea">              -->
            <textarea id name cols="30" rows="10" placeholder="请输入内容..." />
            <!-- </div> -->
          </div>
        </div>
        <!-- 提交时请求接口 /exam/questions 参数questions_type_id(试题类型id)  questions_stem(题干) subject_id(课程id) exam_id(考试类型id) user_id(用户id) questions_answer(题目答案) title(试题的标题)-->
        <el-button type="primary">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import texaImg from '../../components/Tinymce'
export default {
  components: { texaImg },
  props: {},
  data() {
    return {
      exam: '',
      questions: '',
      subject: '',
      input: ''
    }
  },
  computed: {
    // 获取到getters上的examlist
    ...mapGetters(['examlist', 'subjectlist', 'getquestionslist'])
  },
  mounted() {
    this.getexamtype() // 初始化数据考试类型的数据
    this.getexamsubject()
    this.getQuestionsType()
  },
  methods: {
    ...mapActions({
      // 前面的属性是自由命名的 ：第一个是命名空间的文件名/ 最后的这个是命名空间中actions中的方法
      getexamtype: 'examType/getexamtype',
      getexamsubject: 'examType/getexamsubject',
      getQuestionsType: 'examType/getquestionstype'
    }),

    getvalue(value) {
      console.log(value)
    }
  }
}
</script>
<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
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
.content-box{
  position:relative;
  width:96%;
  height:498px;
  overflow: hidden;
  textarea {
     position:absolute;
     left:0;
     top:110px;
     outline: none;
    @include num(100%, 70%);
  }

}

.select-check {
  @include num(100%, 100px);
  margin: 5px 0px;
  & > p {
    @include num(100%, 45px);
    line-height: 45px;
  }
}
.el-button--medium {
  margin: 20px 0;
  @include num(111px, 40px);
  background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
}
textarea {
  border-top: none;
  border-bottom: none;
}
</style>
