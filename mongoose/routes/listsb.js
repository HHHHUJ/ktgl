
module.exports = (app,Model) => {
    app.get('/listsb',(req,res)=>{
        let dwid = req.query.dwid;
        Model.find({dwid:dwid},'-dwid',(err,data)=>{
                res.send(data)
        })
    })
}