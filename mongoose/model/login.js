module.exports = (mongoose,schema) =>{
    return loginModel = mongoose.model('login',schema,'user_info');
}