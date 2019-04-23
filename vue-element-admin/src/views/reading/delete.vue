<template>
  <div class="delete_box">
    个人详情
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
    }
  },
  created() {
    console.log(this.$route.query)
    console.log(this.$route.query.ids)
    this.studentDeleta().then(res => {
      console.log(res)
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
    height:100%;
  }
</style>

