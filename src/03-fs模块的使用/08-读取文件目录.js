let fs = require('fs');

// 异步读取文件夹里面的所有文件
fs.readdir('./',(err,files)=>{
    if (err) {
        console.log(err);
    } else{
        // console.log(files); 返回的文件是个数组,可以用forEach循环输出文件名
        files.forEach((x)=>{
            console.log('有'+ x +'这个文件');
        })
    }
});

// 同步方法
let files = fs.readdirSync('./');
console.log(files);