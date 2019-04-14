<template>
  <div class="add-wraps">
    <div class="header">
      <h3 style="fontSize:24px">添加试题</h3>
    </div>
    <div class="section">
      <div class="content">
        <div class="content-top">
          <!-- 课程类型 -->
          <ul class="type-course">
            <p>课程类型</p>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
          </ul>
          <div class="type-exam">
            <!-- 考试类型 题目类型 -->
            <p>
              <span>请选择题目类型:</span>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </p>

            <p>
              <span>请选择题目类型:</span>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </p>
            <el-button type="primary" icon="el-icon-search">查询</el-button>
          </div>
        </div>
        <div class="content-bottom">
          <div class="content-list">
            <!-- content-list是请求到的数据 渲染的 -->
            <div class="list-left">
              <p>哈哈</p>
              <p>
                <el-button
                  style="color: #1890ff;background: #e6f7ff;border-color: #91d5ff;"
                >默认按钮</el-button>
                <el-button
                  style="color: #2f54eb;background: #f0f5ff; border-color: #adc6ff;"
                >默认按钮</el-button>
                <el-button
                  style="color: #fa8c16;background: #fff7e6;border-color: #ffd591;"
                >默认按钮</el-button>
              </p>
              <p><span style="fontSize:14px;color: #0139FD">萌二招财猫 发布</span></p>
            </div>
            <p>
              <a href="http://www.baidu.com">编辑</a>
            </p>
          </div>
          <div class="content-list">
            <div class="list-left">
              <p>哈哈</p>
              <p>
                <el-button
                  style="color: #1890ff;background: #e6f7ff;border-color: #91d5ff;"
                >默认按钮</el-button>
                <el-button
                  style="color: #2f54eb;background: #f0f5ff; border-color: #adc6ff;"
                >默认按钮</el-button>
                <el-button
                  style="color: #fa8c16;background: #fff7e6;border-color: #ffd591;"
                >默认按钮</el-button>
              </p>
              <p>谁谁发布</p>
            </div>
            <p>
              <a href="http://www.baidu.com">编辑</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  font-size:14px;
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
      font-size:20px;
      text-indent: 2em;
    }
  }
  .section {
    @include num(100%, 100%);
    .content {
      padding-left: 24px;
      width: 95%;
      height: 100%;
      margin: 0 auto;

      .content-top {
        width: 100%;
        height: 220px;
        border: 1px solid #fff;
        background: #fff;
        border-radius: 10px;
        .type-course {
          padding-left: 20px;
          width: 80%;
          height: 50px;
          @include flex(space-around);
          margin: 25px 0;
        }

        .type-exam {
          padding-left: 20px;
          @include num(70%,55px);
          @include flex(space-around);
          &>p{
            display: flex;
            align-items: center;
          }
          .el-button--medium {
            padding:8px 16px;
          background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
          }

        }
      }
    }
  }
}
.content-bottom {
  width: 100%;
  margin-top: 12px;
  padding: 18px;
  background: #fff;
  border-radius: 10px;
  .content-list {
    @include flex(space-between);
    @include num(100%, 114px);
    border-bottom: 1px solid #ccc;
    .list-left {
      display: flex;
      flex-direction: column;
      .el-button--medium {
        padding: 6px 12px;
      }
      p {
        padding: 6px 0px;
      }
    }
  }
}
</style>
