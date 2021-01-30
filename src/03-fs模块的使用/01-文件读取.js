const fs = require('fs');

/*
* 异步读取文件
*
* */
fs.readFile('../data/a.txt',function (error,data) {
    if(error){
        console.log(error);
    }else {
        // 会打印Buffer内容
        // console.log(data);
        console.log(data.toString());
    }
});

/*
* 同步读取文件
* */
let date = fs.readFileSync('../data/a.txt');
console.log(date.toString());
console.log('读取文件后才会输出的内容');