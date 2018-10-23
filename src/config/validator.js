import {Toast} from 'mint-ui'
const regularJson = {
    phone: {
        reg: /^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/,
        errormsg: '手机号填写错误',
        errormsgNull: '手机号不能为空'
    },
    code: {
        reg: /\w{6,12}/,
        errormsg: '验证码输入错误',
        errormsgNull: '验证码不能为空'
    },
    required: {
        errormsg: '输入项不不能为空'
    }
};
export default {
    methods: {
        handleOnBlur(type, value, errorMsg = null) {
            if (!value) {
                if (type !== 'required') {
                    Toast({message:errorMsg || regularJson[type].errormsgNull,position:'bottom'});
                } else {
                    Toast({message:errorMsg || regularJson[type].errormsg, position:'bottom'});
                }
                return false;
            } else if (type !== 'required') {
                if (!regularJson[type].reg.test(value)) {
                    Toast({message:errorMsg || regularJson[type].errormsg, position:'bottom'});
                    return false;
                }
            }
            return true;
        }
    }
};

