const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const cheerio = require('cheerio');
const superagent = require('superagent');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const wz =
  "https://generals.io/api/replaysForUsername?u=Flerovium289&offset=0&count=20"; //网址
var strHtml = [{id:0}];
var stat = [];
var x1;
var x2;
var output;
function formatDateTime(inputTime) {  
    var date = new Date(inputTime);
    var y = date.getFullYear();  
    var m = date.getMonth() + 1;  
    m = m < 10 ? ('0' + m) : m;  
    var d = date.getDate();  
    d = d < 10 ? ('0' + d) : d;  
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;  
    second = second < 10 ? ('0' + second) : second; 
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;  
}
strHtml = "";
superagent.get(wz).end((err, res) => {
  if (err) {
    // 如果访问失败或者出错，会这行这里
    console.log(`${err}`)
  } else {
   // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res
   // 抓取热点新闻数据
   x1=res["_body"][0]["started"];
   x2=res["_body"][1]["started"];
  }
})
setInterval(function () {
  output="";
  stat = [];
  strHtml = "";
superagent.get(wz).end((err, res) => {
  if (err) {
    // 如果访问失败或者出错，会这行这里
    console.log(`${err}`)
  } else {
   // 访问成功，请求http://news.baidu.com/页面所返回的数据会包含在res
   // 抓取热点新闻数据
for(var n =0;n<20;n++){
  stat.push(formatDateTime(res["_body"][n]["started"]));
  output +=(formatDateTime(res["_body"][n]["started"]) +"\n");
}

  }
});
}, 10000);

app.listen(1145, () => console.log("start on port 1145"));


app.get("/moyu", (req, res) => {
  res.send("QwQFl曾在这些时间摸鱼："+output);
});
