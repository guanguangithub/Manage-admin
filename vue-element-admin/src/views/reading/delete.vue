<template>
  <div class="delete_box">
    <h2>阅卷</h2>
    <div class="delete_content">
      <div class="delete_content_left">
        <div v-for="(item,index) in studentArr" :key="index" class="delete_content_left_child">
          <div class="delete_content_left_child_title">
            <p>{{ item.title }}</p>
            <p>{{ item.questions_type_text }}</p>
          </div>
          <div class="delete_content_left_child_content">
            <markdown-editor v-model="item.questions_stem" />
          </div>
          <div class="delete_content_left_child_fortera">
            <markdown-editor v-model="item.student_answer" style="width:50%;border:0;" />
            <markdown-editor v-model="item.questions_answer" style="width:50%;border:0;" />
          </div>
        </div>
      </div>
      <div class="delete_content_right">
        <div class="positright_box">
          <h2>{{ studentDeARR.student_name }}</h2>
          <h2>得分<span>{{ studentDeARR.score }}</span></h2>
          <div class="block">
            <el-slider
              v-model="val"
              :min="0"
              :max="100"
              :step="1"
              @change="mousehover"
            />
          </div>
          <div class="bootArr">
            <el-button type="primary">确定</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import MarkdownEditor from '@/components/MarkdownEditor'
export default {
  components: {
    MarkdownEditor
  },
  data() {
    return {
      studentArr: [],
      studentDeARR: [],
      val: 0
    }
  },
  created() {
    this.studentDeleta(this.$route.query.ids).then((res) => {
      this.studentDeARR = res
      res.questions.forEach((item, index) => {
        this.studentArr.push(item)
      })
    })
  },
  methods: {
    ...mapActions({
      studentDeleta: 'Testmanagement/studentDeleta'
    }),
    mousehover(val) {
      console.log(val)
      this.studentDeARR.score = val
    }
  }
}
</script>
<style lang="scss">
  .delete_box{
    width:100%;
    height:100% !important;
    display: flex;
    flex-direction: column;
    background: #f0f2f5;
    padding: 0px 24px 24px;
    h2{
      width:100%;
      height:71px;
      padding: 20px 0px;
      display: flex;
      align-items: center;
      font-size:26px;
      font-weight: 500;
    }
    .delete_content{
      width:100%;
      height: auto;
      display: flex;
      .delete_content_left{
        width:75%;
        height: auto;
        display: flex;
        flex-direction: column;
        border-radius:20px;
        padding:10px;
        background-color: #fff;
        .delete_content_left_child{
          width:100%;
          height:auto;
          .delete_content_left_child_title{
            width:100%;
            height:80px;
            display: flex;
            align-items: center;
            p{
              &:nth-child(1){
                margin-left:20px;
                font-size:26px;
              }
              &:nth-child(2){
                margin-left:20px;
                color: #1890ff;
                background: #e6f7ff;
                border:1px solid #91d5ff;
              }
            }
          }
          .delete_content_left_child_content{
            width:100%;
            height:auto;
          }
          .delete_content_left_child_fortera{
            width:100%;
            display: flex;
          }
        }
      }
      .delete_content_right{
        width:25%;
        height: auto;
        display: flex;
        justify-content: center;
        .positright_box{
          width:280px;
          height:220px;
          padding:20px;
          background-color: #fff;
          border-radius:10px;
          position: fixed;
          h2:nth-child(1){
            width:100%;
            height:50px;
            display: flex;
            align-items: center;
            text-indent:10px;
            font-size:20px;
          }
          h2:nth-child(2){
            width:100%;
            height:50px;
            display: flex;
            align-items: center;
            text-indent:10px;
            font-size:20px;
            span{
              font-size: 28px;
              color: rgb(1, 57, 253);
            }
          }
          .bootArr{
            width:100%;
            height:60px;
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
</style>
