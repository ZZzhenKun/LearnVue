// 1.CommonJS 模块化的写法
const {add, mul} = require('./js/mathUtils.js')

console.log(add(20,30))
console.log(mul(20,30))

// 2.ES6模块化的写法
import {name, age, height} from "./js/info" //info.js中的js可以省略

console.log(name)
console.log(age)
console.log(height)

// 3.依赖css文件
require('./css/normal.css')

// 4.依赖less文件
require('./css/special.less')
document.write("<h1>这是一个标题一</h1>")
