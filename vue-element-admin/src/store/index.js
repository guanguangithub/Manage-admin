import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
// import createPersistedState from 'vuex-persistedstate'
// import createLogger from "vuex/dist/logger" //打印日志
Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', false, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  // console.log(moduleName) //所有的命名空间 app errorLog examType
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules,
  getters
  // plugins: [createLogger()]//数据持久化
})

export default store
