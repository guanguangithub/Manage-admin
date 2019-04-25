<template>
  <div class="box">
    <div class="top">
      教室管理
    </div>
    <div class="main">
      <div class="app-container">
        <el-button type="primary" @click="handleAddRole">
          {{ $t('permission.addRole') }}
        </el-button>

        <el-table :data="rolesList" style="width: 100%;margin-top:30px;" border>
          <el-table-column align="center" label="教室号">
            <template slot-scope="scope">
              {{ scope.row.room_text }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button type="danger" size="small" @click="handleDelete(scope)">
                {{ $t('permission.delete') }}
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'':'添加教室'">
          <el-form label-width="80px" label-position="left">
            <el-form-item label="教室号">
              <el-input
                v-model="role"
                placeholder="需要添加的教室号"
              />
              <el-tree ref="tree" node-key="path" :style="{display:'none'}" />
            </el-form-item>
          </el-form>
          <div style="text-align:right;">
            <el-button type="danger" @click="dialogVisible=false">
              {{ $t('permission.cancel') }}
            </el-button>
            <el-button type="primary" @click="confirmRole(role)">
              {{ $t('permission.confirm') }}
            </el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
// import path from 'path'
// import { deepClone } from '@/utils'
// ,getRoles addRole
import { addRoom, deleteRoom, getRoom } from '@/api/role'
// import i18n from '@/lang'
// import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      role: '',
      // role:[],
      routes: [],
      rolesList: [],
      // 弹框
      dialogVisible: false,
      dialogType: 'new',
      checkStrictly: false,
      defaultProps: {
        children: 'children',
        label: 'title'
      },
      clearable: true
    }
  },
  computed: {
    // routesData() {
    //   return this.routes
    // }
    // ...mapState({})
  },
  // mounted() {
  //   this.getAllRoom().then(res => {
  //     if (res.code === 1) {
  //       this.rolesList = res.data
  //     }
  //   })
  // },
  created() {
    this.getRoom()
  },
  methods: {
    // ...mapActions({
    //   getAllRoom: 'aclass/getAllRoom',
    //   addRoom: 'aclass/addRoom',
    //   DeleteRoom: 'aclass/DeleteRoom'
    // }),
    async getRoom() {
      const res = await getRoom()
      console.log('res////////', res)
      this.rolesList = res.data
    },
    handleAddRole() {
      if (this.$refs.tree) {
        this.$refs.tree.setCheckedNodes([])
      }
      this.dialogType = 'new'
      this.dialogVisible = true
    },
    handleDelete({ $index, row }) {
      console.log(row)
      this.$confirm('确定删除吗?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(async() => {
          await deleteRoom(row.room_id)
          // console.log(row,"row........");

          this.rolesList.splice($index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(err => { console.error(err) })
    },
    async confirmRole() {
      console.log(this.role, 'role,,...........')

      const res = await addRoom(this.role)
      console.log(res)

      // console.log('this.role,,,,,,,,,,', this.role)
      this.rolesList.push({ room_text: this.role, room_id: res.room_id })
      this.role = ''
      // this.checkStrictly = false
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  .roles-table {
    margin-top: 30px;
  }
  .permission-tree {
    margin-bottom: 30px;
  }
}
.box {
    width: 100%;
    height: 100%;
    background: #f0f2f5;
    overflow:auto;
    padding: 0 24px 24px;
  }
  .top{
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 28px;
  }
  .main{
    // margin-left: 3%;
    width: 100%;
    height: auto;
    background: #fff;
    border-radius: 10px;
    // margin-bottom: 30px;
  }
</style>
