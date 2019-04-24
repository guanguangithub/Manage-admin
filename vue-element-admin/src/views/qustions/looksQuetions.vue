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
            <li :class="ischeckout?'liclass':''" @click="allchange">all</li>
            <li v-for="(item,index) in subjectlist.data" :key="index" :class="(activeclass===index||ischeckout)?'liclass':''" @click="changestyle(index,item.subject_id)">{{ item.subject_text }}</li>
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
            <el-button type="primary" icon="el-icon-search" @click="refer">查询</el-button>
          </div>
        </div>
        <div class="content-bottom">
          <div
            v-for="(item,index) in checkitemlist"
            :key="index"
            class="content-list"
            :class="activeid===index?'currents':''"
            @click="$router.push({path:'/permission',query:{id:item.questions_id}})"
            @mouseover="changeclass(index)"
          >
            <!-- content-list是请求到的数据 渲染的 -->
            <div class="list-left">
              <p>{{ item.title }}</p>
              <p>
                <el-button
                  style="color: #1890ff;background: #e6f7ff;border-color: #91d5ff;"
                >{{ item.questions_type_text }}</el-button>
                <el-button
                  style="color: #2f54eb;background: #f0f5ff; border-color: #adc6ff;"
                >{{ item.subject_text }}</el-button>
                <el-button style="color: #fa8c16;background: #fff7e6;border-color: #ffd591;">{{ item.exam_name }}</el-button>
              </p>
              <p>
                <span style="fontSize:14px;color: #0139FD">{{ item.user_name }} 发布</span>
              </p>
            </div>
            <p>
              <!-- 进入编辑页之后 更新数据之后更新试题接口/exam/questions/update -->
              <a :href="['http://169.254.12.1:9527/#/quetions/adds?id='+item.questions_id]">编辑</a>
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  components: {},
  props: {},
  data() {
    return {
      exam: '',
      questions: '',
      subject: '',
      activeid: -1,
      activeclass: -1,
      ischeckout: false,
      newarr: []
    }
  },
  computed: {
    ...mapGetters([
      'examlist',
      'subjectlist',
      'getquestionslist',
      'checkitemlist'
    ])
  },
  created() {
    this.checkitems()
  },
  mounted() {
    this.getexamtype() // 初始化数据考试类型的数据
    this.getexamsubject()
    this.getQuestionsType()
    this.checkitems()
  },
  methods: {
    ...mapActions({
      // 前面的属性是自由命名的 ：第一个是命名空间的文件名/ 最后的这个是命名空间中actions中的方法
      getexamtype: 'examType/getexamtype',
      getexamsubject: 'examType/getexamsubject',
      getQuestionsType: 'examType/getquestionstype',
      addquestions: 'examType/addquestionstype',
      checkitems: 'examType/checkitems',
      condition: 'examType/condition'
    }),
    ...mapMutations({
      changeitemlist: 'examType/changeitemlist'// 直接把mutation的东西获取出来
    }),

    getvalue(value) {
      this.exam = value
    },
    getquestions(value) {
      this.questions = value
    },
    allchange() {
      this.ischeckout = !this.ischeckout
      this.activeclass = -1
    },
    changestyle(index, id) { // 点击每条的时候 rang
      this.ischeckout = false
      this.activeclass = index
      this.subject = id
    },
    changeclass(index) {
      this.activeid = index
    },
    async refer() {
      await this.checkitems()
      if (this.subject !== '' && this.questions !== '' && this.exam !== '') {
        const { subject, questions, exam } = this
        this.changeitemlist({ subject, questions, exam })// 调用这个方法
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
  font-size: 14px;
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
      font-size: 24px;
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
          padding-left: 40px;
          width:90%;
          flex-wrap:wrap;
          @include flex();
          margin: 25px 0;
          li {
            font-size: 12px;

          }
        }
        .type-exam {
          @include num(70%, 55px);
          @include flex(space-around);
          & > p {
            display: flex;
            align-items: center;
          }
          .el-button--medium {
            padding: 8px 26px;
            background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
          }
        }
      }
    }
  }
}
.content-bottom {
  width: 100%;
  margin-top: 12px;
  padding: 15px;
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
        color: rgba(0, 0, 0, 0.65);
      }
    }
  }
}
a {
  color: #0027d6;
}
.currents {
  background: #e6f7ff;
}
li.liclass{
  padding:5px 8px;
  margin:0 2px;
  color:#fff;
  background-color: #0139FD;
}
</style>
