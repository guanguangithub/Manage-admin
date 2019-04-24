<template>
  <div class="box">
    <div class="top">
      班级管理
    </div>
    <div class="main">
      <div class="app-container">
        <el-button type="primary" @click="handleAddRole">
          {{ $t('permission.addRole') }}
        </el-button>

        <el-table :data="rolesList" style="width: 100%;margin-top:30px;" border>
          <el-table-column align="center" label="班级名" width="220">
            <!-- slot-scope="scope" vue的一个作用域插槽-->
            <template slot-scope="scope">
              {{ scope.row.grade_name }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="课程名">
            <template slot-scope="scope">
              {{ scope.row.subject_text }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="教室号" width="220">
            <template slot-scope="scope">
              {{ scope.row.room_text }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button type="primary" size="small" @click="handleEdit(scope)">
                {{ $t('permission.editPermission') }}
              </el-button>
              <el-button type="danger" size="small" @click="handleDelete(scope)">
                {{ $t('permission.delete') }}
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'Edit Role':'添加班级'">
          <el-form :model="role" label-width="80px" label-position="left">
            <el-form-item label="班级名">
              <el-input v-model="role.grade_name" placeholder="班级名" />
            </el-form-item>
            <el-form-item label="课程名">
              <!-- <el-input v-model="role.name" placeholder="课程名" /> -->
              <el-select v-model="role.subject_text" placeholder="请选择">
                <el-option
                  v-for="item in rolesList"
                  :id="item.subject_id"
                  :key="item.value"
                  :value="item.subject_text"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="教师号">
              <el-select ref="tree" v-model="role.room_text" placeholder="请选择">
                <el-option
                  v-for="item in rolesList"
                  :id="item.room_id"
                  :key="item.value"
                  :value="item.room_text"
                />
              </el-select>
              <el-tree ref="tree" node-key="path" />
            </el-form-item>

            <!-- <el-form-item label="Menus">
              <el-tree  ref="tree"      />
              show-checkbox :check-strictly="checkStrictly" :data="routesData" :props="defaultProps" node-key="path" class="permission-tree"
            </el-form-item> -->
          </el-form>
          <div style="text-align:right;">
            <el-button type="danger" @click="dialogVisible=false">
              {{ $t('permission.cancel') }}
            </el-button>
            <el-button type="primary" @click="confirmRole()">
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
import { getGrade, addGrade } from '@/api/role'
// import i18n from '@/lang'

export default {
  data() {
    return {
      role: {},
      routes: [],
      rolesList: [],
      dialogVisible: false,
      dialogType: 'new',
      checkStrictly: false,
      defaultProps: {
        // children: 'children',
        label: 'title'
      }
    }
  },
  computed: {
  },
  created() {
    // Mock: get all routes and roles list from server
    // 模拟：从服务器获取所有路由和角色列表
    this.getGrade()
  },
  methods: {
    // 获取数据
    async getGrade() {
      const res = await getGrade()
      this.rolesList = res.data
      console.log(this.rolesList, '......')
    },
    // 添加班级
    handleAddRole() {
      this.role = {}
      // if (this.$refs.tree) {
      //   console.log("this.$refs.tree....",this.$refs.tree);

      //   this.$refs.tree.setCheckedNodes([])
      // }
      // await addGrade()
      this.dialogType = 'new'
      this.dialogVisible = true
    },
    async confirmRole() {
      const data = {
        ...this.role,
        grade_name: this.role.grade_name,
        room_id: this.role.room_id,
        subject_id: this.role.subject_id
      }
      await addGrade(data)
      console.log('this.role...', this.role)

      this.rolesList.push(this.role)
      this.dialogVisible = false
      // const isEdit = this.dialogType === 'edit'
      // const checkedKeys = this.$refs.tree.getCheckedKeys()
      // this.role.routes = this.generateTree(deepClone(this.serviceRoutes), '/', checkedKeys)
      // if (isEdit) {
      //   await updateRole(this.role.key, this.role)
      //   // console.log(this.role.key);
      //   for (let index = 0; index < this.rolesList.length; index++) {
      //     if (this.rolesList[index].key === this.role.key) {
      //       this.rolesList.splice(index, 1, Object.assign({}, this.role))
      //       break
      //     }
      //   }
      // } else {
      //   const { data } = await addGrade(this.role)
      //   this.role.key = data.key
      //   this.rolesList.push(this.role)
      // }
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
