var async = require("async")
module.exports = (app,loginModel,dwidModel) => {
    app.post("/login",(req,res)=>{
        var user = req.body.data.username;
        var pass =  req.body.data.password;
        var role =  req.body.data.role;
        async.waterfall([ //瀑布流，每一步函数产生的值都会传给下一个函数
            function(callback){
                loginModel.find({username:user,password:pass,role:role},'-_id role',(err,data)=>{
                    if(err) throw err;
                    console.log()
                    callback(null,data)
                })  
            },
            function(result,callback){
                // var roleType = result[0]._doc.role;
                var { role }  = result[0]._doc;
                callback(null,role)
            }
        ],function(err,roleType){
            if(err) throw err;
            if(roleType !== '') {
                dwidModel.find((err,result)=>{
                    if(err) return console.error(err);
                    console.log([roleType,result])
                    res.send([roleType,result])
                })
                
            }
        }) 
    });
}