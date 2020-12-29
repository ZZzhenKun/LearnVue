const path = require('path')

module.exports={
  entry: './src/main.js',
  output:{
    // 动态获取路径
    //__dirname获取当前文件所在路径, resolve拼接两个路径
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js'
  },
}