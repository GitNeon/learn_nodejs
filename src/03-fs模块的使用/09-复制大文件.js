let fs = require('fs');
//创建读取流

let readStream = fs.createReadStream('../data/bigFiles/1.zip');
//创建写入流
let writeStream = fs.createWriteStream('../data/bigFiles/2.zip');
//进行大文件的复制
readStream.pipe(writeStream);
