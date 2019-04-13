<template>
  <div class="paperList-bg">
    <h5>添加考试</h5>
    <div class="paper-search">
      <label class="exam-type"> 考试类型:</label>
      <span>
        <el-select v-model="examValue" placeholder="请选择" size="large">
          <el-option
            v-for="item in examOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </span>
      <!-- 课程选择 -->
      <label class="lesson-type"> 课程:</label>
      <span class="type-ipt">
        <el-select v-model="lessonValue" placeholder="请选择" size="large">
          <el-option
            v-for="item in lessonOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </span>
      <span class="searchPaperBtn"><span class="search-icon"><svg-icon icon-class="search" /></span><el-button type="primary">搜索</el-button></span>

    </div>
    <div class="paperList-container">
      <div class="paper-listop">
        <p>试卷列表</p>
        <p>
          <el-button plain>全部</el-button>
          <el-button plain>进行中</el-button>
          <el-button plain>已结束</el-button>
        </p>
      </div>
      <div class="paper-list">
        <el-table
          size="large"
          :data="tableData"
          :row-style="getRowStyle"
          style="width: 100%"
          :header-cell-style="getRowClass"
        >
          <el-table-column
            prop="paperInfo"
            label="试卷信息"
            width="170"
          />
          <el-table-column
            prop="classes"
            label="考试班级"
            width="180"
          />
          <el-table-column
            prop="creater"
            label="创建人"
          />
          <el-table-column
            prop="startTime"
            label="开始时间"
          />
          <el-table-column
            prop="endTime"
            label="结束时间"
          />
          <el-table-column
            prop="operate"
            label="操作"
          >
            <a href="#" class="detail">详情</a>
          </el-table-column>
        </el-table>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          paperInfo: 'Nodejs开发第二周摸底考试  考试时间',
          classes: '1701B 1701C',
          h5: 'ghjk',
          creater: 'chenmanjie',
          startTime: '2019-04-12 15:33:58',
          endTime: '2019-04-12 15:34:01',
          operate: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      input: '',
      examOptions: [{
        value: '选项1',
        label: ' 周考1'
      }, {
        value: '选项2',
        label: '周考2'
      }, {
        value: '选项3',
        label: '周考3'
      }, {
        value: '选项4',
        label: '月考'
      }],
      examValue: '',
      lessonOptions: [{
        value: '选项1',
        label: ' javascript上'
      }, {
        value: '选项2',
        label: 'javascript下'
      }, {
        value: '选项3',
        label: 'jquery'
      }, {
        value: '选项4',
        label: 'h5'
      },
      {
        value: '选项5',
        label: 'nodejs'
      }, {
        value: '选项6',
        label: 'vue'
      }, {
        value: '选项7',
        label: 'react'
      }, {
        value: '选项8',
        label: '小程序'
      }, {
        value: '选项9',
        label: '实训1'
      }, {
        value: '选项10',
        label: '实训2'
      }],
      lessonValue: '',
      Countinput: 4,
      startValue: '',
      endValue: ''

    }
  },
  methods: {

    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background:#F4F7F9;height:70px;font-size:18px;color:#242525;font-weight:normal'
      } else {
        return ''
      }
    },
    getRowStyle({ row, column, rowIndex, columnIndex }) {
      return 'height:100px'
    }
  }
}
</script>

<style lang="scss">

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
          height:500px;
          overflow-y:auto;
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
