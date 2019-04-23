<template>
  <div>
    <pan-thumb :image="image" style="width:300px;height:300px;margin:20px" />
    <el-button type="primary" icon="upload" style="width:200px;height:42px; position:absolute; top:160px; margin-left:60px;" @click="imagecropperShow=true">
      Change Avatar
    </el-button>
    <image-cropper
      v-show="imagecropperShow"
      :key="imagecropperKey"
      :width="300"
      :height="300"
      url="http://123.206.55.50:11000/upload"
      lang-type="en"
      @close="close"
      @crop-upload-success="cropSuccess"
    />
  </div>
</template>
<script>
import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    ImageCropper,
    PanThumb
  },
  data() {
    return {
      imagecropperShow: false,
      imagecropperKey: 0,
      image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
    }
  },
  computed: {
    // avatarUser
    ...mapGetters(['userInfo'])
  },
  methods: {
    ...mapActions({
      avatarUser: 'user/avatarUser'
    }),
    close() {
      this.imagecropperShow = false
    },
    cropSuccess(e) {
      this.image = e[0].path
      this.imagecropperShow = false
      this.imagecropperKey = this.imagecropperKey + 1
      this.avatarUser({ user_id: this.userInfo.user_id, avatar: this.image }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang='scss'>
  .avatar{
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
</style>
