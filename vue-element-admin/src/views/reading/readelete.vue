<template>
  <div class="readelete_box">
    <div class="readelete_box_header">
      <div class="readelete_box_header_input">
        <p>
          状态：
          <select>
            <option value="" />
          </select>
        </p>
        <p>
          班级：
          <select>
            <option value="" />
          </select>
        </p>
        <el-button type="primary"><i class="el-icon-search" />查询</el-button>
      </div>
    </div>
    <div class="readelete_box_content">
      <div class="readelete_box_content_header">
        <p>试卷列表</p>
      </div>
      <div class="readelete_box_content_table">
        <el-table :data="deleteArr" style="width: 100%" :border="true">
          <el-table-column prop="classname" label="班级" width="183" />
          <el-table-column prop="student_name" label="姓名" width="191" />
          <el-table-column prop="status" label="阅卷状态" />
          <el-table-column prop="start_time" label="开始时间" />
          <el-table-column prop="end_time" label="结束时间" />
          <el-table-column prop="score" label="成才率" width="191" />
          <el-table-column prop="exam_student_id" label="操作" width="156">
            <template slot-scope="{row}">
              <span @click="setDelte(row)">批卷</span>
            </template>
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
      deleteArr: []
    }
  },
  created() {
    // classname student_name  score  end_time  start_time status grade_id
    // console.log(this.$route.query.sundentdelte)
    // console.log(this.deleteArr)
    this.$route.query.sundentdelte.forEach((item, ind) => {
      console.log(item)
      // 开始时间
      const endate = new Date(Number(item.end_time))
      const hour = endate.getHours()
      const minu = endate.getMinutes()
      const sec = endate.getSeconds()
      const endtime = hour + ':' + minu + ':' + sec
      // 结束时间
      const startdata = new Date(Number(item.start_time))
      const houra = startdata.getHours()
      const minua = startdata.getMinutes()
      const seca = startdata.getSeconds()
      const startime = houra + ':' + minua + ':' + seca
      // 未阅/阅卷
      const statusText = item.status === 0 ? '未阅' : '阅卷'
      item.status = statusText
      item.end_time = endtime
      item.start_time = startime
      this.deleteArr.push(item)
    })
  },
  methods: {
    setDelte(row) {
      this.$router.push({ path: '/reading/delete', query: { ids: row.exam_student_id, jsonArr: row.answer_json_path }})
    }
  }
}
</script>
<style lang="scss">
.readelete_box{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:50px 0;
  background-color:#f0f2f5;
  .readelete_box_header{
    width:98%;
    height:120px;
    border-radius: 20px;
    background-color: #fff;
    .readelete_box_header_input{
      margin-top:10px;
      width:100%;
      height:60px;
      display: flex;
      align-items: center;
      p{
        margin-left: 50px;
        font-size:14px;
        select{
          width:150px;
          height:30px;
        }
      }
      button{
        margin-left:50px;
        width:120px;
        i{
          margin:0 10px;
        }
      }
    }
  }
  .readelete_box_content{
    margin:15px 0 0 0;
    width:98%;
    height: auto;
    background-color: #fff;
    border-radius: 20px;
    padding:20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .readelete_box_content_header{
      width:100%;
      height:60px;
      display: flex;
      align-items: center;
      p{
        margin-left:50px;
      }
    }
    .readelete_box_content_table{
      width:95%;
      height: auto;

    }
  }
}
</style>
