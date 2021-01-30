const url = require('url');

// 查看Url对象的方法
console.log(url);

/*
* url.parse方法：
* urlStr：要解析成对象的url字符串
* parseQueryString：是否解析查询参数，默认为false
* slashesDenoteHost：是否以斜线解析主机名，默认为false
* */
let urlWithStringQuery = url.parse('http://localhost:8080/test?name=xiaoming&age=20',true);
console.log(urlWithStringQuery);

