const express = require('express');
const app = express();

// 访问静态资源
console.log(__dirname);
app.use('/data',express.static('../data/'));

app.listen(3000,function () {
    console.log('服务已启动');
});