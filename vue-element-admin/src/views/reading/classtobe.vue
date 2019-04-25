<template>
  <div class="ClassToBe_box">
    <div class="ClassToBe_box_header">
      <h1>待批班级</h1>
    </div>
    <div class="ClassToBe_box_table">
      <el-table :data="textBorder.slice((cuurrentpage - 1)*limit,cuurrentpage*limit)" style="width: 100%" :row-style="setClass" :header-row-style="headerClass">
        <el-table-column prop="grade_name" label="班级名" width="200" align="center" />
        <el-table-column prop="subject_text" label="课程名称" width="200" align="center" />
        <el-table-column prop="steate" label="阅卷状态" align="center" />
        <el-table-column prop="subject_text" label="课程名称" align="center" />
        <el-table-column prop="room_text" label="成才率" width="120" align="center" />
        <el-table-column prop="grade_id" label="操作" width="120" align="center">
          <template slot-scope="{row}">
            <span style="color:#0139FD" @click="pushLoca(row)">批卷</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="ClassToBe_box_pagination">
      <el-pagination
        background
        :total="total"
        :page-size="limit"
        :page-sizes="pagesizes"
        :current-page="page"
        layout="prev, pager, next, sizes, jumper"
        @current-change="currentChange"
        @size-change="sizeChange"
      />
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      textBorder: [],
      Batchdelete: [],
      limit: 10,
      total: 0,
      cuurrentpage: 1,
      page: 1,
      pagesizes: [5, 10, 20, 50],
      Studentpaperdetele: []
    }
  },
  created() {
    this.testmanagement().then((res) => {
      this.total = res.length
      this.textBorder = res
    })
  },
  methods: {
    ...mapActions({
      testmanagement: 'Testmanagement/Testdelete'
    }),
    currentChange(val) {
      this.cuurrentpage = val
    },
    sizeChange(val) {
      this.limit = val
    },
    setClass() {
      return 'height:50px;background-color:#f0f2f5;78ii8'
    },
    headerClass() {
      return 'height:60px;font-size:16px;'
    },
    pushLoca(row) {
      this.$router.push({ path: '/reading/readelete', query: { className: row.grade_name, ids: row.grade_id }})
    }
  }
}
</script>
<style lang="scss">
  .ClassToBe_box{
      width:100%;
      height:auto;
      overflow: hidden;
      background-color: #f0f2f5;
      padding-bottom:30px;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .ClassToBe_box_header{
      width:100%;
      height:80px;
      display: flex;
      align-items: center;
      h1{
        font-size:30px;
        margin-left:50px;
      }
  }
  .ClassToBe_box_table{
      width:95%;
      height:auto;
      background-color: #fff;
      padding:20px;
      border-radius: 20px;
  }
  .ClassToBe_box_pagination{
      width:95%;
      height:70px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
  }
</style>
