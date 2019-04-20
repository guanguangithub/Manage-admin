// import store from '@/store'

// const { body } = document
// const WIDTH = 992 // refer to Bootstrap's responsive design

// export default {
//   watch: {
//     $route(route) {
//       if (this.device === 'mobile' && this.sidebar.opened) {
//         store.dispatch('app/closeSideBar', { withoutAnimation: false })
//       }
//     }
//   },
//   beforeMount() {
//     window.addEventListener('resize', this.resizeHandler)
//   },
//   beforeDestroy() {
//     window.removeEventListener('resize', this.resizeHandler)
//   },
//   mounted() {
//     const isMobile = this.isMobile()
//     if (isMobile) {
//       store.dispatch('app/toggleDevice', 'mobile')
//       store.dispatch('app/closeSideBar', { withoutAnimation: true })
//     }
//   },
//   methods: {
//     // use $_ for mixins properties
//     // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
//     $_isMobile() {
//       const rect = body.getBoundingClientRect()
//       return rect.width - 1 < WIDTH
//     },
//     $_resizeHandler() {
//       if (!document.hidden) {
//         const isMobile = this.$_isMobile()
//         store.dispatch('app/toggleDevice', isMobile ? 'mobile' : 'desktop')

//         if (isMobile) {
//           store.dispatch('app/closeSideBar', { withoutAnimation: true })
//         }
//       }
//     }
//   }
// }
