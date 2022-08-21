import _ from "./axios"

// //登录
// Mock.mock('/login', 'post', adminApi.login)
const postLogin = (params) => _.postAxios("login", params)
// //首页
// Mock.mock('/home/getData', homeApi.getHomeData)
// //通知页
// Mock.mock('/notice/getData', noticeApi.getNoticeData)
// Mock.mock('/notice/getUnReadData', noticeApi.getUnReadData)
// Mock.mock('/notice/getReadData', noticeApi.getReadData)
// Mock.mock('/notice/remove', noticeApi.removeNotice)
// Mock.mock('/notice/del', noticeApi.delNotice)
// //管理员管理
// Mock.mock('/admin/getData', 'get', adminApi.getAdminList)
// Mock.mock('/admin/add', 'post', adminApi.addAdmin)
// Mock.mock('/admin/del', 'post', adminApi.deleteAdmin)
// Mock.mock('/admin/search', 'post', adminApi.searchAdmin)
// Mock.mock('/admin/edit', 'post', adminApi.editAdmin)
// //员工管理
// Mock.mock('/employees/getData', 'get', employeesApi.getEmployeesList)
// Mock.mock('/employees/add', 'post', employeesApi.addEmployees)
// Mock.mock('/employees/del', 'post', employeesApi.deleteEmployees)
// Mock.mock('/employees/search', 'post', employeesApi.searchEmployees)
// Mock.mock('/employees/edit', 'post', employeesApi.editEmployees)
export default {
    // 登录
    postLogin
}