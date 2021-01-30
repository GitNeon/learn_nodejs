const url = require('url');

let urlObj =  {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'localhost:8080',
    port: '8080',
    hostname: 'localhost',
    hash: null,
    search: '?name=xiaoming&age=20',
    // 如果方法的第二个参数为true,这里会解析成object
    // query: [Object: null prototype] { name: 'xiaoming', age: '20' },
    query: 'name=xiaoming&age=20',
    pathname: '/test',
    path: '/test?name=xiaoming&age=20',
    href: 'http://localhost:8080/test?name=xiaoming&age=20'
};

let parseUrl = url.format(urlObj);
console.log(parseUrl);
