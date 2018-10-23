//导入schema
const schema = require('../schema')

//导入子模型
const listsbModel = require('./listsb')
const registerModel = require('./register')
const loginModel = require('./login')
const listwenduModel = require('./listwendu')
const dwidModel = require('./dwid')
const downcmdModel = require('./downcmd')
const wenduoffModel = require('./wenduoff')
module.exports = (mongoose) =>{
    var models = {
        listsbModel:listsbModel(mongoose,schema.Listsb),
        registerModel:registerModel(mongoose,schema.Register),
        loginModel:loginModel(mongoose,schema.Login),
        listwenduModel:listwenduModel(mongoose,schema.Listwendu),
        dwidModel:dwidModel(mongoose,schema.Dwid),
        downcmdModel:downcmdModel(mongoose,schema.Downcmd),
        wenduoffModel:wenduoffModel(mongoose,schema.Wenduoff)
    }
    return models;
}