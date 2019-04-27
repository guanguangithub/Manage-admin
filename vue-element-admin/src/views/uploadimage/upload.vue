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
      image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556589619&di=3c85fc31361947e26f16e9304c2611b9&imgtype=jpg&er=1&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F37%2F73%2F46573c5e1f64f53.jpg'
    }
  },
  computed: {
    // avatarUser
    ...mapGetters(['userInfo'])
  },
  methods: {
    ...mapActions({
      avatarUser: 'user/avatarUser',
      getInfo: 'user/getInfo'
    }),
    close() {
      this.imagecropperShow = false
    },
    cropSuccess(e) {
      this.image = e[0].path
      this.imagecropperShow = false
      this.imagecropperKey = this.imagecropperKey + 1
      this.avatarUser({ user_id: this.userInfo.user_id, avatar: this.image }).then(res => {
        // console.log(res)

        this.getInfo()
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
