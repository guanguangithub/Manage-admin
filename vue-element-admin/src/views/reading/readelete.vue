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
        <el-button type="primary" @click="excelEvnet">导出</el-button>
      </div>
    </div>
    <div class="readelete_box_content">
      <div class="readelete_box_content_header">
        <p>试卷列表</p>
      </div>
      <div class="readelete_box_content_table">
        <el-table :data="deleteArr" style="width: 100%" :border="true">
          <el-table-column prop="className" label="班级" width="183" />
          <el-table-column prop="student_name" label="姓名" width="191" />
          <el-table-column prop="statusText" label="阅卷状态" />
          <el-table-column prop="startime" label="开始时间" />
          <el-table-column prop="endtime" label="结束时间" />
          <el-table-column prop="score" label="成才率" width="191" />
          <el-table-column prop="exam_student_id" label="操作" width="156">
            <template slot-scope="{row}">
              <span style="color:#0139FD" @click="setDelte(row)">批卷</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      deleteArr: []
    }
  },
  created() {
    this.Batchdetails(this.$route.query.ids).then(res => {
      if (!res) {
        this.deleteArr = []
      } else {
        res.forEach((item) => {
          // 开始时间
          const starTime = new Date(Number(item.start_time))
          const hour = starTime.getHours()
          const minute = starTime.getMinutes()
          const Second = starTime.getSeconds()
          const startime = hour + ':' + minute + ':' + Second
          // 结束时间
          const endTime = new Date(Number(item.end_time))
          const hours = endTime.getHours()
          const minutes = endTime.getMinutes()
          const Seconds = endTime.getSeconds()
          const endtime = hours + ':' + minutes + ':' + Seconds
          // 阅卷状态
          const statusText = item.status === 0 ? '未阅' : '已阅'
          // 设置数据格式
          item.startime = startime
          item.endtime = endtime
          item.statusText = statusText
          item.className = this.$route.query.className
          // 添加数据
          this.deleteArr.push(item)
        })
      }
    })
  },
  methods: {
    ...mapActions({
      Batchdetails: 'Testmanagement/Batchdetails'
    }),
    setDelte(row) {
      this.$router.push({ path: '/reading/delete', query: { ids: row.exam_student_id }})
    },
    excelEvnet() {
      const header = Object.keys(this.deleteArr[0])
      const list = this.deleteArr.map((item) => {
        const arrs = Object.values(item)
        return arrs.map(item => JSON.stringify(item))
      })
      console.log(list)
      import('@/vendor/Export2Excel').then(excel => {
        excel.export_json_to_excel({
          header: header,
          data: list,
          filename: '试卷列表',
          bookType: 'xlsx' // 后缀名
        })
      })
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
