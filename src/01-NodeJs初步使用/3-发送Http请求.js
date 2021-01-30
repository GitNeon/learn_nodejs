// 1.引入网络相关模块
var http = require('http');

// 2.创建服务器
var server = http.createServer();

// 3.接受请求处理
server.on('request',function (request,response) {
    console.log('收到来自此IP的请求：',request.remoteAddress);
    console.log('请求URL：',request.url);
    response.setHeader('Content-Type','text/plain;charset=utf-8');
    response.write('已响应请求');
    response.end();
});

// 4.绑定并监听此端口号
server.listen(3000,function () {
    console.log('服务已启动');
});