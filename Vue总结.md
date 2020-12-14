# Vue
* v-for
```
<li v-for="item in movies">{{item}}</li>
movies是数组
提取出来存入item
```
* v-on
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