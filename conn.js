//封装连接数据库

const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://47.94.153.68:27017";
// const dbName = 'hbcx';
// var CONN_DB_STR = "mongodb://47.94.153.68:27017/ktgl";
var CONN_DB_STR = "mongodb://10.0.1.150:27017/ktgl";
module.exports = {
    getDb:function(callback){
        MongoClient.connect(CONN_DB_STR,(err,db)=>{
            if(err){
                console.log('访问失败')
                callback(err,null);
            }else{
                console.log('访问成功')
                callback(null,db);
            }
        })
    }
}