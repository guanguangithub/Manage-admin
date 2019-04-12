<template>
  <div class="Dispaly_box">
    <div class="Dispaly_box_header">
      <p>用户展示</p>
    </div>
    <div class="Dispaly_box_type">
      <ul>
        <li>用户数据</li>
        <li>身份数据</li>
        <li>API接口权限</li>
        <li>身份和API接口关系</li>
        <li>视图接口权限</li>
        <li>身份和视图权限关系</li>
      </ul>
    </div>
    <div class="Dispaly_box_text">
      <p>用户数据</p>
    </div>
    <div class="Dispaly_box_table" />
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .Dispaly_box{
    width:100%;
    height:100%;
    overflow: hidden;
  }
  .Dispaly_box_header{
    width:100%;
    height:80px;
    display: flex;
    align-items:center;
    text-indent:50px;
    font-size:30px;
  }
  .Dispaly_box_type{
    width:100%;
    height:50px;
    ul{
      width:100%;
      height:100%;
      display: flex;
      align-items: center;
      li{
        margin-left:20px;
        height:70%;
        padding:0 10px;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:12px;
        &:nth-child(1){
          margin-left:80px;
        }
      }
    }
  }
  .Dispaly_box_text{
    width:100%;
    height:60px;
    display: flex;
    align-items:center;
    text-indent:50px;
    font-size:26px;
  }
  .Dispaly_box_table{
    margin: 0 auto;
    width:90%;
    height:500px;
    border: 1px solid #ccc;
  }
</style>

