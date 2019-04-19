<template>
  <div class="add-wraps">
    <div class="header">
      <!-- 查看所有试题 /exam/questions/new -->
      <h3>查看试题</h3>
    </div>
    <div class="section">
      <div class="content">
        <div class="content-top">
          <!-- 课程类型/exam/subject -->
          <ul class="type-course">
            <p>课程类型</p>
            <li>all</li>
            <li
              v-for="item in subjectlist.data"
              :key="item.subject_id"
            >{{ item.subject_text }}</li>
          </ul>
          <div class="type-exam">
            <!-- 考试类型/exam/examType    题目类型 -->
            <p>
              <span>考试类型:</span>
              <el-select v-model="exam" placeholder="请选择" @change="getvalue">
                <el-option
                  v-for="item in examlist.data"
                  :key="item.exam_id"
                  :value="item.exam_id"
                  :label="item.exam_name"
                />
              </el-select>
            </p>

            <p>
              <span>题目类型:</span>
              <el-select v-model="questions" placeholder="请选择" @change="getquestions">
                <el-option
                  v-for="item in getquestionslist.data"
                  :key="item.questions_type_id"
                  :value="item.questions_type_id"
                  :label="item.questions_type_text"
                />
              </el-select>
            </p>
            <el-button type="primary" icon="el-icon-search">查询</el-button>
          </div>
        </div>
        <div class="content-bottom">
          <div class="content-list">
            <!-- content-list是请求到的数据 渲染的 -->
            <div class="list-left">
              <p>哈哈</p>
              <p>
                <el-button
                  style="color: #1890ff;background: #e6f7ff;border-color: #91d5ff;"
                  @Click="godetail()"
                >代码补全</el-button>
                <el-button
                  style="color: #2f54eb;background: #f0f5ff; border-color: #adc6ff;"
                >javascript</el-button>
                <el-button
                  style="color: #fa8c16;background: #fff7e6;border-color: #ffd591;"
                >周考1</el-button>
              </p>
              <p><span style="fontSize:14px;color: #0139FD">萌二招财猫 发布</span></p>
            </div>
            <p>
              <!-- 进入编辑页之后 更新数据之后更新试题接口/exam/questions/update -->
              <a href="http://www.baidu.com">编辑</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {},
  props: {},
  data() {
    return {
      exam: '',
      questions: ''
    }
  },
  computed: {
    ...mapGetters(['examlist', 'subjectlist', 'getquestionslist'])
  },
  created() {},
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
      getQuestionsType: 'examType/getquestionstype',
      addquestions: 'examType/addquestionstype'
    }),
    godetail() {
      alert('11')
      this.$router.push('/looksdetail')
    }

  }
}
</script>
<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  font-size:14px;
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
  @include num(100%, 637px);
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
      font-size:24px;
      text-indent: 2em;
    }
  }
  .section {
    @include num(100%, 100%);
    .content {
      padding-left: 14px;
      width: 95%;
      height: 100%;
      margin: 0 auto;

      .content-top {
        width: 100%;
        height: 220px;
        border: 1px solid #fff;
        background: #fff;
        border-radius: 10px;
        .type-course {
          padding-left: 20px;
          width: 80%;
          height: 50px;
          @include flex(space-around);
          margin: 25px 0;
        }

        .type-exam {
          padding-left: 20px;
          @include num(70%,55px);
          @include flex(space-around);
          &>p{
            display: flex;
            align-items: center;

          }
          .el-button--medium {
            padding:8px 16px;
          background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
          }

        }
      }
    }
  }
}
.content-bottom {
  width: 100%;
  margin-top: 12px;
  padding: 18px;
  background: #fff;
  border-radius: 10px;
  .content-list {
    @include flex(space-between);
    @include num(100%, 114px);
    border-bottom: 1px solid #ccc;
    .list-left {
      display: flex;
      flex-direction: column;
      .el-button--medium {
        padding: 6px 12px;
      }
      p {
        padding: 6px 0px;
      }
    }
  }
}
</style>
