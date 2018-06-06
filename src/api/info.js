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
