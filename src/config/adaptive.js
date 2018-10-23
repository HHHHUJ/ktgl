import adaptive from 'adaptive.js/js/adaptive.js'
const ada = ()=>{
    adaptive.desinWidth = 1080;
    // body 字体大小 会将body字体大小设置为 baseFont / 100 + 'rem'  750的设计图一般设置为28,640的设计图一般设置为24
    adaptive.baseFont = 40;
    adaptive.init();
}

export default ada;