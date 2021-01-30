const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// 利用中间件拦截请求
app.use(bodyParser.urlencoded({extended:false}));

app.post('/addStudent',(req,res) => {
    console.log(req.body);
    const s = JSON.stringify(req.body);
    res.send('添加成功:'+s);
});

app.listen(3000,function () {
    console.log('服务已启动');
});