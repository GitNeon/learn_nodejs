/*
* Node中是模块作用域，默认文件中所有的成员只在当前模块有效
    对于希望可以被其他模块访问到的成员，我们需要把这些公开的成员都挂载到exports接口对象中就可以了
* 真正去使用的时候：
	导出单个成员：exports.xxx = xxx;
	导出多个成员：module.exports 或者 modeule.exports = {};
* */

// exports.a = 124;
// exports.add = function (x,y) {
//     return x+y;
// };

module.exports = {
    foo: 'hello',
    add: function (x,y) {
        return x+y;
    }
};

console.log(module.exports.add(5, 6));