<template>
  <div class="box">
    <div class="top">
      学生管理
    </div>
    <div class="main">
      <sticky :z-index="10" class-name="sub-navbar">
        <el-form :style="{float:'left','margin-left':'5px'}">
          <el-input v-model="yName" placeholder="输入学生名字" :style="{width:'200px'}" />
          <el-select v-model="rolesList.grade_name" placeholder="请选择教室号">
            <el-option v-for="item in array" :key="item.value" :value="item" />
          </el-select>
          <el-select v-model="rolesList.room_text" placeholder="班级名">
            <el-option v-for="item in rolesList" :key="item.value" :value="item.grade_name" />
          </el-select>
          <el-tree ref="tree" node-key="path" :style="{display:'none'}" />
          <el-button>搜索</el-button>
          <el-button>重置</el-button>
        </el-form>
      </sticky>
      <div class="components-container">
        <el-table :data="rolesList.slice((currpage - 1) * pagesize, currpage * pagesize)" border>
          <el-table-column align="center" label="姓名">
            <!-- slot-scope="scope" vue的一个作用域插槽-->
            <template slot-scope="scope">
              {{ scope.row.student_name }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="学号">
            <template slot-scope="scope">
              {{ scope.row.student_id }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="班级">
            <template slot-scope="scope">
              {{ scope.row.grade_name }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="教室">
            <template slot-scope="scope">
              {{ scope.row.room_text }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="密码">
            <template slot-scope="scope">
              {{ scope.row.student_pwd }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <!-- <el-button type="primary" size="small" @click="handleEdit(scope)">
                {{ $t('permission.editPermission') }}
              </el-button> -->
              <el-button type="danger" size="small" @click="handleDelete(scope)">
                {{ $t('permission.delete') }}
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- <tbody style="text-align: center;">
        <tr v-for="( item, i ) in testpage2.slice((currentPage-1)*pagesize,currentPage*pagesize)">
          <td>{{item.id}}</td>
          <td>{{item.title}}</td>
          <td>{{item.peo}}</td>
          <td>{{item.tel}}</td>
          <td>{{item.dataTimes}}</td>
          <td>{{item.money}}万</td>
          <td><p class="pic"><img :src="item.pho" /></p></td>
          <td>
              <el-button size="mini" type="success" class="yl-sty"><i class="el-icon-search"></i>预览</el-button>
              <el-button size="mini" type="primary" v-model="msg" @click="xiugai(i)"><i class="el-icon-edit"></i>修改
              </el-button>
              <el-button size="mini" type="danger"  @click="deleteRow(i,testpage)"><i class="el-icon-delete"></i>删除</el-button>
          </td>
        </tr>
    </tbody> -->
      <div class="block">
        <el-pagination
          class="elpagination"
          :current-page="currentPage4"
          :page-sizes="[10, 20, 50, 100]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="num"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import path from 'path'
// import i18n from '@/lang'
import Sticky from '@/components/Sticky'
import { getStudent } from '@/api/role'
// import { async } from 'q';
export default {
  name: 'StickyDemo',
  components: {
    Sticky
  },
  data() {
    return {
      currentPage4: 4,
      rolesList: [],
      num: 0,
      pagesize: 10,
      currpage: 1,
      yName: '',
      arr: [],
      array: []
    }
  },
  beforeCreat() {
    //  this.a()
  },
  computed: {
    // testpage2: function() {
    //   var _this = this
    //   // 逻辑-->根据input的value值筛选testpage中的数据
    //   var arrByZM = []// 声明一个空数组来存放数据
    //   for (var i = 0; i < this.rolesList.length; i++) {
    //     // for循环数据中的每一项（根据姓名值搜）
    //     if (this.rolesList[i].peo.search(this.yName) != -1) {
    //       // 判断输入框中的值是否可以匹配到数据，如果匹配成功
    //       arrByZM.push(this.rolesList[i])
    //       // 向空数组中添加数据
    //     }
    //   }
    //   return arrByZM
    // }
  },
  created() {
    this.getStudent()
    // this.a()
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currpage = val
    },
    async getStudent() {
      const res = await getStudent()
      this.rolesList = res.data
      this.num = res.data.length
      console.log('res......', this.num)
    }
    // a() {
    //   // let that = this
    //   this.rolesList.forEach(item => {
    //     this.arr.push(item.room_text)
    //     // console.log(arr.length,'item.room_text,,,,,,,,,,,,');
    //   })
    //   // console.log(this.rolesList.length);

    //   for (var i = 0; i < this.arr.length; i++) {
    //     if (this.array.indexOf(this.arr[i]) === -1) {
    //       this.array.push(this.arr[i])
    //     }
    //   }
    //   return this.array
    //   // console.log(this.array, 'array,,,')
    // }
  }
  // qc: function() {

  // }
}
</script>
<style lang="scss" scoped>
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
  }
  .components-container{
    // margin: 10px;
    width: 100%;
    margin: 0;
  }
  .time-container {
    display: inline-block;
  }
  .block{
    width: 100%;
    height: 50px;
    position: relative;
  }
  .elpagination{
    position: absolute;
    top:10px;
    right: 10px;
  }
</style>
