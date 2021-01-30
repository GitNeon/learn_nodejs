let fs = require('fs');

/*
* 创建文件夹
* */
fs.mkdir('../data/test1',function (error) {
    if(error){
        console.log('创建文件夹失败');
    }else {
        console.log('创建文件夹成功');
    }
});

/*
* 同步方法
* */
fs.mkdirSync('../data/test2');