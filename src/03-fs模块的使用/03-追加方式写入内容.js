let fs = require('fs');

/*
* 追加文件内容
* */
fs.appendFile('../data/a.txt', '\n使用fs.appendFile追加文件内容', function (error) {
    if(error){
        console.log('追加文件内容出错');
    }else {
        console.log('追加内容完成');
    }

});

// 同步方式
// fs.appendFileSync('../data/a.txt','追加的内容');