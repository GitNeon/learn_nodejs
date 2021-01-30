const express = require('express');

const app = express();

// 默认路径是 "/"
app.use((req,res,next) => {
    console.log('请求经过了中间件');
    next();
});

app.use('/request',(req,res,next) => {
    console.log('请求经过了request中间件');
    next();
});

app.use('/other',(req,res,next) => {
    console.log('请求经过了other中间件');
    next();
});

app.get('/',(req,res,next) => {
    console.log('访问了路径/');
    res.send('访问了路径/');
});

app.get('/test',(req,res,next) => {
    console.log('访问了路径/test');
    res.send('访问了路径/test');
});

app.get('/request',(req,res,next) => {
    console.log('访问了路径/request');
    res.send('访问了路径/request');
});




app.listen(3001);
console.log('服务启动完成...');