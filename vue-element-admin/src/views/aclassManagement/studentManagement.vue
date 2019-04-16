<template>
  <div class="box">
    <div class="top">
      学生管理
    </div>
    <div class="main">
      <sticky :z-index="10" class-name="sub-navbar">
        <el-form :style="{float:'left','margin-left':'5px'}">
          <el-input placeholder="输入学生名字" :style="{width:'200px'}" />
          <el-select placeholder="请选择教室号">
            <el-option v-for="item in options" :key="item.value" :value="item.label">
            </el-option>
          </el-select>
          <el-select placeholder="班级名">
            <el-option v-for="item in options" :key="item.value" :value="item.label">
            </el-option>
          </el-select>
          <el-tree ref="tree" node-key="path" :style="{display:'none'}" />
          <el-button>搜索</el-button>
          <el-button>重置</el-button>
        </el-form>
      </sticky>
      <div class="components-container">
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
        <div>placeholder</div>
      </div>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[50, 100, 150, 200, 250, 300, 250, 400]" :page-size="50" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import Sticky from '@/components/Sticky'
  export default {
    name: 'StickyDemo',
    components: {
      Sticky
    },
    data() {
      return {
        time: '',
        url: '',
        platforms: ['a-platform'],
        platformsOptions: [{
            key: 'a-platform',
            name: 'platformA'
          },
          {
            key: 'b-platform',
            name: 'platformB'
          },
          {
            key: 'c-platform',
            name: 'platformC'
          }
        ],
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now()
          }
        },
        options: [{
          value: '选项1',
          label: '1'
        }, {
          value: '选项2',
          label: '2'
        }, {
          value: '选项3',
          label: '3'
        }, {
          value: '选项4',
          label: '4'
        }, {
          value: '选项5',
          label: '5'
        }],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
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
  .components-container div {
    margin: 10px;
  }
  .time-container {
    display: inline-block;
  }
</style>
<!-->-->