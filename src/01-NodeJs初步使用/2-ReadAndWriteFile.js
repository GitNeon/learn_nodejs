// 浏览器中的JavaScript是没有文件操作能力的
// 但是Node中的JavaScript具有文件操作能力
// fs是file-system的简写，就是文件系统的意思
// 在Node中如果想要进行文件的操作就必须引用fs这个核心模块
// 在fs这个和兴模块中，就提供了人所有文件操作相关的API
// 例如 fs.readFile就是用来读取文件的

// 1.引入fs模块
var fs = require('fs');

// 读文件
fs.readFile('../data/a.txt',function (err,data) {
    if(err){
        console.log('读取文件失败');
        console.log(err.message);
    }else {
        console.log(data.toString());
    }
});


// 写文件
let content = '写入了一段内容';
fs.writeFile('../data/a.txt',content,function (data) {
    if(data){
        console.log('写入文件失败');
        console.log(data.message);
    }
});