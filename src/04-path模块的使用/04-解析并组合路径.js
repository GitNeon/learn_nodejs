let path = require('path');

//从后往前组合,组合成第一个绝对路径就停止
//若直到要第一个参数都组合不出来绝对路径,那么就会连接上当前脚本所在结对路径,组合成一个完整的绝对路径
let url = path.resolve('c:/www','b:/res','index.php');
let url_ = path.resolve('../data/','a.txt');
// b:\res\index.php
console.log(url);
// F:\vue_project\learn_nodeJs\src\data\a.txt
console.log(url_);