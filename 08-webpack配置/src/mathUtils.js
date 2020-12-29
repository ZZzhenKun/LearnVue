function add(num1, num2){
  return num1 + num2
}

function mul(num1, num2){
  return num1 * num2
}
// CommonJS 模块化的写法
module.exports = {
  add,
  mul
}