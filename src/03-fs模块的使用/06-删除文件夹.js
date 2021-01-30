let fs = require('fs');

// 异步删除文件夹
fs.rmdir('../data/test1',function (error) {
    if(error){
        console.log('删除文件夹失败');
    }else {
        console.log('删除文件夹成功');
    }

});

// 同步方法
fs.rmdirSync('../data/test2');