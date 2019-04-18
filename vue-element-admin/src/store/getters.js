const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes,
  errorLogs: state => state.errorLog.logs,
  examlist: state => state.examType.examlist,
  subjectlist: state => state.examType.subjectlist, // 这些都是命名空间中state中的属性
  getquestionslist: state => state.examType.getquestionslist, // 这些都是命名空间中state中的属性
  userarr: state => state.usermanage.userarr,
  code: state => state.state.examType.code
}
export default getters
