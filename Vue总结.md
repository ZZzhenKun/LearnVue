# Vue
### Vue模板语法
* v-for
```
<li v-for="item in movies">{{item}}</li>
movies是数组
提取出来存入item
```
* v-on（语法糖：@）
```
<button v-on:click="add">+</button>
监听DOM事件
click表示点击
add表示执行函数
```
* v-once
```
<h2 v-once>{{message}}</h2>
表示message不会再后续修改中改变值
```
* v-html
```
<h2 v-html="url"></h2>
  url: '<a href="http://www.baidu.com">百度一下</a>'
如果url是完整的http标签，可以直接解析出来
```
* v-pre
```
<h2 v-pre>{{message}}</h2>
内容会被直接解析出来，不进行替换
```
* v-bind(用来改变属性)(语法糖：:)
```
v-bind:class="getClasses(index)"
:class="getClasses(index)";
```

### Vue计算属性
* 计算属性（计算属性会进行缓存，如果多次使用时，计算属性只会调用一次）
  - 计算属性可以直接运行显示，不要调用条件，函数需要调用条件，不能自动运行
```
computed:{
		countAllPrice(){
			this.allPrice = 0;
			for (let index = 0; index < this.list.length; index++) {
				this.allPrice += this.list[index].price * this.list[index].count;
			}
			return this.allPrice
		}
	}
```
* const
  - 一旦给const修饰的标识符被赋值之后, 不能修改
  - 在使用const定义标识符,必须进行赋值
  - 常量的含义是指向的对象不能修改, 但是可以改变对象内部的属性
### ES6 语法补充
* ES6 对象字面量的增强写法
  - 属性的增强写法
  ```
    // ES5的写法
    const obj = {
      name: name,
      age: age,
      height: height

    const obj = {
      name,
      age,
      height,
    }
  ```
  - 函数增强写法
  ```
    //ES5写法
    const obj = {
      run: function () {

      },
      eat: function () {

      }
    }
    const obj = {
      run() {
      },
      eat() {
      }
    }
  ```
### Vue响应式的数组方法
* 1.push()方法: 数组最后添加元素
```
this.letters.push('aaa')
this.letters.push('aaaa', 'bbbb', 'cccc')
```
* 2.pop()方法: 删除数组中的最后一个元素
```
this.letters.pop();
```
* 3.shift(): 删除数组中的第一个元素
```
this.letters.shift();
```
* 4.unshift(): 在数组最前面添加元素
```
this.letters.unshift()
this.letters.unshift('aaa', 'bbb', 'ccc')
```
* 5.splice作用: 删除元素/插入元素/替换元素
  - 删除元素: 第二个参数传入你要删除几个元素(如果没有传,就删除后面所有的元素)
  - 替换元素: 第二个参数, 表示我们要替换几个元素, 后面是用于替换前面的元素
  - 插入元素: 第二个参数, 传入0, 并且后面跟上要插入的元素
```
splice(start)
splice(start):
this.letters.splice(1, 3, 'm', 'n', 'l', 'x')
this.letters.splice(1, 0, 'x', 'y', 'z')
```
* 6.sort(): 排序
* 7.reverse(): 反转
* 8.通过索引值修改数组中的元素
```
this.letters[0] = 'bbbbbb';
this.letters.splice(0, 1, 'bbbbbb')
// set(要修改的对象, 索引值, 修改后的值)
Vue.set(this.letters, 0, 'bbbbbb')
```