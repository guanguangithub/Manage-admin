<template>
  <div class="paperList-bg">
    <h5>试卷列表</h5>
    <div class="paper-search">
      <label class="exam-type"> 考试类型:</label>
      <span>
        <el-select v-model="examValue" placeholder="请选择" size="large">
          <el-option
            v-for="item in examlist.data"
            :key="item.exam_id"
            :label="item.exam_name"
            :value="item.exam_id"
          />
        </el-select>
      </span>
      <!-- 课程选择 -->
      <label class="lesson-type"> 课程:</label>
      <span class="type-ipt">
        <el-select v-model="lessonValue" placeholder="请选择" size="large">
          <el-option
            v-for="item in subjectlist.data"
            :key="item.subject_id"
            :label="item.subject_text"
            :value="item.subject_id"
          />
        </el-select>
      </span>
      <span class="searchPaperBtn">
        <span class="search-icon"><svg-icon icon-class="search" /></span>
        <el-button type="primary" @click="searchBtn">搜索</el-button>

        <el-button type="primary" @click="excel">导出excal</el-button>
      </span>

    </div>
    <div class="paperList-container">
      <div class="paper-listop">
        <p>试卷列表</p>
        <p>
          <el-button plain @click="tab('all')">全部</el-button>
          <el-button plain @click="tab('pending')">进行中</el-button>
          <el-button plain @click="tab('done')">已结束</el-button>
        </p>

      </div>
      <div class="paper-list">
        <el-table
          size="large"
          :data="table"
          :row-style="getRowStyle"
          style="width: 100%"
          :header-cell-style="getRowClass"
        >
          <el-table-column
            prop="title"
            label="试卷信息"
            width="170"
          >
            <template slot-scope="scope">
              <b style="color:#333;font-weight:normal;">{{ scope.row.title }}</b><br>
              <span>考试时间：{{ scope.row.infoCon }}&nbsp;{{ scope.row.number }}道题作弊0分</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="grade_name"
            label="班级"
            width="180"
          >
            <template slot-scope="scope">
              <b style="color:#333;font-weight:normal;">考试班级</b><br>
              <span>{{ scope.row.grade_name.map(item=>item).join("") }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="user_name"
            label="创建人"
          />
          <el-table-column
            prop="start_time"
            label="开始时间"
          />
          <el-table-column
            prop="end_time"
            label="结束时间"
          />
          <el-table-column
            prop="operate"
            label="操作"
          >
            <template slot-scope="scope">
              <span href="#" class="detail" @click="handleClick(scope.row)">详情</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
// console.log({...mapActions()})
export default {
  data() {
    return {
      input: '',
      examValue: '',
      lessonValue: '',
      Countinput: 4,
      startValue: '',
      endValue: ''
    }
  },
  computed: {
    ...mapGetters([
      'table',
      'examlist',
      'subjectlist'
    ])
  },
  created() {
    this.getexamtype()
    this.getexamsubject()
    this.fatchExamList()
  },
  methods: {
    ...mapMutations({
      getConditionPaper: 'exam/GETCONDITIONPAPER'
    }),
    excel() {
      const tHeader = Object.keys(this.table[0])
      const list = this.table.map(item => {
        const arr = Object.values(item)
        return arr.map(item => JSON.stringify(item))
      })
        import('@/vendor/Export2Excel').then(excel => {
          excel.export_json_to_excel({
            header: tHeader,
            data: list,
            filename: '',
            bookType: 'xlsx'// excal后缀名， xlsx，csv，xls
          })
        })
    },
    async searchBtn() {
      // await this.getConditionPaper({exam_id:this.examValue,subject_id:this.lessonValue})
      await this.fatchExamList()
      this.getConditionPaper({ exam_id: this.examValue, subject_id: this.lessonValue })
    },
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background:#F4F7F9;height:70px;font-size:18px;color:#242525;font-weight:normal'
      } else {
        return ''
      }
    },
    getRowStyle({ row, column, rowIndex, columnIndex }) {
      return 'height:100px'
    },
    ...mapActions({
      fatchExamList: 'exam/fatchExamList',
      getexamtype: 'examType/getexamtype',
      getexamsubject: 'examType/getexamsubject'
    }),
    handleClick(row) {
      this.$router.push('/exams/paperDetail/' + row.exam_exam_id)
    },
    tab(a) {
      console.log(a)
    }
  }
}
</script>

<style lang="scss" scoped>
    .paperList-bg{
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
        .paper-search{
          width: 100%;
          height: 150px;
          box-sizing: border-box;
          padding:30px 35px 0;
          margin-bottom:30px;
          border-radius: 5px;
          background:#fff;
          .exam-type,.lesson-type{
             margin:15px 10px;
             font-weight: normal;
             font-size: 18px;
             color:#444;
          }
          .lesson-type{
            margin-left:50px;
          }
          .searchPaperBtn{
            position: relative;
          }
        }
        .paperList-container{
          width: 100%;
          background:#fff;
          height:auto;
          border-radius: 5px;
          padding:0 30px;
          .paper-listop{
            width:100%;
            height:80px;
            display:flex;
            justify-content: space-between;
            align-items: center;
          }

        }
    }
    .search-icon{
      position: absolute;
      top:1px;
      left:30%;
      color:#fff;
    }
    .el-button--primary{
        margin-left:20px;
        background:linear-gradient(-90deg,#4e75ff,#0139fd)!important;
        border:0!important;
        width:136px!important;
        height:35px!important;
    }
    .detail{
      color:#44f;
    }
</style>
