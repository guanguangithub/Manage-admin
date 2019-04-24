<template>
  <div class="paperDetail-bg">
    <h5>试卷详情</h5>
    <div class="wrap">
      <div class="detail-container">
        <!-- <div v-for="(item,i) in this.detailPaper.questions" :key="item.questions_id" class="markdown">
          <h5>{{ i+1 }} : {{ item.title }}</h5>
          <pre>
              <code>
              {{ item.questions_stem }}
              </code>
          </pre>
        </div> -->
        <div v-if="flag">
          <div v-for="(item,i) in this.detailPaper.questions" :key="item.questions_id" class="markdown">
            <h5>{{ i+1 }} : {{ item.title }}</h5>
            <markdown-editor ref="markdownEditor" v-model="markdowns[i].content" :options="{hideModeSwitch:true,previewStyle:'',toolbarItems:[]}" height="200px" />
          </div>
        </div>

      </div>
      <!-- <div class="detail-container1" /> -->
    </div>
  </div>
</template>
<script>
import MarkdownEditor from '@/components/MarkdownEditor'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: { MarkdownEditor },
  data() {
    return {
      flag: false,
      markdowns: [
      ]
    }
  },
  computed: {
    ...mapGetters([
      'detailPaper'
    ])
  },
  async created() {
    await this.getDetailPaper(this.$route.params.id)
    this.detailPaper.questions.forEach(item => {
      this.markdowns.push({ content: item.questions_stem })
      this.flag = true
    })
    console.log(this.markdowns)
  },
  beforeRouteUpdate(to, from, next) {
    this.getDetailPaper(this.$route.params.id)
  },
  methods: {
    ...mapActions({
      getDetailPaper: 'exam/getDetailPaper'
    })
  }
}
</script>
<style lang="scss" scoped>
.paperDetail-bg{
    height:698px;
    background: #eee;
    padding:0 35px;
    overflow-y: auto;
    >h5{padding:0;
        margin:0;
        width: 100%;
        height: 100px;
        line-height: 100px;
        font-weight: normal;
        font-size: 24px;
        color:#242425;
    }
}
.detail-container{
    width: 80%;
    flex-shrink: 0;
    min-height: 400px;
    background:#fff;
    margin:20px;
    box-sizing: border-box;
    border-radius: 10px;
    padding:20px;
}
.detail-container1{
    flex:1;
    min-height: 400px;
    margin:20px 0;
    background:#fff;
    border-radius: 10px;
    box-sizing: border-box;
    padding:20px;

}
.mark /deep/ .te-toolbar-section{
  display:none;
}
.markdown{
    width: 100%;
    height:auto;
    background:#fff;
    flex-shrink: 0;
    padding:20px;
    border:1px solid #eee;
    border-radius: 10px;
    margin:15px 0;
    >h5{
        font-size: 18px;color:#555;
        margin:10px 0;
    }
}
.wrap{
    width: 100%;
    height:auto;
    display:flex;
    justify-content: center;
}

</style>
