<template>
  <div class="add_box">
    <div class="add_box_heander">
      <p>添加用户</p>
    </div>
    <div class="add_box_content">
      <div class="add_box_content_add">
        <p>
          <span>添加用户</span>
          <span>更新用户</span>
        </p>
        <div class="add_box_content_child_one">
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
        <!-- <div class="add_box_content_child_two">
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
                </div> -->
      </div>

      <div class="add_box_content_Identity">
        <p>
          <span>添加身份</span>
        </p>
        <p>
          <input type="text" placeholder="请输入你的身份">
        </p>
        <p>
          <el-button type="primary">确定</el-button>
          <el-button plain>重置</el-button>
        </p>
      </div>

      <div class="add_box_content_API">
        <p>
          <span>添加API接口权限</span>
        </p>
        <p>
          <input type="text" placeholder="请输入API接口权限名称">
        </p>
        <p>
          <input type="text" placeholder="请输入API接口权限url">
        </p>
        <p>
          <input type="text" placeholder="请输入API接口权限方法">
        </p>
        <p>
          <el-button type="primary">确定</el-button>
          <el-button plain>重置</el-button>
        </p>
      </div>

      <div class="add_box_content_Viewinterface">
        <p>
          <span>添加视图接口权限</span>
        </p>
        <p>
          <select>
            <option value="" disabled="true">请选择已有视图</option>
            <option value="">请选择已有视图</option>
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

      <div class="add_box_content_setApi">
        <p>
          <span>给身份设置API接口权限</span>
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
          <select>
            <option value="" disabled="true">请选择API接口权限</option>
            <option value="">请选择API接口权限</option>
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

      <div class="add_box_content_getIdentity">
        <p>
          <span>给身份设置视图权限</span>
        </p>
        <p>
          <select>
            <option value="" disabled="true">请选择视图权限ID</option>
            <option value="">请选择视图权限ID</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
        </p>
        <p>
          <select>
            <option value="" disabled="true">请选择视图权限ID</option>
            <option value="">请选择视图权限ID</option>
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
.add_box_content_add {
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
  .add_box_content_child_one{
        width:100%;
        height: auto;
        p{
          width:100%;
          height:50px;
          display: flex;
          align-items: center;
            &:nth-child(1),&:nth-child(2){
                justify-content: center;
                input{
                  width:91%;
                  height:35px;
                  text-indent: 10px;
                }
            }
            &:nth-child(3){
              select{
                margin-left:20px;
              }
            }
            &:nth-child(4){
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
                text-indent: 10px;
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
.add_box_content_Identity{
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
              margin-left:20px;
            }
        }
        &:nth-child(2){
            justify-content: center;
            input{
              width:91%;
              height:35px;
              text-indent: 10px;
            }
        }
        &:nth-child(3){
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
.add_box_content_API{
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
              margin-left:20px;
            }
        }
        &:nth-child(2),&:nth-child(3),&:nth-child(4){
            justify-content: center;
            input{
              width:91%;
              height:35px;
              text-indent: 10px;
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
.add_box_content_Viewinterface{
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
              margin-left:20px;
            }
        }
        &:nth-child(2){
          select{
              margin-left:20px;
          }
        }
        &:nth-child(3){
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
.add_box_content_setApi{
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
              margin-left:20px;
            }
        }
        &:nth-child(2),&:nth-child(3){
          select{
              margin-left:20px;
          }
        }
        &:nth-child(4){
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
.add_box_content_getIdentity{
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
              margin-left:20px;
            }
        }
        &:nth-child(2),&:nth-child(3){
          select{
              margin-left:20px;
          }
        }
        &:nth-child(4){
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
</style>
