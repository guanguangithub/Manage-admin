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
        <el-form-item label="活动名称" prop="title">
          <el-col :span="12"><el-input v-model="ruleForm.title" size="large" /></el-col>
        </el-form-item>
        <el-form-item label="选择考试类型" prop="exam_id">
          <el-col :span="10">
            <el-select v-model="ruleForm.exam_id" placeholder="选择考试类型" size="large">
              <el-option v-for="item in this.examlist.data" :key="item.exam_id" :label="item.exam_name" :value="item.exam_id" />
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="选择课程" prop="subject_id">
          <el-col :span="10">
            <el-select v-model="ruleForm.subject_id" placeholder="选择课程" size="large">
              <el-option v-for="item in this.subjectlist.data" :key="item.subject_id" :label="item.subject_text" :value="item.subject_id" />
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="设置题量" prop="number">
          <el-col :span="3"> <el-input v-model="ruleForm.number" type="number" size="large" /></el-col>
        </el-form-item>
        <el-form-item label="考试时间" required>
          <el-col :span="9">
            <el-form-item prop="start_time">
              <el-date-picker v-model="ruleForm.start_time" type="datetime" placeholder="选择日期" style="width: 100%;" size="large" />
            </el-form-item>
          </el-col>
          <el-col class="line" :span="1"> &nbsp;-</el-col>
          <el-col :span="9">
            <el-form-item prop="end_time">
              <el-date-picker v-model="ruleForm.end_time" type="datetime" placeholder="选择日期" style="width: 100%;" size="large" />
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
        title: '',
        subject_id: '',
        exam_id: '',
        start_time: '',
        end_time: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        number: 4
      },
      rules: {
        title: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到10 个字符', trigger: 'blur' }
        ],
        number: [
          { required: true, message: '请输入题量', trigger: 'blur' }
        ],
        subject_id: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        start_time: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        end_time: [
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
          const { title, number, start_time, end_time, exam_id, subject_id } = this.ruleForm
          const res = await this.addExam({
            subject_id,
            exam_id,
            title,
            number: number * 1,
            start_time: new Date(start_time) * 1,
            end_time: new Date(end_time) * 1
          })
          // alert('submit!')
          this.$router.push('/exams/editExam/' + res.data.exam_exam_id)
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
        height:40px!important;
        line-height:15px!important;
    }
</style>
