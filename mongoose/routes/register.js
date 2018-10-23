var async = require("async")
module.exports = (app,Model)=>{
    app.post('/register',(req,res)=>{
        var user = req.body.data.username;
        var pass = req.body.data.password;
        var role = req.body.data.role;
        var insertDb = function(callback){
            async.waterfall([ //瀑布流，每一步函数产生的值都会传给下一个函数
                function(callback){
                    Model.find({username:user,password:pass},(err,data)=>{
                        if(err) throw err;
                        var len = data.length;
                        if(len>0){
                            callback(null,true);//不能注册
                        }else{
                            callback(null,false)
                        }
                    })  
                },
                function(arg,callback){
                    if(arg){
                        callback(null,false)//不能注册
                    }else{
                        let instance = new Model({
                            username:user,
                            password:pass,
                            role:role
                        },false); //需加一个false
                        instance.save((err,result)=>{
                            if(err) return console.error(err);
                            callback(null,true)
                        })
                    }
                }
            ],function(err,result){
                callback(result)
            })
        }
        insertDb((result)=>{
            if(result===true){
                res.send('true')
            }else{
                res.send('false')
            }
        })
    });
}