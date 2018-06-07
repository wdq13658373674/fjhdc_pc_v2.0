import axios from 'axios'
const qs=require("querystring");

/**
 * 首页获取项目列表
 * **/
export  async function getIndex() {
  let res = await axios.get(global.API_HOST+'project/index');
  return res.data[0];
}

/**
 * 获取项目详情
 * **/
export  async function getProjectInfo(params) {
  let res = await axios.post(global.API_HOST + 'project/ProjectDetails',qs.stringify(params));
  return res.data[0];
}

/**
 * 首页文章列表
 * **/
export  async function getIndexNews() {
  let res = await axios.get(global.API_HOST+'Document/getDocumentIndex');
  return res.data[0];
}

/**
 * 文章动态列表页
 * params : 接口接收参数
 * **/
export  async function postNews(params) {
  let res = await axios.post(global.API_HOST + 'Document/getDocumentMore',qs.stringify(params));
  return res.data[0];
}

/**
 * 文章详情
 * params : 接口接收参数
 * **/
export  async function postNewsDetail(params) {
  let res = await axios.post(global.API_HOST+'Document/getDocumentInfo',qs.stringify(params));
  return res.data[0];
}

/**
 * 注册
 * params : 接口接收参数
 * **/
export async function postRegister(params){
  let res = await axios.post(global.API_HOST+'user_register/register',qs.stringify(params));
  return res.data[0];
}

/**
 * 登陆
 * params : 接口接收参数
 * **/
export async function postLogin(params){
  let res = await axios.post(global.API_HOST+'user_login/login',qs.stringify(params));
  return res.data[0];
}

/**
 * 发送验证码
 * params : 接口接收参数
 * **/
export async function postVerify(params){
  let res = await axios.post(global.API_HOST+'user_member/sendVerify',qs.stringify(params));
  return res.data[0];
}

/**
 * 获取用户信息
 * params : 接口接收参数
 * **/
export async function getUserInfo(params){
  let res = await axios.post(global.API_HOST+'user_member/index',qs.stringify(params));
  return res.data[0];
}

/**
 * 用户参与项目列表
 * @param params
 * @returns {*}
 */
export async function getMyProject(params) {
  let res = await axios.post(global.API_HOST+'project_user/index',qs.stringify(params));
  return res.data[0];
}

/**
 * 获取单条用户信息
 * @param params
 * @returns {*}
 */
export async function getOneMyProject(params) {
  let res = await axios.post(global.API_HOST+'project_user/getProjectUser',qs.stringify(params));
  return res.data[0];
}

/**
 * 个人中心-获取总销售计划
 * @param params
 * @returns {*}
 */
export async function getProjectPlan(params) {
  let res = await axios.post(global.API_HOST+'project/getProjectPlan',qs.stringify(params));
  return res.data[0];
}

/**
 * 个人中心-获取总销售计划-详细列表
 * @param params
 * @returns {*}
 */
export async function getProjectPlanList(params) {
  let res = await axios.post(global.API_HOST+'project/getProjectPlanInfo',qs.stringify(params));
  return res.data[0];
}

/**
 * 个人中心-财务总报表
 * @param params
 * @returns {*}
 */
export async function getFinance(params) {
  let res = await axios.post(global.API_HOST+'project/finance',qs.stringify(params));
  return res.data[0];
}

/**
 * 个人中心-财务总报表单条详情
 * @param params
 * @returns {*}
 */
export async function getOneFinance(params) {
  let res = await axios.post(global.API_HOST+'project/getReportInfo',qs.stringify(params));
  return res.data[0];
}
