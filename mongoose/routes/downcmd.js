module.exports = (app,downcmdModel)=>{
    app.get('/downcmd',(req,res)=>{
        var dwid = req.query.dwid;
        var sbbh = req.query.sbbh;
        var getCmd = req.query.getCmd;
        var conditions = {dwid,sbbh};
        var update = {$set:{downstate:1}}
        var query = '-_id sbbh cmd'
        if(getCmd) {
            downcmdModel.find(conditions,'-_id cmd',(err,data)=>{
                if(err) return console.error(err);
                res.send(data)
            })
        }else {
            downcmdModel.collection.updateMany(conditions,update,(err,data)=>{
                if(err) return console.error(err);
                downcmdModel.find(conditions,query,(err,data)=>{
                    if(err) return console.error(err);
                    res.send(data)
                })
            })
        }
    })
}