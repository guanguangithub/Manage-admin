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
            <el-button type="text" @click="exportExcel">导出excel</el-button>
          </p>
        </div>
        <div class="tablelist">
          <el-table
            :data="getquestionslist.data"
            :header-cell-style="getRowClass"
            style="width: 100% "
            :row-style="getRowstyle"
          >
            <el-table-column prop="questions_type_id" label="类型Id" width="180" />
            <el-table-column prop="questions_type_text" label="类型名称" width="180" />
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      text: '',
      sort: ''
    }
  },
  computed: {
    ...mapGetters(['getquestionslist'])
  },

  mounted() {
    this.getQuestionsType()
  },

  methods: {
    ...mapActions({
      getQuestionsType: 'examType/getquestionstype',
      insertQuestionsType: 'examType/insertQuestionsType',
      delQuestionsType: 'examType/delQuestionsType'
    }),
    handleDelete(index, row) {
      this.delQuestionsType({
        id: row.questions_type_id
      }).then(res => {
        if (res.code === 1) {
          this.getQuestionsType()
        } else {
          alert('删除失败')
        }
      })
    },
    open3() {
      this.$prompt('添加新类型', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          this.insertQuestionsType({
            text: value,
            sort: Math.random()
              .toString()
              .substr(2, 6)
          }).then(() => {
            this.getQuestionsType()
          })
          this.$message({
            message: '添加成功'
          })
        })
        .catch(() => {
          console.log('添加失败')
        })
    },
    getRowClass({ row, colum, rowIndex, columIndex }) {
      if (rowIndex === 0) {
        return 'background:#efefef'
      } else {
        return ''
      }
    },
    getRowstyle() {
      return 'height:53px'
    },
    exportExcel() {
      this.downloadLoading = true
      const list = this.getquestionslist.data.map((item) => {
        const arr = Object.values(item)
        console.log(arr)
        return arr.map((it) =>
          JSON.stringify(it)
        )
      })
      const header = Object.keys(this.getquestionslist.data[0])
      import('@/vendor/Export2Excel').then(excel => {
        excel.export_json_to_excel({
          header: header,
          data: list,
          filename: '列表',
          autoWidth: this.autoWidth,
          bookType: 'xlsx'
        })
        this.downloadLoading = false
      })
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
      font-size: 24px;
    }
  }
  .section {
    @include num(100%, 100%);
    .content {
      padding-left: 24px;
      width: 95%;
      height: auto;
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
  font-size: 14px;
  padding: 12px 35px;

  border: 1px solid;
  margin: 8px 0px;
  color: #fff;
  border-radius: 10px;
  background: linear-gradient(-90deg, #4e75ff, #0139fd) !important;
}
.has-gutter {
  & > tr {
    background: #6a6c6e;
  }
}
.el-button--medium{
  padding:8px 16px;
}
</style>

