const fs = require('fs');

/*
* 异步文件写入
* */
let content = '这是写入的文件内容';
fs.writeFile('../data/b.txt',content,function (error) {
    if(error){
        console.log('文件写入失败');
    }
});

//同步版本的写入
//fs.writeFileSync('./2.text','我是同步写入的文件')