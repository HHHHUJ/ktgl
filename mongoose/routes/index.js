var mongoose = require('mongoose');
var CONN_DB_STR = "mongodb://47.106.137.254:27017/ktgl";
mongoose.connect(CONN_DB_STR);
//导入子路由
const listsb = require('./listsb.js')
const register = require('./register.js')
const login = require('./login.js')
const listwendu = require('./listwendu')
const downcmd = require('./downcmd')
const wenduoff = require('./wenduoff')
//导入模型
var models = require('../model')(mongoose);
module.exports = (app) => {
    listsb(app,models.listsbModel);
    register(app,models.registerModel);
    login(app,models.loginModel,models.dwidModel);
    listwendu(app,models.listwenduModel,models.downcmdModel);
    downcmd(app,models.downcmdModel);
    wenduoff(app,models.wenduoffModel);
}