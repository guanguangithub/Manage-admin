<template>
  <div class="questions-wraps">
    <div class="header">
      <!-- 查看所有试题 /exam/questions/new -->
      <h3>试题详情</h3>
    </div>
    <div class="section">
      <div class="content">
        <div class="left">
          <p class="emitor">发布者:{{ detailobj.user_name }}</p>
          <p>题目信息</p>
          <el-button
            style="color: #1890ff;background: #e6f7ff;border-color: #91d5ff;"
          >代码补全</el-button>
          <el-button
            style="color: #2f54eb;background: #f0f5ff; border-color: #adc6ff; padding 6px 10px"
          >javascript</el-button>
          <el-button style="color: #fa8c16;background: #fff7e6;border-color: #ffd591;">周考1</el-button>
          <p>{{ detailobj.title }}</p>
          <div class="leftcode"><code>{{ detailobj.questions_stem }}</code></div>
        </div>
        <div class="right">
          <p class="emitor" style="width:100% height:50px lineHeight:50px">答案信息</p>
          <div class="rightcode"><code>{{ detailobj.questions_answer }}</code></div>
        </div>
        <!-- <markdown-editor v-model="content" getValue="haha" :options="defaultOptions"/> -->
      </div>
    </div>
  </div>
</template>
<script>
// import MarkdownEditor from '@/components/MarkdownEditor'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    // MarkdownEditor
  },
  props: {},
  data() {
    return {
      detailobj: {}
    }
  },
  computed: {
    ...mapGetters(['checkitemlist'])
  },
  mounted() {
    this.checkitems()
    const id = this.$route.query.id
    this.detailobj = this.checkitemlist.find((item, ind) => {
      return item.questions_id === id
    })
  },
  methods: {
    ...mapActions({
      checkitems: 'examType/checkitems'
    }),
    haha(value) {
      console.log('value')
    }
  }
}
</script>
<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 14px;
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

.questions-wraps {
  @include num(100%, 637px);
  background: #f0f2f5;
  overflow-y: auto;
}
.questions-wraps {
  .header {
    @include num(100%, 100px);

    h3 {
      @include num(100%, 100px);
      line-height: 100px;
      font-weight: 400;
      font-size: 24px;
      text-indent: 2em;
    }
  }
}
.section {
    @include num(100%, 100%);
    .content {
      padding-left: 24px;
      width: 95%;
      height: 100%;
      margin: 0 auto;
      @include flex(space-between);
      .left{
        width:60%;
        height:100%;
        background: #fff;
        padding:0 15px;
         border-radius: 10px;
          .leftcode{
          padding:12px 12px 12px 0;
          code{
            border-radius:10px;
          }
        }
         p{
           width:100%;
           height:40px;
           line-height:40px;
           margin:5px 0px;
         }
         .el-button--medium {
        padding: 4px 10px;
      }

      }
      .right{
        width:30%;
        background: #fff;
        height:100%;
        border-radius: 10px;
        margin:0 10px;
         p{
           width:100%;
           height:40px;
           line-height:40px;
           margin:5px 0px;
         }
        .rightcode{
          padding:12px;
          code{
            border-radius:10px;
          }
        }
      }
    }
  }

</style>
