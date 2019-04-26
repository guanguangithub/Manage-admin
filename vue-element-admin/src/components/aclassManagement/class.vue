<template>
  <div class="box">
    <div class="top">
      班级管理
    </div>
    <div class="main">
      <div class="app-container">
        <el-button type="primary" @click="handleAddRole('add')">
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
              <!-- 修改按钮 -->
              <el-button type="primary" size="small" @click="handleAddRole({type:'edit',grade_id:scope.row.grade_id})">
                {{ $t('permission.editPermission') }}
              </el-button>
              <!-- 删除按钮 -->
              <el-button type="danger" size="small" @click="handleDelete(scope)">
                {{ $t('permission.delete') }}
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-dialog :visible.sync="dialogVisible">
          <el-form :model="role" label-width="80px" label-position="left">
            <el-form-item label="班级名">
              <el-input v-model="role.grade_name" placeholder="班级名" />
            </el-form-item>
            <el-form-item label="课程名">
              <!-- <el-input v-model="role.name" placeholder="课程名" /> -->
              <el-select v-model="subjectVal" placeholder="请选择">
                <el-option
                  v-for="item in subjectList"
                  :key="item.subject_id"
                  :label="item.subject_text"
                  :value="item.subject_id"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="教室号">
              <el-select ref="tree" v-model="roomVal" placeholder="请选择">
                <el-option
                  v-for="item in roomList"
                  :key="item.room_id"
                  :label="item.room_text"
                  :value="item.room_id"
                />
              </el-select>
              <el-tree ref="tree" node-key="path" :style="{display:'none'}" />
            </el-form-item>

            <!-- <el-form-item label="Menus">
              <el-tree  ref="tree"      />
              show-checkbox :check-strictly="checkStrictly" :data="routesData" :props="defaultProps" node-key="path" class="permission-tree"
            </el-form-item> -->
          </el-form>
          <div style="text-align:right;">
            <el-button type="danger" @click="dialogVisible=false">
              <!-- 取消按钮 -->
              {{ $t('permission.cancel') }}
            </el-button>
            <!-- 确认按钮 -->
            <el-button type="primary" @click="confirmRole(role.grade_name)">
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
import { getGrade, addGrade, getRoom, getSubject, deleteGrade, upGrade } from '@/api/role'
// import i18n from '@/lang'

export default {
  data() {
    return {
      role: {},
      routes: [],
      rolesList: [],
      subjectList: [],
      subjectVal: '',
      roomVal: '',
      roomList: [],
      dialogVisible: false,
      checkStrictly: false,
      // 按钮类型
      btnType: '',
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
    this.getRoom()
    this.getSubject()
  },
  methods: {
    // 获取数据
    async getGrade() {
      const res = await getGrade()
      this.rolesList = res.data
    },
    async getRoom() {
      const res = await getRoom()
      this.roomList = res.data
      // console.log(this.roomList,"this.roomList....");
    },
    async getSubject() {
      const res = await getSubject()
      this.subjectList = res.data
      // console.log(this.subjectList,"this.subjectList....");
    },
    // 添加班级
    handleAddRole(type) {
      this.role = {}
      this.dialogVisible = true
      this.btnType = type
    },
    // dialogVisible(){
    //   this.roomVal=''
    //   this.subjectVal=''
    // },
    async confirmRole(role) {
      // console.log(role,this.roomVal,this.subjectVal);

      // const data = {
      //   ...this.role,
      //   grade_name: this.role.grade_name,
      //   room_id: this.role.room_id,
      //   subject_id: this.role.subject_id
      // }
      if (this.role.grade_name && this.roomVal && this.subjectVal) {
        if (this.btnType === 'add') {
          await addGrade(
            {
              grade_name: this.role.grade_name,
              room_id: this.roomVal,
              subject_id: this.subjectVal
            }
          )
          this.rolesList.push({ grade_name: this.role.grade_name, room_id: this.roomVal, subject_id: this.subjectVal })
        } else {
          const { grade_id } = this.btnType
          await upGrade({
            grade_id,
            grade_name: this.role.grade_name,
            room_id: this.roomVal,
            subject_id: this.subjectVal
          })
        }

        this.getGrade()
        this.roomVal = ''
        this.subjectVal = ''
        this.dialogVisible = false
      } else {
        alert('请输入信息')
      }
    },
    handleDelete({ $index, row }) {
      // console.log(row.grade_id)
      this.$confirm('确定删除吗?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(async() => {
          await deleteGrade(row.grade_id)
          // console.log(row,"row........");
          this.rolesList.splice($index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(err => { console.error(err) })
    }
    // handleEdit(scope) {
    //   // console.log(scope.row)

    //   this.dialogType = 'edit'
    //   this.dialogVisible = true
    //   this.checkStrictly = true
    //   const res = upGrade({
    //     grade_id: scope.row.grade_id,
    //     grade_name: scope.row.grade_name,
    //     subject_id: scope.row.subject_id,
    //     room_id: scope.row.room_id
    //   })
    //   console.log('res....', res)
    // }
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
