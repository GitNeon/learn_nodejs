const express = require('express');

const app = express();

app.use('/getData',(req,res,next) => {
    req.student = { name:'xiaoming',age:20 };
    next();
});

app.get('/getData',(req,res) => {
    console.log(req.student);
   res.send(req.student);
});

app.listen(3000,function () {
    console.log('服务已启动');
});