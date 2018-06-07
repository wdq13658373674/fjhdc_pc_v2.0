/**
 * 时间戳转换日期
 * time：时间戳
 * flag：是否显示时分秒（false：不显示，true：显示）
 * type：类型 1 只显示年,2 只显示月,3只显示日,4只显示时间
 * **/
let stampToDate=(time,flag,type)=>{
  let date = new Date(time * 1000);
  let Y = date.getFullYear();
  let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
  let D = (date.getDate()+1 < 10 ? '0'+(date.getDate()+1) : date.getDate()+1);
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  if(type==1){
    return Y;
  }else if(type==2){
    return M;
  }else if(type==3){
    return D;
  }else if(type==4){
    return `${h}:${m}:${s}`;
  }

  if(flag){
    return `${Y}-${M}-${D} ${h}:${m}:${s}`;
  }else{
    return `${Y}-${M}-${D}`;
  }
}

/**
 * 格式化银行卡号星号并4个数字空格分割
 * cards：银行卡号
 * **/
let formatCards=(cards)=>{
  cards=cards.substr(0,4)+"********"+cards.substr(-4);
  return cards;
}

/**
 * 格式化电话号码星号代替
 * mobile： 电话号码
 * **/
let formatMobile=(mobile)=> {
  if (mobile.length > 7) {
    var new_mobile = mobile.substr(0, 3) + '****' + mobile.substr(7)
  }
  return new_mobile
}

/**
 * 格式化金额
 * @param number 金额
 * @param places 小数点位数
 * @param symbol 金额前面符号
 * @param thousand 金额隔离符号
 * @param decimal  小数点符号
 * @returns {string}
 */
let formatMoney=(number,places=2, symbol="", thousand=",", decimal=".")=>{
  number = number || 0;
  places = !isNaN(places = Math.abs(places)) ? places : 2;
  symbol = symbol !== undefined ? symbol : "$";
  thousand = thousand || ",";
  decimal = decimal || ".";
  var negative = number < 0 ? "-" : "",
    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
  return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
};

export {stampToDate,formatCards,formatMobile,formatMoney}
