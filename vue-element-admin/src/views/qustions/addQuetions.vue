<template>
  <div class="add-wraps">

    <div class="header">
      <h3 style="fontSize:24px">添加试题</h3>
    </div>
    <div class="section">
      <div class="content">
        <div class="content-top">
          <p>题目信息</p>
          <span>题干</span>
          <p class="inp">
            <el-input v-model="input" placeholder="请输入内容" />
          </p>
        </div>
        <div class="content-main">
          <p>题目主题</p>
          <div class="content-box">
            <div class="content-ul">
              <ul class="left">
                <li>
                  <i class="mce-ico mce-i-fullscreen" />
                </li>
                <li>2</li>
                <li>H1</li>
                <li>H2</li>
                <li>H3</li>
                <li>H4</li>
                <li>H5</li>
                <li>8</li>
                <li>9</li>
              </ul>
              <div class="right">
                <p>10</p>
                <p>11</p>
              </div>
            </div>
            <div class="content-textarea">
              <ol class="textarea-left">
                <li>1</li>
              </ol>
              <textarea id name cols="30" rows="10" placeholder="请输入内容..." />
            </div>
          </div>
          <div class="select-check">
            <p>请输入考试类型</p>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="select-check">
            <p>请选择以下课程</p>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="select-check">
            <p>请选择题目类型</p>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="content-ul">
            <ul class="left">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ul>
            <div class="right">
              <p>10</p>
              <p>11</p>
            </div>
          </div>
          <div class="content-textarea">
            <ol class="textarea-left">
              <li>1</li>
            </ol>
            <textarea id name cols="30" rows="10" placeholder="请输入内容..." />
          </div>
        </div>
        <!-- 接口/exam/questions -->
        <button>提交</button>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data() {
    return {

      options: [// 此处请求应该是请求过来的活的数据
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '周考一'
    }
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
        width: 100%;
        height: 120px;
        & > p {
          @include num(100%, 45px);
          line-height: 45px;
        }
        .inp {
          width: 30%;
        }
      }
    }
  }
}

.content-main {
  & > p {
    @include num(100%, 50px);
    line-height: 50px;
  }
}
.content-box {
  border: 1px solid #ccc;
  .content-ul {
    @include num(100%, 45px);
    @include flex(space-between);
    border-bottom: 1px solid #ccc;
    .left {
      width: 30%;
      @include flex(space-between);
    }
    .right {
      width: 5%;
      @include flex(space-between);
    }
  }
}
.content-ul {
  @include num(100%, 45px);
  @include flex(space-between);
  border-bottom: 1px solid #ccc;
  .left {
    width: 30%;
    @include flex(space-between);
  }
  .right {
    width: 5%;
    @include flex(space-between);
  }
}
.content-textarea {
  @include num(100%, 160px);
  @include flex(space-between);
  .textarea-left {
    @include num(45px, 100%);
    text-align: center;
    background: #efefef;
  }
  textarea {
    @include num(100%, 100%);
  }
}
.select-check {
  @include num(100%, 100px);
  margin: 5px 0px;
  & > p {
    @include num(100%, 45px);
    line-height: 45px;
  }
}
</style>
