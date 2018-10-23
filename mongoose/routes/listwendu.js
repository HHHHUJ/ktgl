module.exports = (app,listwenduModel,downcmdModel) => {
    app.get('/listwd',(req,res)=>{
        var sbbh = req.query.sbbh;
        var dwid = req.query.dwid;
        var cmd = req.query.cmd;
        var pg1  = req.query.pg1;
        var yhj1   = req.query.yhj1;
        var yhc1   = req.query.yhc1;
        var syj1   = req.query.syj1;
        var syc1   = req.query.syc1;
        var ysjxq1   = req.query.ysjxq1;
        var ysjpq1   = req.query.ysjpq1;
        var pg2   = req.query.pg2;
        var yhj2   = req.query.yhj2;
        var yhc2   = req.query.yhc2;
        var syj2   = req.query.syj2;
        var syc2   = req.query.syc2;
        var ysjxq2   = req.query.ysjxq2;
        var ysjpq2   = req.query.ysjpq2;
        var hj   = req.query.hj;
        var ylwd1   = req.query.ylwd1;
        var ylwd2   = req.query.ylwd2;
        var ylwd3   = req.query.ylwd3;
        var ylwd4   = req.query.ylwd4;

        var acquire = req.query.acquire;
        var conditions = {dwid,sbbh};
        var update1 = {$set:{cmd:cmd}};
        var update2 = {$set:{kgzt:cmd}};
        var update3 = {$set:{
            pg1 , 
            yhj1 , 
            yhc1 , 
            syj1 , 
            syc1 , 
            ysjxq1 , 
            ysjpq1 , 
            pg2 , 
            yhj2 , 
            yhc2 , 
            syj2 , 
            syc2 , 
            ysjxq2 , 
            ysjpq2 , 
            hj , 
            ylwd1 , 
            ylwd2 , 
            ylwd3 , 
            ylwd4 
        }}
        if(cmd){
            downcmdModel.collection.update(conditions, update1, (err,data)=>{ 
                if(err) return console.error(err);
            })  
            listwenduModel.collection.update(conditions,update2,(err,data)=>{
                if(err) return console.error(err);
            })
        }else if(acquire){
            listwenduModel.find({sbbh:sbbh,dwid:dwid},(err,data)=>{
                if(err) throw err;
                res.status(200).send(data[0])
            }) 
        }else {
            listwenduModel.collection.update(conditions,update3,(err,data)=>{
                if(err) return console.error(err);
            })
        }    
    })
}

