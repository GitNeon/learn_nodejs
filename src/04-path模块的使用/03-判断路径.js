const path = require('path');

let url = path.isAbsolute('c:/www/baidu/public/index');//绝对路径(true)
let url_ = path.isAbsolute('www/baidu/public/index');//相对路径(false)

// true ,false
console.log(url,url_);