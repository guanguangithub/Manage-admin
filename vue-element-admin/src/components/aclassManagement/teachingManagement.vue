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
          <el-form :model="role" label-width="80px" label-position="left">
            <el-form-item label="教室号">
              <el-input
                v-model="role.room_text"
                placeholder="教室号"
              />
              <el-tree ref="tree" node-key="path" :style="{display:'none'}" />
            </el-form-item>
            <!-- <el-form-item label="Menus">
              <el-tree ref="tree" :check-strictly="checkStrictly" :data="routesData" :props="defaultProps" show-checkbox node-key="path" class="permission-tree" />
            </el-form-item> -->
          </el-form>
          <div style="text-align:right;">
            <el-button type="danger" @click="dialogVisible=false">
              {{ $t('permission.cancel') }}
            </el-button>
            <el-button type="primary" @click="confirmRole">
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

const defaultRole = {
  // key: '',
  // name: '',
  description: '',
  routes: []
}

export default {
  data() {
    return {
      role: Object.assign({}, defaultRole),
      routes: [],
      rolesList: [],
      dialogVisible: false,
      dialogType: 'new',
      checkStrictly: false,
      defaultProps: {
        children: 'children',
        label: 'title'
      }
    }
  },
  computed: {
    routesData() {
      return this.routes
    }
  },
  created() {
    // Mock: get all routes and roles list from server
    this.getRoom()
  },
  methods: {
    async getRoom() {
      const res = await getRoom()
      console.log('res////////', res)
      this.rolesList = res.data
      // console.log("this.rolesList////////",this.rolesList);
    },
    // Reshape the routes structure so that it looks the same as the sidebar
    // generateArr(routes) {
    //   let data = []
    //   routes.forEach(route => {
    //     data.push(route)
    //     if (route.children) {
    //       const temp = this.generateArr(route.children)
    //       if (temp.length > 0) {
    //         data = [...data, ...temp]
    //       }
    //     }
    //   })
    //   return data
    // },
    handleAddRole() {
      // this.role = Object.assign({}, defaultRole)
      // console.log("role../././././.",this.role);

      if (this.$refs.tree) {
        this.$refs.tree.setCheckedNodes([])
      }
      this.dialogType = 'new'
      this.dialogVisible = true
    },
    // handleEdit(scope) {
    //   this.dialogType = 'edit'
    //   this.dialogVisible = true
    //   this.checkStrictly = true
    //   this.role = deepClone(scope.row)
    //   this.$nextTick(() => {
    //     const routes = this.generateRoutes(this.role.routes)
    //     this.$refs.tree.setCheckedNodes(this.generateArr(routes))
    //     // set checked state of a node not affects its father and child nodes
    //     this.checkStrictly = false
    //   })
    // },
    handleDelete({ $index, row }) {
      // console.log(',,,,,,,,,,,,,,,', $index,'............', row.room_id );

      this.$confirm('确定删除吗?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(async() => {
          await deleteRoom(row.room_id)
          this.rolesList.splice($index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(err => { console.error(err) })
    },
    // generateTree(routes, basePath = '/', checkedKeys) {
    //   const res = []

    //   for (const route of routes) {
    //     const routePath = path.resolve(basePath, route.path)

    //     // recursive child routes
    //     if (route.children) {
    //       route.children = this.generateTree(route.children, routePath, checkedKeys)
    //     }

    //     if (checkedKeys.includes(routePath) || (route.children && route.children.length >= 1)) {
    //       res.push(route)
    //     }
    //   }
    //   return res
    // },
    async confirmRole() {
      // const isEdit = this.dialogType === 'edit'

      // const checkedKeys = this.$refs.tree.getCheckedKeys()
      // this.role.routes = this.generateTree(deepClone(this.serviceRoutes), '/', checkedKeys)

      // if (isEdit) {
      //   await updateRole(this.role.key, this.role)
      //   for (let index = 0; index < this.rolesList.length; index++) {
      //     if (this.rolesList[index].key === this.role.key) {
      //       this.rolesList.splice(index, 1, Object.assign({}, this.role))
      //       break
      //     }
      //   }
      // } else {
      await addRoom(this.role)
      console.log('this.role,,,,,,,,,,', this.role)
      // this.role.key = data.key
      this.rolesList.push(this.role)
      // }
      this.dialogVisible = false
    }
    // reference: src/view/layout/components/Sidebar/SidebarItem.vue
    // onlyOneShowingChild(children = [], parent) {
    //   let onlyOneChild = null
    //   const showingChildren = children.filter(item => !item.hidden)

    //   // When there is only one child route, the child route is displayed by default
    //   if (showingChildren.length === 1) {
    //     onlyOneChild = showingChildren[0]
    //     onlyOneChild.path = path.resolve(parent.path, onlyOneChild.path)
    //     return onlyOneChild
    //   }

    //   // Show parent if there are no child route to display
    //   if (showingChildren.length === 0) {
    //     onlyOneChild = { ... parent, path: '', noShowingChildren: true }
    //     return onlyOneChild
    //   }

    //   return false
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
