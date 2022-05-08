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
  "https://generals.io/api/replaysForUsername?u=Flerovium289&offset=0&count=1"; //网址
  var preid = "";
var strHtml = [{id:0}];
var stat = [];
var myDate = new Date();
setInterval(function () {
    preid=strHtml[0]["id"]
    strHtml = "";
  https.get(wz, function (res) {
    res.on("data", function (chunk) {
      strHtml += chunk;
      strHtml = JSON.parse(strHtml);
      console.log(strHtml[0]["id"]);
    });
    res.on("end", function () {
      console.log(strHtml);
      console.log(preid);
      if(preid==strHtml[0]["id"] && preid!=0){
          console.log("meimoyu");
          console.log(stat);
      }
      else{
          console.log('moyu');
          stat.push(myDate.toLocaleTimeString())
      }

    });
  });
}, 10000);

app.listen(1145, () => console.log("start on port 1145"));
var x1;
var x2;
var x3;
var x4;

app.get("/moyu", (req, res) => {
  res.send(QwQFl曾在这些时间摸鱼：);
});
