module.exports = (mongoose,schema)=>{
    return registerModel = mongoose.model('register',schema,'user_info');
}