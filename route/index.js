const express = require("express");
const Router = express.Router()
const axios=require("axios");

Router.get('/provice',(req,res)=>{
let url = "http://www.weather.com.cn/data/city3jdata/china.html";
    axios.get(url).then((data)=>{
    res.send(data.data)
    })
})
Router.get('/city',(req,res)=>{
    var d = req.query.cid
        console.log(d)
    let url = "http://www.weather.com.cn/data/city3jdata/provshi/"+d+".html";
    axios.get(url).then((data)=>{
        res.send(data.data)
    })
})

Router.get('/xian',(req,res)=>{
    var d = req.query.cname
        console.log(d,"嫌")
    let url = "http://www.weather.com.cn/data/city3jdata/station/"+d+".html";
    axios.get(url).then((data)=>{
        res.send(data.data)
    })
}) 

Router.get('/x',(req,res)=>{
    var d = req.query.cname
        console.log(d,"嫌")
    let url = "http://www.weather.com.cn/data/city3jdata/station/"+d+".html";
    axios.get(url).then((data)=>{
        res.send(data.data)
    })
}) 

module.exports = Router