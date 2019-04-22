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

        <el-dialog :visible.sync="dialogVisible" :title="dialogType==='edit'?'修改班级':'添加班级'">
          <el-form :model="rolesList" label-width="80px" label-position="left">
            <el-form-item label="班级名">
              <el-input v-model="role.grade_name" placeholder="班级名" />
            </el-form-item>
            <el-form-item label="课程名">
              <!-- <el-input v-model="role.name" placeholder="课程名" /> -->
              <el-select v-model="role.subject_text" placeholder="请选择">
                <el-option
                  v-for="item in rolesList"
                  :key="item.value"
                  :value="item.subject_text"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="教师号">
              <el-select ref="tree" v-model="role.room_text" placeholder="请选择">
                <el-option
                  v-for="item in rolesList"
                  :key="item.value"
                  :value="item.room_text"
                />
              </el-select>
              <!--
                ref="tree" 不写提交不了
                node-key="path" 提示暂无数据 不写只能提交一次 第二次不能添加班级
              -->
              <el-tree ref="tree" node-key="path" :style="{display:'none'}" />
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
  <!-- <div>{
  "msg": "获取学生数据成功",
  "code": 1,
  "data": [
    {
      "student_id": "151611000702",
      "student_name": "高诗蕊",
      "student_pwd": "Gaoshir1028*",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "151991000354",
      "student_name": "郑伟浩",
      "student_pwd": "Zheng5831200*",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "18382100271",
      "student_name": "赵倩",
      "student_pwd": "Zq@120319",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "162221000234",
      "student_name": "董梦全",
      "student_pwd": "@Dmq123",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "163231000105",
      "student_name": "葛荷清",
      "student_pwd": "Ghq123@@",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "18381100254",
      "student_name": "张克",
      "student_pwd": "Zk1992/*-+",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "163231001026",
      "student_name": "张少泽",
      "student_pwd": "Zsz0312@",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "17382100235",
      "student_name": "祁云凯",
      "student_pwd": "*Q1i0k8ai",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "162711000777",
      "student_name": "刘丽霞",
      "student_pwd": "Liu980519!",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "17356100064",
      "student_name": "李晓凯",
      "student_pwd": "Lxk*549426524",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "18382100095",
      "student_name": "薛帅康",
      "student_pwd": "Nuo1999.@",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "152221000136",
      "student_name": "张嘉琪",
      "student_pwd": "Zjq03251781!",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "151521000391",
      "student_name": "宋梦磊",
      "student_pwd": "S*l12345",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "18382100243",
      "student_name": "刘士军",
      "student_pwd": "Aa!11049356603",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "17382100341",
      "student_name": "党会娟",
      "student_pwd": "Dang&3443",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "163231001166",
      "student_name": "郭怡凯",
      "student_pwd": "223Guo*",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "152221000361",
      "student_name": "肖臣",
      "student_pwd": "07133921Xy*",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "18381100253",
      "student_name": "张克",
      "student_pwd": "Zk1992/*-+",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "18381100251",
      "student_name": "张克",
      "student_pwd": "Zk1992/*-+",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "151991000301",
      "student_name": "李硕",
      "student_pwd": "Li991029*",
      "room_id": "mdj92d-jthb4h-qok0rf-5aby5j",
      "room_text": "3",
      "grade_id": "joyqt9-gyxsa8-fif6c-j12o0k",
      "grade_name": "1610C",
      "subject_id": "fyu3ln-azjkie",
      "subject_text": "渐进式开发(react)"
    },
    {
      "student_id": "162711000760",
      "student_name": "孙佳",
      "student_pwd": "Sj199604@",
      "room_id": "f4p5rj-r1s7ke-dmup4-eoqda",
      "room_text": "2",
      "grade_id": "hg9pz-qxoiw2-8hgd8-bmtr5",
      "grade_name": "1701B",
      "subject_id": "wl5yk-38c0g",
      "subject_text": "javaScript下"
    },
    {
      "student_id": "163231001090",
      "student_name": "田益莎",
      "student_pwd": "Tian1996*",
      "room_id": "f4p5rj-r1s7ke-dmup4-eoqda",
      "room_text": "2",
      "grade_id": "hg9pz-qxoiw2-8hgd8-bmtr5",
      "grade_name": "1701B",
      "subject_id": "wl5yk-38c0g",
      "subject_text": "javaScript下"
    },
    {
      "student_id": "18382100109",
      "student_name": "刘敢",
      "student_pwd": "Lg0401^",
      "room_id": "f4p5rj-r1s7ke-dmup4-eoqda",
      "room_text": "2",
      "grade_id": "hg9pz-qxoiw2-8hgd8-bmtr5",
      "grade_name": "1701B",
      "subject_id": "wl5yk-38c0g",
      "subject_text": "javaScript下"
    },
    {
      "student_id": "163221000007",
      "student_name": "何智博",
      "student_pwd": "HZBqq123!",
      "room_id": "f4p5rj-r1s7ke-dmup4-eoqda",
      "room_text": "2",
      "grade_id": "hg9pz-qxoiw2-8hgd8-bmtr5",
      "grade_name": "1701B",
      "subject_id": "wl5yk-38c0g",
      "subject_text": "javaScript下"
    },
    {
      "student_id": "18382100172",
      "student_name": "程鹏",
      "student_pwd": "Qq*995809742",
      "room_id": "f4p5rj-r1s7ke-dmup4-eoqda",
      "room_text": "2",
      "grade_id": "hg9pz-qxoiw2-8hgd8-bmtr5",
      "grade_name": "1701B",
      "subject_id": "wl5yk-38c0g",
      "subject_text": "javaScript下"
    },
    {
      "student_id": "18382100177",
      "student_name": "高炎鑫",
      "student_pwd": "GAOgao123@",
      "room_id": "f4p5rj-r1s7ke-dmup4-eoqda",
      "room_text": "2",
      "grade_id": "hg9pz-qxoiw2-8hgd8-bmtr5",
      "grade_name": "1701B",
      "subject_id": "wl5yk-38c0g",
      "subject_text": "javaScript下"
    },
    {
      "student_id": "162711000926",
      "student_name": "杨丽娜",
      "student_pwd": "YLNyln123@",
      "room_id": "f4p5rj-r1s7ke-dmup4-eoqda",
      "room_text": "2",
      "grade_id": "hg9pz-qxoiw2-8hgd8-bmtr5",
      "grade_name": "1701B",
      "subject_id": "wl5yk-38c0g",
      "subject_text": "javaScript下"
    },
    {
      "student_id": "163231000428",
      "student_name": "位贺",
      "student_pwd": "Wh@03291238",
      "room_id": "f4p5rj-r1s7ke-dmup4-eoqda",
      "room_text": "2",
      "grade_id": "hg9pz-qxoiw2-8hgd8-bmtr5",
      "grade_name": "1701B",
      "subject_id": "wl5yk-38c0g",
      "subject_text": "javaScript下"
    },
    {
      "student_id": "152121000304",
      "student_name": "孙磊",
      "student_pwd": "@Sl19951016",
      "room_id": "f4p5rj-r1s7ke-dmup4-eoqda",
      "room_text": "2",
      "grade_id": "hg9pz-qxoiw2-8hgd8-bmtr5",
      "grade_name": "1701B",
      "subject_id": "wl5yk-38c0g",
      "subject_text": "javaScript下"
    },
    {
      "student_id": "163231000014",
      "student_name": "李宁",
      "student_pwd": "A@s12.21",
      "room_id": "f4p5rj-r1s7ke-dmup4-eoqda",
      "room_text": "2",
      "grade_id": "hg9pz-qxoiw2-8hgd8-bmtr5",
      "grade_name": "1701B",
      "subject_id": "wl5yk-38c0g",
      "subject_…
    }
}</div> -->
</template>

<script>
// path 不知道干嘛呢
import path from 'path'
import { deepClone } from '@/utils'
// getRoutes addRole 删除提交确定点不了 具体干什么不知道
// getRoles 3条模拟数据：从服务器获取所有路由和角色列表
// deleteRole 删除数据
// updateRole 修改数据
import { getRoutes, getRoles, addRole, updateRole } from '@/api/role'
import i18n from '@/lang'

const defaultRole = {
  // key 不知道怎么修改班级名 每次都是4个数字
  key: '',
  keys: '',
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
      console.log('this.rolesList.....', this.rolesList)
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
        if (route.hidden) {
          continue
        }
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
      // console.log('data....', data)
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
        console.log('routes///', routes)
        this.$refs.tree.setCheckedNodes(this.generateArr(routes))
        // set checked state of a node not affects its father and child nodes
        // 设置节点的检查状态不会影响其父节点和子节点
        this.checkStrictly = false
      })
    },
    // 操作 删除
    handleDelete({
      $index,
      row
    }) {
      this.$confirm('确定删除吗?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async() => {
          // await deleteRole(row.key)
          this.rolesList.splice($index, 1)
          this.$message({
            type: 'success',
            message: 'Delete succed!'
          })
        })
        .catch(err => {
          console.error(err)
        })
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
      const { description, keys, name } = this.role
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
        onlyOneChild = { ...parent,
          path: '',
          noShowingChildren: true
        }
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
    overflow: auto;
    padding: 0 24px 24px;
  }
  .top {
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 28px;
  }
  .main {
    // margin-left: 3%;
    width: 100%;
    height: auto;
    background: #fff;
    border-radius: 10px; // margin-bottom: 30px;
  }
</style>
