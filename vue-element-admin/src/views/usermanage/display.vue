<template>
  <div class="Dispaly_box">
    <div class="Dispaly_box_header">
      <p>用户展示</p>
    </div>
    <div class="Dispaly_box_type">
      <ul>
        <li v-for="(item,index) in tableData" id="ulla" :key="index" :class="inds===index?'currentlis':''" @click="liClick(index)">{{ item.name }}</li>
      </ul>
    </div>
    <h1 class="Dispaly_box_text">
      <span v-for="(item,index) in tableData" :key="index" :class="inds===index?'currentspans':'currentspan'" @click="liClick(index)">{{ inds===index?item.name:'' }}</span>
    </h1>
    <div class="Dispaly_box_table">
      <el-table :border="true" style="width:100%;" :data="userarr[0].data">
        <el-table-column label="用户名" align="center" width="277px" prop="user_name" />
        <el-table-column label="密码" prop="user_pwd" />
        <el-table-column label="身份" align="center" width="174px" prop="identity_text" />
      </el-table>
    </div>
    <div class="Dispaly_box_pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="200"
      />
    </div>

  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      tableData: [
        {
          name: '用户数据'
        },
        {
          name: '身份数据'
        },
        {
          name: '身份和API接口关系'
        },
        {
          name: '视图接口权限'
        },
        {
          name: '身份和视图权限关系'
        }
      ],
      inds: 0
    }
  },
  computed: {
    ...mapGetters(['userarr'])
  },
  mounted() {
    this.usermanage()
  },
  methods: {
    ...mapActions({
      usermanage: 'usermanage/userdelete'
    }),
    liClick(ind) {
      this.inds = ind
    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.Dispaly_box {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #f0f2f5;
  overflow-y:auto;
  .Dispaly_box_header {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    text-indent: 50px;
    p{
      font-size: 26px;
    }
  }
  .Dispaly_box_type {
    width: 100%;
    height: 50px;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        .currentlis{
            border-color: #0139FD;
            box-shadow: none !important
        }
        li {
          height: 70%;
          width:180px;
          border: 1px solid #ccc;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          &:nth-child(1) {
            margin-left: 80px;
          }
        }
        li:hover{
          color: #0139FD;
        }
    }
  }
  .Dispaly_box_text{
    width:100%;
    height:60px;
    font-size:26px;
    display: flex;
    align-items: center;
    .currentspan{
      display: none;
    }
    .currentspans{
      display: flex;
    }
    span{
      margin-left: 50px;
      font-size:26px;
      font-weight: normal;
    }
  }
  .Dispaly_box_table{
    margin: 0 auto;
    width:95%;
    height:auto;
  }
  .Dispaly_box_pagination{
    margin: 20px auto;
    width:95%;
    height:60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

</style>

