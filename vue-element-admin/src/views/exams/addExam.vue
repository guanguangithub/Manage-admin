<template>
  <div class="addexam-bg">
    <h5>添加考试</h5>
    <div class="addexam-container">
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
          <el-col :span="12"><el-input v-model="ruleForm.name" size="large" /></el-col>
        </el-form-item>
        <el-form-item label="选择考试类型" prop="regionType">
          <el-col :span="10">
            <el-select v-model="ruleForm.regionType" placeholder="选择考试类型" size="large">
              <el-option v-for="item in this.examlist.data" :key="item.exam_id" :label="item.exam_name" :value="item.exam_id" />
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="选择课程" prop="region">
          <el-col :span="10">
            <el-select v-model="ruleForm.region" placeholder="选择课程" size="large">
              <el-option v-for="item in this.subjectlist.data" :key="item.subject_id" :label="item.subject_text" :value="item.subject_id" />
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="设置题量" prop="count">
          <el-col :span="3"> <el-input v-model="ruleForm.count" type="number" size="large" /></el-col>
        </el-form-item>
        <el-form-item label="考试时间" required>
          <el-col :span="9">
            <el-form-item prop="date1">
              <el-date-picker v-model="ruleForm.date1" type="date" placeholder="选择日期" style="width: 100%;" size="large" />
            </el-form-item>
          </el-col>
          <el-col class="line" :span="1"> &nbsp;-</el-col>
          <el-col :span="9">
            <el-form-item prop="date2">
              <el-time-picker v-model="ruleForm.date2" placeholder="选择时间" style="width: 100%;" size="large" />
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">创建试卷</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
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
          { min: 3, max: 10, message: '长度在 3 到10 个字符', trigger: 'blur' }
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
  computed: {
    ...mapGetters([
      'examlist',
      'subjectlist'
    ])
  },
  async created() {
    await this.getexamtype()
    await this.getexamsubject()
  },
  methods: {
    ...mapActions({
      addExam: 'exam/addExam',
      getexamtype: 'examType/getexamtype',
      getexamsubject: 'examType/getexamsubject'
    }),
    submitForm(formName) {
      // console.log(this.$refs[formName].validate())
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          const { name: title, count: number, date1: start_time, date2: end_time, regionType: exam_id, region: subject_id } = this.ruleForm
          await this.addExam({
            subject_id,
            exam_id,
            title,
            number: number * 1,
            start_time: new Date(start_time) * 1,
            end_time: new Date(end_time) * 1
          })

          alert('submit!')
          this.$router.push('/exams/editExam')
        } else {
          console.log('请输入合法信息!!')
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
      width:100%;
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
          font-size: 24pxx;
          color:#242425;
      }
  }
  .addexam-container{
    width: 100%;
    height: auto;
    padding: 30px;
    background: #fff;
    border-radius: 10px;
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
