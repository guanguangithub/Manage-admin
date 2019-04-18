<template>
  <div class="addexam-bg">
    <h5>添加考试</h5>
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      size="large"
      :label-position="labelPosition"
      label-width="70px"
      class="demo-ruleForm"
    >
      <el-form-item label="活动名称" prop="name">
        <el-col :span="12"><el-input v-model="ruleForm.name" /></el-col>
      </el-form-item>
      <el-form-item label="选择考试类型" prop="regionType">
        <el-col :span="6">
          <el-select v-model="ruleForm.regionType" placeholder="选择考试类型">
            <el-option label="周考一" value="zhoukao1" />
            <el-option label="周考二" value="zhoukao2" />
            <el-option label="周考三" value="zhoukao3" />
            <el-option label="月考" value="yuekao" />
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="选择课程" prop="region">
        <el-col :span="6">
          <el-select v-model="ruleForm.region" placeholder="选择课程">
            <el-option label="javascript上" value="javascript上" />
            <el-option label="javascript下" value="javascript下" />
            <el-option label="模块化开发" value="模块化开发" />
            <el-option label="移动开发" value="移动开发" />
            <el-option label="渐进式开发" value="渐进式开发" />
            <el-option label="组件式开发" value="组件式开发" />
            <el-option label="项目实战" value="项目实战" />
            <el-option label="node高级" value="node高级" />
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="设置题量" prop="count">
        <el-col :span="3"> <el-input v-model="ruleForm.count" type="number" /></el-col>
      </el-form-item>
      <el-form-item label="考试时间" required>
        <el-col :span="9">
          <el-form-item prop="date1">
            <el-date-picker v-model="ruleForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
          </el-form-item>
        </el-col>
        <el-col class="line" :span="1"> &nbsp;-</el-col>
        <el-col :span="9">
          <el-form-item prop="date2">
            <el-time-picker v-model="ruleForm.date2" placeholder="选择时间" style="width: 100%;" />
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">创建试卷</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      labelPosition: 'top',
      ruleForm: {
        name: '',
        region: '',
        regionType: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        count: 4
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        count: [
          { required: true, message: '请输入题量', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss" scoped>
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
.el-form-item--medium .el-form-item__label{
  color:#d55;
}
  .el-button--primary{
        margin-left:20px;
        background:linear-gradient(-90deg,#4e75ff,#0139fd)!important;
        border:0!important;
        width:136px!important;
        height:38px!important;
    }
</style>
