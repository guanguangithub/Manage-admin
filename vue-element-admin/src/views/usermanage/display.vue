<template>
  <div class="Dispaly_box">
    <div class="Dispaly_box_header">
      <p>用户展示</p>
    </div>
    <div class="Dispaly_box_type">
      <ul>
        <li v-for="(item,index) in tableData" :key="index" :class="inds===index?'currentlis':''" @click="liClick(index)">{{ item.names }}</li>
      </ul>
    </div>
    <h1 class="Dispaly_box_text">
      <span v-for="(item,index) in tableData" :key="index" :class="inds===index?'currentspans':'currentspan'" @click="liClick(index)">{{ inds===index?item.names:'' }}</span>
    </h1>
    <div class="Dispaly_box_table">
      <el-table style="width:100%;" :data="data" :row-style="setClass" :header-row-style="headerClass">
        <el-table-column v-for="(item,index) in tableData[inds].title" :key="index" :label="item.tit" :prop="item.render" />
      </el-table>
    </div>
    <div class="Dispaly_box_pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="limit"
        :page-count="Math.ceil(total/limit)"
        :current-page.sync="toals"
        @current-change="currentChange"
      />
    </div>

  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      tableData: [
        {
          names: '用户数据',
          id: '1',
          title: [
            {
              'tit': '用户名',
              'render': 'user_name'
            },
            {
              'tit': '密码',
              'render': 'user_pwd'
            },
            {
              'tit': '身份',
              'render': 'identity_text'
            }
          ]
        },
        {
          names: '身份数据',
          id: '2',
          title: [
            {
              'tit': '身份名称',
              'render': 'identity_text'
            }
          ]
        },
        {
          names: 'api接口权限',
          id: '3',
          title: [
            {
              'tit': 'api权限名称',
              'render': 'api_authority_text'
            },
            {
              'tit': 'api权限url',
              'render': 'api_authority_url'
            },
            {
              'tit': 'api权限方法',
              'render': 'api_authority_method'
            }
          ]

        },
        {
          names: '身份和api接口关系',
          id: '4',
          title: [
            {
              'tit': '身份名称',
              'render': 'identity_text'
            },
            {
              'tit': 'api权限名称',
              'render': 'api_authority_text'
            },
            {
              'tit': 'api权限url',
              'render': 'api_authority_url'
            },
            {
              'tit': 'api权限方法',
              'render': 'api_authority_method'
            }
          ]
        },
        {
          names: '身份视图接口权限',
          id: '5',
          title: [
            {
              'tit': '视图权限名称',
              'render': 'view_authority_text'
            },
            {
              'tit': '视图id',
              'render': 'view_id'
            }
          ]
        },
        {
          names: '身份和视图权限关系',
          id: '6',
          title: [
            {
              'tit': '身份',
              'render': 'identity_text'
            },
            {
              'tit': '视图名称',
              'render': 'view_authority_text'
            },
            {
              'tit': '视图id',
              'render': 'view_id'
            }
          ]
        }
      ],
      inds: 0,
      list: null,
      total: 0,
      limit: 10,
      data: null,
      toals: 1
    }
  },
  created() {
    this.usermanagedele().then(res => {
      if (res.code === 1) {
        this.list = res.data
        this.data = this.list.slice(0, this.limit)
        this.total = this.list.length
      }
    })
  },
  methods: {
    ...mapActions({
      usermanagedele: 'usermanage/userdelete',
      identitydele: 'usermanage/identitydelete',
      apiperdele: 'usermanage/apipermissions',
      Interfacedele: 'usermanage/InterfaceRelationship',
      Viewinterdele: 'usermanage/Viewinterface',
      Identityviewdele: 'usermanage/Identityview'
    }),
    liClick(ind) {
      this.inds = ind
      this.toals = 1
      if (this.inds === 0) {
        this.usermanagedele().then(res => {
          if (res.code === 1) {
            this.list = res.data
            this.total = this.list.length
            this.data = this.list.slice(0, this.limit)
          }
        })
      } else if (this.inds === 1) {
        this.identitydele().then(res => {
          if (res.code === 1) {
            this.list = res.data
            this.total = this.list.length
            this.data = this.list.slice(0, this.limit)
          }
        })
      } else if (this.inds === 2) {
        this.apiperdele().then(res => {
          if (res.code === 1) {
            this.list = res.data
            this.total = this.list.length
            this.data = this.list.slice(0, this.limit)
          }
        })
      } else if (this.inds === 3) {
        this.Interfacedele().then(res => {
          if (res.code === 1) {
            this.list = res.data
            this.total = this.list.length
            this.data = this.list.slice(0, this.limit)
          }
        })
      } else if (this.inds === 4) {
        this.Viewinterdele().then(res => {
          if (res.code === 1) {
            this.list = res.data
            this.total = this.list.length
            this.data = this.list.slice(0, this.limit)
          }
        })
      } else if (this.inds === 5) {
        this.Identityviewdele().then(res => {
          if (res.code === 1) {
            this.list = res.data
            this.total = this.list.length
            this.data = this.list.slice(0, this.limit)
          }
        })
      }
    },
    currentChange(val) {
      this.data = this.list.slice((val - 1) * this.limit, val * this.limit)
    },
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

