<template>
  <div class="add_box">
    <div class="add_box_heander">
      <p>添加用户</p>
    </div>
    <div class="add_box_content">
      <!-- 添加用户  -->
      <div class="add_box_content_add">
        <p id="ptx">
          <span v-for="(item,index) in dataArr" :key="index" :class="inds===index?'current':''" @click="SpanClick(index)">{{ item.title }}</span>
        </p>
        <!-- 添加用户 -->
        <div v-if="inds === 0" class="add_box_content_child_one">
          <p>
            <input v-model="user_name" type="text" placeholder="请输入用户名" @change="userGetname($event)">
          </p>
          <p>
            <input v-model="user_pwd" type="text" placeholder="请输入密码" @change="userGetpass($event)">
          </p>
          <p>
            <select @change="selectVal($event)">
              <option selected disabled>请选择身份ID</option>
              <option v-for="(item,index) in identityArr" :key="index" :value="item.identity_id">{{ item.identity_text }}</option>
            </select>
          </p>
          <p>
            <el-button type="primary" @click="ClickAdduser">确定</el-button>
            <el-button plain>重置</el-button>
          </p>
        </div>
        <!-- 更新用户 -->
        <div v-else class="add_box_content_child_two">
          <p>
            <select>
              <option value="" selected disabled>请选择身份标识</option>
              <option v-for="(item,index) in userArr" :key="index" value="">{{ item.user_name }}</option>
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
              <option value="" selected disabled>请选择身份ID</option>
              <option v-for="(item,index) in identityArr" :key="index" value="">{{ item.identity_text }}</option>
            </select>
          </p>
          <p>
            <el-button type="primary">确定</el-button>
            <el-button plain>重置</el-button>
          </p>
        </div>
      </div>
      <!-- 添加身份 -->
      <div class="add_box_content_Identity">
        <p>
          <span>添加身份</span>
        </p>
        <p>
          <input v-model="Identity_add" type="text" placeholder="请输入你的身份" @change="IdentityAdd($event)">
        </p>
        <p>
          <el-button type="primary" @click="addIdentity">确定</el-button>
          <el-button plain>重置</el-button>
        </p>
      </div>
      <!-- 添加API接口权限 -->
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
      <!-- 添加视图接口权限 -->
      <div class="add_box_content_Viewinterface">
        <p>
          <span>添加视图接口权限</span>
        </p>
        <p>
          <select>
            <option value="" selected disabled>请选择已有视图</option>
            <option v-for="(item,index) in ViewinterArr" :key="index" value="">{{ item.view_authority_text }}</option>
          </select>
        </p>
        <p>
          <el-button type="primary">确定</el-button>
          <el-button plain>重置</el-button>
        </p>
      </div>
      <!-- 给身份设置API接口权限 -->
      <div class="add_box_content_setApi">
        <p>
          <span>给身份设置API接口权限</span>
        </p>
        <p>
          <select>
            <option value="" selected disabled>请选择身份ID</option>
            <option v-for="(item,index) in identityArr" :key="index" value="">{{ item.identity_text }}</option>
          </select>
        </p>
        <p>
          <select>
            <option value="" selected disabled>请选择API接口权限</option>
            <option v-for="(item,index) in apiperArr" :key="index" value="">{{ item.api_authority_text }}</option>
          </select>
        </p>
        <p>
          <el-button type="primary">确定</el-button>
          <el-button plain>重置</el-button>
        </p>
      </div>
      <!-- 给身份设置视图权限 -->
      <div class="add_box_content_getIdentity">
        <p>
          <span>给身份设置视图权限</span>
        </p>
        <p>
          <select>
            <option value="" selected disabled>请选择身份ID</option>
            <option v-for="(item,index) in identityArr" :key="index" value="">{{ item.identity_text }}</option>
          </select>
        </p>
        <p>
          <select>
            <option value="" selected disabled>请选择视图权限ID</option>
            <option v-for="(item,index) in ViewinterArr" :key="index" value="">{{ item.view_authority_text }}</option>
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
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      dataArr: [
        {
          title: '添加用户'
        },
        {
          title: '更新用户'
        }
      ],
      identityArr: [], // 身份数据
      apiperArr: [], // API数据
      ViewinterArr: [], // 视图数据
      userArr: [], // 用户数据
      inds: 0,
      // 添加用户
      user_name: '',
      user_pwd: '',
      identity_id: '',
      user_info: {},
      // 添加身份
      Identity_add: '',
      Identity_info: {}
    }
  },
  created() {
    // 身份数据
    this.identitydele().then(res => {
      if (res.code === 1) {
        this.identityArr = res.data
      }
    })
    // API数据
    this.apipermissions().then(res => {
      if (res.code === 1) {
        this.apiperArr = res.data
      }
    })
    // 视图数据
    this.Viewinterdele().then(res => {
      if (res.code === 1) {
        this.ViewinterArr = res.data
      }
    })
    // 用户数据
    this.usermanagedele().then(res => {
      if (res.code === 1) {
        this.userArr = res.data
      }
    })
  },
  methods: {
    // type切换
    SpanClick(ind) {
      this.inds = ind
    },
    // vuex库
    ...mapActions({
      // 获取数据AIP
      usermanagedele: 'usermanage/userdelete',
      identitydele: 'usermanage/identitydelete',
      apipermissions: 'usermanage/apipermissions',
      Interfacedele: 'usermanage/InterfaceRelationship',
      Viewinterdele: 'usermanage/Viewinterface',
      Identityviewdele: 'usermanage/Identityview',
      // 添加数据AIP
      addToMockUser: 'addToMock/addToMockUser',
      addToMockIdentity: 'addToMock/addToMockIdentity'
    }),
    // 添加用户的
    ClickAdduser() {
      const userName = this.userArr.filter((item, index) => {
        return item.user_name === this.user_name
      })
      const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/
      if (this.user_name.trim() === '' || this.user_pwd.trim() === '' || this.identity_id.trim() === '') {
        alert('参数错误')
      } else if (!reg.test(this.user_pwd)) {
        alert('您的密码应该最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符')
        return
      } else if (userName.length) {
        alert('用户名已经存在')
      } else {
        this.user_info.user_name = this.user_name
        this.user_info.user_pwd = this.user_pwd
        this.user_info.identity_id = this.identity_id
        this.addToMockUser(this.user_info).then(res => {
          if (res.code === 1) {
            alert(res.msg)
            this.user_name = ''
            this.user_pwd = ''
            this.identity_id = ''
          }
        })
      }
    },
    userGetname(event) {
      this.user_name = event.target.value
    },
    userGetpass(event) {
      this.user_pwd = event.target.value
    },
    selectVal(event) {
      this.identity_id = event.target.value
    },
    // 添加身份的
    addIdentity() {
      const identityData = this.identityArr.filter((item, index) => {
        return item.identity_text === this.Identity_add
      })
      if (this.Identity_add === '') {
        alert('参数错误')
      } else if (identityData.length) {
        alert('身份已经存在')
      } else {
        this.Identity_info.identity_text = this.Identity_add
        console.log(this.Identity_info)
        this.addToMockIdentity(this.Identity_info).then((res) => {
          if (res.code === 1) {
            alert(res.msg)
            this.Identity_add = ''
          }
        })
      }
    },
    IdentityAdd(event) {
      this.Identity_add = event.target.value
    }
  }
}
</script>
<style lang="scss">
.add_box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f0f2f5;
  padding-bottom: 20px;
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
  width: 92%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  input{
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;
  }
  select{
    width:150px;
    height:32px;
    font-variant: tabular-nums;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    display: inline-block;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;
  }
  input:hover,select:hover{
    border-color: #295eff;
  }
}
.add_box_content_add {
  padding:10px;
  width: 33.3%;
  height: auto;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-radius: 5px;
  #ptx{
    .current{
      border: 1px solid #0139FD;
      background-color: #fff;
      color: #0139FD;
    }
  }
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
        background-color: #fff;
        color: #0139FD;
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
  padding:10px;
  width: 33.3%;
  height: auto;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-radius: 5px;
    p{
        width:100%;
        height:50px;
        display: flex;
        align-items: center;
        &:nth-child(1){
            height:60px;
            span{
              padding:10px 30px;
              margin-left:20px;
              border: 1px solid #0139FD;
              background-color: #fff;
              color: #0139FD;
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
  padding:10px;
  width: 33.3%;
  height: auto;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-radius: 5px;
    p{
        width:100%;
        height:50px;
        display: flex;
        align-items: center;
        &:nth-child(1){
            height:60px;
            span{
              padding:10px 30px;
              margin-left:20px;
              border: 1px solid #0139FD;
              background-color: #fff;
              color: #0139FD;
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
    padding:10px;
    width: 33.3%;
    height: auto;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-radius: 5px;
    p{
        width:100%;
        height:50px;
        display: flex;
        align-items: center;
        &:nth-child(1){
            height:60px;
            span{
              padding:10px 30px;
              margin-left:20px;
              border: 1px solid #0139FD;
              background-color: #fff;
              color: #0139FD;
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
    padding:10px;
    width: 33.3%;
    height: auto;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-radius: 5px;
    p{
        width:100%;
        height:50px;
        display: flex;
        align-items: center;
        &:nth-child(1){
            height:60px;
            span{
              padding:10px 30px;
              margin-left:20px;
              border: 1px solid #0139FD;
              background-color: #fff;
              color: #0139FD;
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
    padding:10px;
    width: 33.3%;
    height: auto;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-radius: 5px;
    p{
        width:100%;
        height:50px;
        display: flex;
        align-items: center;
        &:nth-child(1){
            height:60px;
            span{
              padding:10px 30px;
              margin-left:20px;
              border: 1px solid #0139FD;
              background-color: #fff;
              color: #0139FD;
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
