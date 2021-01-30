let fs = require('fs');

//异步获取文件的具体信息
fs.stat('../data/a.txt',(err,info)=>{
    if (err) {
        console.log('获取文件信息失败:',err);
    } else{
        // info.isFile() 判断是不是一个文件 返回结果为true
        console.log(info.isFile());
        // false
        console.log(info.isDirectory());
    }
});