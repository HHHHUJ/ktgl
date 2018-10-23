module.exports = (app,wenduoffModel) => {
    app.get('/wenduoff',(req,res)=>{
        let dwid = req.query.dwid;
        let sbbh = req.query.sbbh;
        var conditions = { dwid, sbbh };
        console.log('進入wenduoff')
        wenduoffModel.find(conditions,'-dwid -sbbh',(err,data)=>{
            res.send(data[0])
        })
    })
}