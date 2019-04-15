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
          <el-table-column prop="name" label="姓名" width="191" />
          <el-table-column prop="state" label="阅卷状态" />
          <el-table-column prop="kTime" label="开始时间" />
          <el-table-column prop="jTime" label="结束时间" />
          <el-table-column prop="Yieldrate" label="成才率" width="191" />
          <el-table-column prop="operating" label="操作" width="156">
            <template :slot-scope="scope">
              <router-link tag="span" to="/reading/delete">批卷</router-link>
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
      deleteArr: [
        {
          classname: '1610B',
          name: '嗡嗡嗡',
          state: '未阅',
          kTime: '2019-04-15 19:00',
          jTime: '2019-04-15 19:30',
          Yieldrate: 100,
          operating: ''
        },
        {
          classname: '1610B',
          name: '三生石',
          state: '未阅',
          kTime: '2019-04-15 19:00',
          jTime: '2019-04-15 19:32',
          Yieldrate: 100,
          operating: ''
        },
        {
          classname: '1610B',
          name: '杀完毒',
          state: '未阅',
          kTime: '2019-04-15 19:00',
          jTime: '2019-04-15 19:35',
          Yieldrate: 100,
          operating: ''
        }
      ]
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
