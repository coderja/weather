const http = require("http");
const express = require("express");
const mysql = require("mysql");
const fs = require("fs");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const proxy = require('http-proxy-middleware');
const logger = require('morgan');
const router = require('./route/index')

var app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+"/public"));
app.use(cookieParser());
/*app.use(cors({
    origin:["http://127.0.0.1"],  //允许来自某些域名跨域访问
    credentials:true              //访问时请带cookie
}));*/
app.use('/file', proxy({//前端访问file路径的时候
    target: "http://localhost:8080/order/list",//会被转到该服务器地址
    changeOrigin: true,
    pathRewrite: {'/file':'/'}//需要重写路径否则路径会被拼成http://localhost:8080/order/list/file
}));
var pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"china",
    port:3306,
    connectionLimit:25
});
var server = http.createServer(app);
server.listen(8082);

app.use(router)
console.log(server.address().port)


