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
 * 注册
 * **/
export async function postRegister(params){
  let res = await axios.post(global.API_HOST+'project/index',qs.stringify(params));
  return res.data[0];
}
