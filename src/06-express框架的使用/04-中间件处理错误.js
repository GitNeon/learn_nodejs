const express = require('express');
// const fs = require('fs');

const app = express();



app.get('/readFile',(req,res,next) => {
    try {
        fs.readFile('../data/xx.txt', ((err, data) => {
            if (err) {
                next(err);
            } else {
                res.send(data.toString(),);
            }
        }));
    } catch (e) {
        next(e);
    }
});

app.use(function (error,req,res,next) {
    console.log(error);
    res.status(500).send(error.message);
});

app.listen(3000,function () {
    console.log('服务已启动');
});