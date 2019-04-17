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
              {{ scope.row.keys }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="课程名">
            <template slot-scope="scope">
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column align="header-center" label="教室号" width="220">
            <template slot-scope="scope">
              {{ scope.row.description }}
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

        <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'修改班级':'添加班级'">
          <el-form :model="role" label-width="80px" label-position="left">
            <el-form-item label="班级名">
              <el-input v-model="role.keys" placeholder="班级名" />
            </el-form-item>
            <el-form-item label="课程名">
              <!-- <el-input v-model="role.name" placeholder="课程名" /> -->
              <el-select v-model="role.name" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :value="item.label"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="教师号">
              <el-select ref="tree" v-model="role.description" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :value="item.label"
                />
              </el-select>
              <!--
                ref="tree" 不写提交不了
                node-key="path" 提示暂无数据 不写只能提交一次 第二次不能添加班级
              -->
              <el-tree ref="tree" node-key="path" :style="{display:'none'}"/>
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
// path 不知道干嘛呢
import path from 'path'
import { deepClone } from '@/utils'
// getRoutes addRole 删除提交确定点不了 具体干什么不知道
// getRoles 3条模拟数据：从服务器获取所有路由和角色列表
// deleteRole 删除数据
// updateRole 修改数据
import { getRoutes, addRole,  deleteRole, updateRole } from '@/api/role'
import i18n from '@/lang'

const defaultRole = {
  // key 不知道怎么修改班级名 每次都是4个数字
  key: '',
  keys:'',
  name: '',
  description: '',
  routes: []
}

export default {
  data() {
    return {
      // Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
      role: Object.assign({}, defaultRole),
      routes: [],
      rolesList: [],
      // 控制弹框显示隐藏
      dialogVisible: false,
      dialogType: 'new',
      checkStrictly: false,
      defaultProps: {
        // children: 'children',
        label: 'title'
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  computed: {
    routesData() {
      return this.routes
    }
  },
  created() {
    // Mock: get all routes and roles list from server
    // 模拟：从服务器获取所有路由和角色列表
    this.getRoutes()
    this.getRoles()
  },
  methods: {
    async getRoutes() {
      const res = await getRoutes()
      this.serviceRoutes = res.data
      const routes = this.generateRoutes(res.data)
      this.routes = this.i18n(routes)
    },
    async getRoles() {
      const res = await getRoles()
      this.rolesList = res.data
    },
    i18n(routes) {
      const app = routes.map(route => {
        route.title = i18n.t(`route.${route.title}`)
        if (route.children) {
          route.children = this.i18n(route.children)
        }
        return route
      })
      return app
    },
    // Reshape the routes structure so that it looks the same as the sidebar
    generateRoutes(routes, basePath = '/') {
      const res = []

      for (let route of routes) {
        // skip some route
        if (route.hidden) { continue }

        const onlyOneShowingChild = this.onlyOneShowingChild(route.children, route)

        if (route.children && onlyOneShowingChild && !route.alwaysShow) {
          route = onlyOneShowingChild
        }

        const data = {
          path: path.resolve(basePath, route.path),
          title: route.meta && route.meta.title

        }

        // recursive child routes
        if (route.children) {
          data.children = this.generateRoutes(route.children, data.path)
        }
        res.push(data)
      }
      return res
    },
    generateArr(routes) {
      let data = []
      routes.forEach(route => {
        data.push(route)
        if (route.children) {
          const temp = this.generateArr(route.children)
          if (temp.length > 0) {
            data = [...data, ...temp]
          }
        }
      })
      return data
      console.log('data....',data);
      
    },
    // 添加班级
    handleAddRole() {
      this.role = Object.assign({}, defaultRole)
      if (this.$refs.tree) {
        this.$refs.tree.setCheckedNodes([])
      }
      this.dialogType = 'new'
      this.dialogVisible = true
    },
    // 操作 修改
    handleEdit(scope) {
      this.dialogType = 'edit'
      this.dialogVisible = true
      this.checkStrictly = false
      this.role = deepClone(scope.row)
      // Vue中的nextTick涉及到Vue中DOM的异步更新
      this.$nextTick(() => {
        const routes = this.generateRoutes(this.role.routes)
        console.log("routes///",routes);
        
        this.$refs.tree.setCheckedNodes(this.generateArr(routes))
        // set checked state of a node not affects its father and child nodes
        // 设置节点的检查状态不会影响其父节点和子节点
        this.checkStrictly = false
      })
    },
    // 操作 删除
    handleDelete({ $index, row }) {
      this.$confirm('确定删除吗?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async() => {
          await deleteRole(row.key)
          this.rolesList.splice($index, 1)
          this.$message({
            type: 'success',
            message: 'Delete succed!'
          })
        })
        .catch(err => { console.error(err) })
    },
    generateTree(routes, basePath = '/', checkedKeys) {
      const res = []

      for (const route of routes) {
        const routePath = path.resolve(basePath, route.path)

        // recursive child routes
        if (route.children) {
          route.children = this.generateTree(route.children, routePath, checkedKeys)
        }

        if (checkedKeys.includes(routePath) || (route.children && route.children.length >= 1)) {
          res.push(route)
        }
      }
      return res
    },
    // 确定添加
    async confirmRole() {
      const isEdit = this.dialogType === 'edit'

      const checkedKeys = this.$refs.tree.getCheckedKeys()
      this.role.routes = this.generateTree(deepClone(this.serviceRoutes), '/', checkedKeys)

      if (isEdit) {
        await updateRole(this.role.key, this.role)
        // console.log(this.role.key);
        for (let index = 0; index < this.rolesList.length; index++) {
          if (this.rolesList[index].key === this.role.key) {
            this.rolesList.splice(index, 1, Object.assign({}, this.role))
            break
          }
        }
      } else {
        const { data } = await addRole(this.role)
        this.role.key = data.key
        this.rolesList.push(this.role)
      }

      const { description, keys, key, name } = this.role
      this.dialogVisible = false
      this.$notify({
        title: 'Success',
        dangerouslyUseHTMLString: true,
        message: `
            <div>Role Key: ${keys}</div>
            <div>Role Nmae: ${name}</div>
            <div>Description: ${description}</div>
          `,
        type: 'success'
      })
    },
    // reference: src/view/layout/components/Sidebar/SidebarItem.vue
    onlyOneShowingChild(children = [], parent) {
      let onlyOneChild = null
      const showingChildren = children.filter(item => !item.hidden)

      // When there is only one child route, the child route is displayed by default
      // 当只有一个子路由时，默认显示子路由。
      if (showingChildren.length === 1) {
        onlyOneChild = showingChildren[0]
        onlyOneChild.path = path.resolve(parent.path, onlyOneChild.path)
        return onlyOneChild
      }

      // Show parent if there are no child route to display
      // 如果没有要显示的子路由，则显示父路由
      if (showingChildren.length === 0) {
        onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return onlyOneChild
      }

      return false
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
