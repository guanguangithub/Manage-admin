<template>
  <div class="dashboard-editor-container">
    <div class=" clearfix">
      <pan-thumb :image="userInfo.avatar" style="float: left">
        Your roles:
        <span class="pan-info-roles">{{ userInfo.identity_text }}</span>
      </pan-thumb>
      <github-corner style="position: absolute; top: 0px; border: 0; right: 0;" />
      <div class="info-container">
        <span class="display_name">{{ userInfo.user_name }}</span>
      </div>
    </div>
    <div>
      <img :src="userInfo.avatar" class="emptyGif">
      <span class="display_name">{{ name }}</span>
      <span style="font-size:20px;padding-top:20px;display:inline-block;">欢迎您！亲爱的{{ userInfo.identity_text }}</span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import PanThumb from '@/components/PanThumb'
import GithubCorner from '@/components/GithubCorner'

export default {
  name: 'DashboardEditor',
  components: { PanThumb, GithubCorner },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles',
      'userInfo'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .emptyGif {
    display: block;
    width: 45%;
    margin: 0 auto;
  }

  .dashboard-editor-container {
    background-color: #e3e3e3;
    min-height: 100vh;
    padding: 50px 60px 0px;
    .pan-info-roles {
      font-size: 12px;
      font-weight: 700;
      color: #333;
      display: block;
    }
    .info-container {
      position: relative;
      margin-left: 190px;
      height: 150px;
      line-height: 200px;
      .display_name {
        font-size: 48px;
        line-height: 48px;
        color: #212121;
        position: absolute;
        top: 25px;
      }
    }
  }
</style>
