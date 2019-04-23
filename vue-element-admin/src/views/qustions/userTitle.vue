
  <!-- <div>
    <pan-thumb :image="image" />
    <el-button type="primary" icon="upload" style="position: absolute;bottom: 15px;margin-left: 40px;" @click="imagecropperShow=true">
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

// import ImageCropper from '@/components/ImageCropper'
// import PanThumb from '@/components/PanThumb'
// import { mapActions, mapGetters } from 'vuex'
// export default {
//   name: 'AvatarUploadDemo',
//   components: { ImageCropper, PanThumb },
//   data() {
//     return {
//       imagecropperShow: false,
//       imagecropperKey: 0,
//       image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
//     }
//   },
//   computed: {
//     ...mapGetters(['userInfo'])
//   },
//   methods: {
//     ...mapActions({
//       userupdata: 'examType/updatedata',
//       getInfo: 'user/getInfo'
//     }),
//     cropSuccess(resData) {
//       console.log(resData)
//       this.imagecropperShow = false
//       this.imagecropperKey = this.imagecropperKey + 1
//       this.image = resData[0].path
//       this.userupdata({
//         user_id: this.userInfo.user_id,
//         avatar: this.image
//       }).then((res) => {
//         console.log(res) // 更改头像成功后
//         this.getInfo() // 让用户信息也更新  这样用户头像也会变了
//       })
//     },
//     close() {
//       this.imagecropperShow = false
//     }
//   }
// }
// </script>
