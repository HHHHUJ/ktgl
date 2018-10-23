
var app = require('express')();
var server = require('http').createServer(app);
var conn = require('./conn')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var async = require("async")
// var host = "172.17.113.101"; //内网
var host = "localhost" //本地
var port = "7100"
var ObjectId = require('mongodb').ObjectID; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//解决跨域问题
app.all('*',function(req,res,next){
    // res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    next()
});


app.get('/hb',(req,res)=>{
    conn.getDb((err,db)=>{
        if(err) throw err;
        var coll = db.collection("hb");
        coll.find({_id:ObjectId("5ac9cdc3936aa219e48d81e4")}).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    })
})

app.get('/addtask',(req,res)=>{
    dcity = req.query.dcity;
    acity = req.query.acity;
    ddate = req.query.ddate;
    conn.getDb((err,db)=>{
        if(err) throw err;
        var coll = db.collection("hb");
        coll.find({dcity:dcity,acity:acity,dt_from:{$regex:ddate}}).toArray((err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    })
})

//数据更新
app.get('/update',(req,res)=>{

})
//设备列表
app.get('/listsb',(req,res)=>{
    var dwid = req.query.dwid*1;
    console.log(dwid)
    if(dwid === 1) {
        conn.getDb((err,db)=>{
            if(err) throw err;
            var coll = db.collection("listsb");
            coll.find({dwid:dwid},{_id:0}).toArray((err,result)=>{
                if(err) throw err;
                console.log(result)
                var rt = result[0].data;
                if(rt.length>0) {
                    res.send(rt)
                } else {
                    res.send(null)
                }
            }) 
           
        })
       
    } else {
        res.send("err:点位编号不能为空")
    }
})
//命令下载
app.get('/downcmd',(req,res)=>{
   
})

//温度列表
app.get('/listwd',(req,res)=>{
    var sbbh = req.query['0'];
    conn.getDb((err,db)=>{
        if(err) throw err;
        var coll = db.collection("listwendu");
        coll.find({dwid:global.dwid},{data:1,_id:0}).toArray((err,result)=>{
            if(err) throw err;
           for (item of result[0].data){
                if(item.sbbh == sbbh){
                    res.send(item)
                }
            }
        })
    })
})

//注册
app.post('/register',(req,res)=>{
    var user = req.body.data.username;
    var pass = req.body.data.password;
    var insertDb = function(db,callback){
        var info = db.collection("info");
        async.waterfall([ //瀑布流，每一步函数产生的值都会传给下一个函数
            function(callback){
                info.find({username:user},{_id:0}).toArray((err,result)=>{
                    if(err) throw err;
                    console.log("###############")
                    var len = result.length;
                    if(len>0){
                        callback(null,true);//不能注册
                    }else{
                        callback(null,false)
                    }
                })
            },
            function(arg,callback){
                if(arg){
                    callback(null,0)//不能注册
                }else{
                    info.insert({username:user,password:pass},(err,result)=>{
                        if(err) throw err;
                        callback(null,1)
                    })
                }
            }
        ],function(err,result){
            callback(result)
        })
    }
    conn.getDb((err,db)=>{
        if(err) throw err;
        insertDb(db,(result)=>{
            if(result=='1'){
                res.send('1')//可以注册
            }else{
                res.send('0')
            }
        })
    })
});

//登录
app.post("/login",(req,res)=>{
    var user = req.body.data.username;
    var pass=  req.body.data.password;
    console.log("###################")
    var findData = function(db,callback){
        var collection = db.collection("info");
        collection.find({username:user,password:pass}).toArray((err,result)=>{
          if(err) throw err;
          global.dwid = 1;
          console.log(result)
          callback(result);
        })
      }
    conn.getDb((err,db)=>{
        if(err) throw err;
        findData(db,function(result){
            if(result.length>0){
                res.send("1") //用户名存在，登录成功
            }else{
                res.send("0")
            }
        })   
    }) 
});

//id自增长
function getNextSequenceValue(db,sequenceName){
    var sequenceDocument = db.info.findAndModify(
       {
          query:{_id: sequenceName },
          update: {$inc:{sequence_value:1}},
          "new":true
       });
    return sequenceDocument.sequence_value;
}


server.listen(port,host,()=>{
    console.log(`the server is running at ${host}:${port}`)
})