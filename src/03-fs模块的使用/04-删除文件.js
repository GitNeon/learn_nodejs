let fs = require('fs');

/*
* 删除文件操作
* */
fs.unlink('../data/delete.txt',function (error) {
    if (error) {
        console.log(error);
    } else{
        console.log('删除文件成功');
    }
});


// 同步操作删除
fs.unlinkSync('../data/delete.txt');