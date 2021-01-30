// 1.引入依赖
const express = require('express');

// 2.创建实例
const app = express();

// 3.监听get请求
app.get('/',(req,res)=>{
    res.send('第一个入门实例');
});

app.get('/getData',(req,res)=>{
    let obj = {
        name: '小明',
        age: '20'
    };
    res.send(obj);
});

// 4.监听端口
app.listen(3000);
console.log('启动完成');


