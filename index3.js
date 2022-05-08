const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
var fs = require("fs");
var http = require("http");
var https = require("https");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const wz =
  "https://generals.io/api/replaysForUsername?u=Flerovium289&offset=0&count=2"; //网址
var strHtml = [{id:0}];
var stat = [];
var x1;
var x2;
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
setInterval(function () {
  strHtml = "";
  https.get(wz, function (res) {
    res.on("data", function (chunk) {
      strHtml += chunk;
      strHtml = JSON.parse(strHtml);
      x1=strHtml[0]["started"]
      x2=strHtml[1]["started"]
      console.log(strHtml);
    });
    res.on("end", function () {

    });
  });
}, 1000);

app.listen(1145, () => console.log("start on port 1145"));


app.get("/moyu", (req, res) => {
  res.send("QwQFl曾在这些时间摸鱼："+formatDateTime(x1)+" "+formatDateTime(x2));
});
