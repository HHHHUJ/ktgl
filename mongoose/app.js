
var app = require('express')();
var server = require('http').createServer(app);
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var async = require("async")
const routes = require('./routes');
// const sockets = require('./sockets')
// var host = "172.17.113.101"; //内网
var host = "172.18.121.17" //本地
var port = "7100"
// var ObjectId = require('mongodb').ObjectID; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.all('*', function (req, res, next) {
    // res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    next()
});

routes(app);

server.listen(port,host,()=>{
    console.log(`the server is running at ${host}:${port}`)
})