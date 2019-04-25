<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  created() {
    console.log('userInfo', this.userInfo)
    if (this.userInfo.identity_text === '管理员') {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
