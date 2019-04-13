<template>
  <div class="add_box">
    <div class="add_box_heander">
      <p>添加用户</p>
    </div>
    <div class="add_box_content">
      <div class="add_box_content_child">
        <p>
          <span>添加用户</span>
          <span>更新用户</span>
        </p>
        <div class="add_box_content_child_two">
          <p>
            <select>
              <option value="" disabled="true">请选择身份标识</option>
              <option value="">请选择身份标识</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </p>
          <p>
            <input type="text" placeholder="请输入用户名">
          </p>
          <p>
            <input type="text" placeholder="请输入密码">
          </p>
          <p>
            <select>
              <option value="" disabled="true">请选择身份标识</option>
              <option value="">请选择身份标识</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </p>
          <p>
            <el-button type="primary">确定</el-button>
            <el-button plain>重置</el-button>
          </p>
        </div>
      </div>
      <div class="add_box_content_child" />
      <div class="add_box_content_child" />
      <div class="add_box_content_child" />
      <div class="add_box_content_child" />
      <div class="add_box_content_child" />
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.add_box {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.add_box_heander {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  p {
    margin-left: 50px;
    font-size: 20px;
  }
}
.add_box_content {
  margin: 0 auto;
  width: 90%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
}
.add_box_content_child {
  margin: 20px 20px;
  width: 470px;
  height: auto;
  border: 1px solid #000;
  p{
    width:100%;
    height:50px;
    display: flex;
    align-items: center;
    &:nth-child(1){
      height:60px;
      span{
        padding:10px 30px;
        border: 1px solid #ccc;
        &:nth-child(1){
          margin-left:20px;
        }
      }
    }
  }
  .add_box_content_child_two{
        width:100%;
        height: auto;
        p{
          width:100%;
          height:50px;
          display: flex;
          align-items: center;
            &:nth-child(1){
              select{
                margin-left:20px;
              }
            }
            &:nth-child(2),&:nth-child(3){
              justify-content: center;
              input{
                width:91%;
                height:35px;
              }
            }
            &:nth-child(4){
              select{
                margin-left:20px;
              }
            }
            &:nth-child(5){
                button{
                  height:35px;
                  &:nth-child(1){
                    margin-left: 20px;
                    width:120px;
                  }
                  &:nth-child(2){
                    width:80px;
                  }
                }
            }
          }
  }
}
</style>
