/*
    扩展里面引入第三方模块

    1. npm i silly-datetime --save

    2. var sd = require('silly-datetime');



*/

var sd = require('silly-datetime');

module.exports = {

    formatTime(param) {

        // this 是helper 对象，在其中可以调用其他 helper 方法
        // this.ctx => context 对象
        // this.app => application 对象

        // 格式化日期

        // var d = new Date(param);

        // d.getFullYear();

        return sd.format(new Date(param*1000), 'YYYY-MM-DD HH:mm');

    },

    getHelperData() {
        return '我是helper里面的数据'
    }

}