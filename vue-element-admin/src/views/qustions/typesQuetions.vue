<template>
  <div class="add-wraps">
    <div class="header">
      <h3>试题分类</h3>
    </div>
    <div class="section">
      <div class="content">
        <div class="content-top">
          <p>
            <!-- 添加试题类型 参数：text试题名称 sort试题序号 接口/exam/insertQuestionsType -->
            <el-button type="text" @click="open3">+添加类型</el-button>
          </p>
        </div>
        <div class="tablelist">
          <el-table :data="tableData" :header-cell-style="getRowClass" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180" />
            <el-table-column prop="name" label="姓名" width="180" />
            <el-table-column prop="address" label="地址" />
          </el-table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{ // 此处数据应该是请求过来的获取所有的试题类型 参数：无 /exam/getQuestionsType
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小明',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小红',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    open3() {
      this.$prompt('添加新类型', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
    },
    getRowClass({ row, colum, rowIndex, columIndex }) {
      if (rowIndex === 0) {
        return 'background:#efefef'
      } else {
        return ''
      }
    }
  }
}
</script>
<style scoped  lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
@mixin num($w, $h) {
  width: $w;
  height: $h;
}
@mixin flex($j: space-between) {
  display: flex;
  justify-content: $j;
  align-items: center;
  display: -webkit-flex;
  -webkit-justify-content: $j;
  -webkit-align-items: center;
}

.add-wraps {
  @include num(100%, 637px);
  background: #f0f2f5;
  overflow-y: auto;
}
.add-wraps {
  .header {
    @include num(100%, 100px);

    h3 {
      @include num(100%, 100px);
      line-height: 100px;
      font-weight: 400;
      text-indent: 2em;
       font-size:24px;
    }
  }
  .section {
    @include num(100%, 100%);
    .content {
      padding-left: 24px;
      width: 95%;
      height: 100%;
      margin: 0 auto;
      border-radius: 10px;
      background: #fff;
      .content-top {

        & > p {
          @include num(100%, 55px);
          line-height: 55px;
        }

      }
    }
  }
}

.el-message-box__message {
  & > p {
    text-align: center;
  }
}
.el-button--text {
  font-size:14px;
  padding: 12px 35px;

  border: 1px solid;
  margin: 8px 0px;
  color: #fff;
  border-radius:10px;
  background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
}
.has-gutter{
  &>tr{background:#6a6c6e}
}
</style>

