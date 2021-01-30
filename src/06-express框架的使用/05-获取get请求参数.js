const express = require('express');

const app = express();

app.get('/getStudentById',(req,res) => {
    console.log(req.query);
    if(req?.query?.id){
        if(req.query.id === '20'){
            res.send({name:'小明',age:18,id:20})
        }else {
            res.send('未找到对应学生');
        }
    }else {
        res.send("<h3>缺乏必要参数！</h3>");
    }
});

app.listen(3000,function () {
    console.log('服务已启动');
});