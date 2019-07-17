module.exports = {
    foo(param) {
        // this 就是app 对象，在其中可以调用 app 上的其他方法，或访问属性

        // console.log(this);

        return this.config.api;


    }
}