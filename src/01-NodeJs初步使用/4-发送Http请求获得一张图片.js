
var http = require('http');
var fs = require('fs');

var server = http.createServer();

// 3.接受请求处理
server.on('request',function (request,response) {

    let url = request.url;
    console.log(url);

    if(url === '/image'){
        fs.readFile('../data/b.jpg',function (error,data) {
            if(error){
                console.log('读取文件失败');
            }else {
                console.log('已读取文件');
                response.setHeader('Content-Type','image/jpeg');
                response.end(data);
            }
        });
    }

});

// 4.绑定并监听此端口号
server.listen(3000,function () {
    console.log('服务已启动');
});