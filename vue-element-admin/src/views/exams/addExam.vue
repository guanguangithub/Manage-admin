<template>
  <div class="addexam-bg">
    <h5>添加考试</h5>
    <ul class="addexam-container">
      <li>
        <label for="paper-type"> <span class="addexam-must">*</span> 试卷名称</label>
        <span class="type-ipt"><el-input v-model="input" placeholder="请输入内容" size="large" /></span>

      </li>
      <li>
        <label for="exam-type"> <span class="addexam-must">*</span> 选择考试类型</label>
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

      </li>
      <li>
        <label for="lesson-type"> <span class="addexam-must">*</span> 选择课程</label>
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

      </li>
      <li>
        <label for="setting-count"> <span class="addexam-must">*</span> 设置数量：</label>
        <span class="count-ipt">
          <el-input v-model="Countinput" type="number" size="large" />
        </span>

      </li>
      <li>
        <label for="exam-time"> <span class="addexam-must">*</span> 考试时间</label>
        <div class="block">
          <el-date-picker
            v-model="startValue"
            size="large"
            type="datetime"
            placeholder="选择日期时间"
            default-time="00:00:00"
          /> -
          <el-date-picker
            v-model="endValue"
            size="large"
            type="datetime"
            placeholder="选择日期时间"
            default-time="12:00:00"
          />
        </div>
      </li> <!--  -->
      <li>
        <span class="submitbtn"><el-button type="primary">创建试卷</el-button></span>

      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
  }
}
</script>

<style lang="scss">

    .addexam-bg{
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
    }
    .addexam-container{
        padding:0;
        margin:0;
        box-sizing:border;
        border-radius: 3px;
        width: 100%;
        background:#fff;
        padding:10px 24px 40px 24px;
        font-size: 16px;
        color:#333;
        list-style-type:none;
        >li{
            display:flex;
            flex-direction: column;
            justify-content: center;
            margin-top:20px;
            >label{
                margin:15px 0;
                font-weight: normal;
                font-size: 18px;
            }
        }
        >li:last-child{
            margin-top:40px;
        }
        >li:first-child{
            margin-top:0px;
        }
    }
    .addexam-must{
        color:#F5222D;
        margin-right:5px;
    }
    .type-ipt{
        width: 60%;
    }
    .count-ipt{
        width: 10%;
    }
    .el-button--primary{
        background:linear-gradient(-90deg,#4e75ff,#0139fd)!important;
        border:0!important;
        width:136px!important;
        height:35px!important;
        // padding:0 40px!important;

    }
</style>
