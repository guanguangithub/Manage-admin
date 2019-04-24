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
          <div class="delete_content_left_child_content" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      studentArr: []
    }
  },
  created() {
    this.studentDeleta(this.$route.query.ids).then((res) => {
      res.questions.forEach((item, index) => {
        this.studentArr.push(item)
        console.log(this.studentArr)
      })
    })
  },
  methods: {
    ...mapActions({
      studentDeleta: 'Testmanagement/studentDeleta'
    })
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
      .delete_content_left{
        width:100%;
        height: auto;
        .delete_content_left_child{
          width:100%;
          height:auto;
          background-color: #fff;
          .delete_content_left_child_title{
            width:100%;
            height:60px;
            border:1px solid #000;
            display: flex;
            align-items: center;
            p{
              &:nth-child(1){
                margin-left:20px;
                font-size:16px;
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
        }
      }
    }
  }
</style>
