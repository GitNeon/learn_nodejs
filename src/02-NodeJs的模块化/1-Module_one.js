// NodeJs的模块化,nodeJs引入其他模块,两个模块不影响，各自执行各自的内容
var foo = 'foo';
// 引入此模块并直接执行里面的代码
require('./2-Module_two.js');
console.log(foo);