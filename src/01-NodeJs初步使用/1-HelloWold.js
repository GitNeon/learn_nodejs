/*
* Node.js是JavaScript 运行时环境
* Node.js既不是语言，也不是框架，它是一个平台
* 没有Bom，Dom
*
* */
var str = 'Hello World';
var add = function (x,y) {
    return x + y;
};
console.log(add(3,5)); //8
console.log(str); //Hello World

// 试图加载bom,dom
try{
    console.log(document);
    console.log(window);
}catch (e) {
    console.log('没有bom或者dom');
    console.log(e); // ReferenceError: document is not defined
}