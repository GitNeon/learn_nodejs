// NodeJs的模块化,nodeJs引入其他模块,两个模块不影响，各自执行各自的内容
var msg = '我被执行了';
var foo = 'foooo';
let add = function (x,y) {
    return x+y;
};

console.log(msg);
console.log(foo);
console.log('加法结果',add(5,5));