<template>
  <div class="ClassToBe_box">
    <div class="ClassToBe_box_header">
      <h1>待批班级</h1>
    </div>
    <div class="ClassToBe_box_table">
      <el-table :data="tableData" style="width: 100%" :row-style="setClass" :header-row-style="headerClass">
        <el-table-column
          prop="classname"
          label="班级名"
          width="200"
          align="center"
        />
        <el-table-column
          prop="coursetitle"
          label="课程名称"
          width="200"
          align="center"
        />
        <el-table-column
          prop="steate"
          label="阅卷状态"
          align="center"
        />
        <el-table-column
          prop="coursetitle"
          label="课程名称"
          align="center"
        />
        <el-table-column
          prop="Yieldrate"
          label="成才率"
          width="120"
          align="center"
        />
        <el-table-column
          prop="operating"
          label="操作"
          width="120"
          align="center"
        >
          <template :slot-scope="scope">
            <router-link tag="span" to="/reading/readelete">批卷</router-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          classname: '1609A',
          coursetitle: '实训一',
          steate: '未阅',
          Yieldrate: 100,
          operating: ''
        },
        {
          classname: '1609B',
          coursetitle: '实训一',
          steate: '未阅',
          Yieldrate: 100,
          operating: ''
        },
        {
          classname: '1609C',
          coursetitle: '实训一',
          steate: '未阅',
          Yieldrate: 100,
          operating: ''
        },
        {
          classname: '1609D',
          coursetitle: '实训一',
          steate: '未阅',
          Yieldrate: 100,
          operating: ''
        },
        {
          classname: '1609E',
          coursetitle: '实训一',
          steate: '未阅',
          Yieldrate: 100,
          operating: ''
        }
      ]
    }
  },
  methods: {
    setClass() {
      return 'height:50px;background-color:#f0f2f5;'
    },
    headerClass() {
      return 'height:60px;font-size:16px;'
    }
  }
}
</script>
<style lang="scss">
  .ClassToBe_box{
      width:100%;
      height:100%;
      overflow: hidden;
      padding:30px 0;
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
      margin: 0 auto;
      width:95%;
      height:auto;

  }
</style>
