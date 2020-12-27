# Vue
### Vue模板语法
* v-for
```JavaScript
<li v-for="item in movies">{{item}}</li>
movies是数组
提取出来存入item
```
* v-on（语法糖：@）
```JavaScript
<button v-on:click="add">+</button>
监听DOM事件
click表示点击
add表示执行函数
```
* v-once
```JavaScript
<h2 v-once>{{message}}</h2>
表示message不会再后续修改中改变值
```
* v-html
```JavaScript
<h2 v-html="url"></h2>
  url: '<a href="http://www.baidu.com">百度一下</a>'
如果url是完整的http标签，可以直接解析出来
```
* v-pre
```JavaScript
<h2 v-pre>{{message}}</h2>
内容会被直接解析出来，不进行替换
```
* v-bind(用来改变属性)(语法糖：:)
```JavaScript
v-bind:class="getClasses(index)"
:class="getClasses(index)";
```
* **v-modle(双向绑定)**
  - 1. v-model结合radio类型
    ```JavaScript
    <div id="app">
    <label for="male">
      <input type="radio" id="male" value="男" v-model="sex">男
    </label>
    <label for="female">
      <input type="radio" id="female" value="女" v-model="sex">女
    </label>
    <h2>您选择的性别是: {{sex}}</h2>
    </div>

    <script src="../js/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          message: '你好啊',
          sex: '女'
        }
      })
    </script>
    ```
  - 2. v-model结合checkbox单选框和多选框
    ```javascript
    // 多选框
    <div id="app">
    <label for="agree">
      <input type="checkbox" id="agree" v-model="isAgree">同意协议
    </label>
    <h2>您选择的是: {{isAgree}}</h2>
    <button :disabled="!isAgree">下一步</button>

    //多选框
    <input type="checkbox" value="篮球" v-model="hobbies">篮球
    <input type="checkbox" value="足球" v-model="hobbies">足球
    <input type="checkbox" value="乒乓球" v-model="hobbies">乒乓球
    <input type="checkbox" value="羽毛球" v-model="hobbies">羽毛球
    <h2>您的爱好是: {{hobbies}}</h2>

    <label v-for="item in originHobbies" :for="item">
      <input type="checkbox" :value="item" :id="item" v-model="hobbies">{{item}}
    </label>

    <script>
      const app = new Vue({
        el: '#app',
        data: {
          message: '你好啊',
          isAgree: false, // 单选框
          hobbies: [], // 多选框,
          originHobbies: ['篮球', '足球', '乒乓球', '羽毛球', '台球', '高尔夫球']
        }
      })
    </script>
    </div>
    ```
  - 3. v-model结合select类型
    - 选择一个
    ```javascript
    <select name="abc" v-model="fruit">
    <option value="苹果">苹果</option>
    <option value="香蕉">香蕉</option>
    <option value="榴莲">榴莲</option>
    <option value="葡萄">葡萄</option>
    </select>
    <h2>您选择的水果是: {{fruit}}</h2>
    ```
    - 选择多个(multiple属性)
    ```javascript
    <select name="abc" v-model="fruits" multiple>
    <option value="苹果">苹果</option>
    <option value="香蕉">香蕉</option>
    <option value="榴莲">榴莲</option>
    <option value="葡萄">葡萄</option>
    </select>
    <h2>您选择的水果是: {{fruits}}</h2>

    <script>
    const app = new Vue({
      el: '#app',
      data: {
        message: '你好啊',
        fruit: '香蕉',
        fruits: []
      }
    })
    </script>
    ```
  - 4. v-model修饰符的使用
    - lazy(输入时不会立即更新变量值，当敲回车之后才改变)
    ```javascript
    <input type="text" v-model.lazy="message">
    <h2>{{message}}</h2>
    ```
    - number(规定输入的数据必须是数值型)
    ```javascript
    <input type="number" v-model.number="age">
    <h2>{{age}}-{{typeof age}}</h2>
    ```
    - trim(去除输入字符串两边的空格)
    ```javascript
    <input type="text" v-model.trim="name">
    <h2>您输入的名字:{{name}}</h2>
    ```


### Vue计算属性
* 计算属性（计算属性会进行缓存，如果多次使用时，计算属性只会调用一次）
  - 计算属性可以直接运行显示，不要调用条件，函数需要调用条件，不能自动运行
```JavaScript
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

### filters：过滤器
* 过滤器也是一种函数，可以接收数据
* 过滤器可以对一个参数进行调整
```JavaScript
//过滤器定义
filters:{
  keepTwoDecimals(price){
    return '￥' + price.toFixed(2);
  }
}
```
```JavaScript
//过滤器使用
<h3>总价：{{AllPrice | keepTwoDecimals}}</h3>
```

### JS方法、HTML属性的补充
* 1. toFixed():确定小数点后保留几位
```JavaScript
price.toFixed(2); //保留两位小数点
```
* 2. disabled属性：控制按钮是否显示
```JavaScript
:disabled="item.count <= 1"
```
* #### 3.高阶函数
- 1. filter函数的使用
```JavaScript
// 10, 20, 40, 50
// 取出所有小于100的数字
let newNums = nums.filter(function (n) {
  return n < 100
})
console.log(newNums);
```
- 2. map函数的使用
```JavaScript
// 20, 40, 80, 100
// 将所有小于100的数字进行转化: 全部*2
let new2Nums = newNums.map(function (n) { // 20
  return n * 2
})
console.log(new2Nums);
```
- 3. reduce函数的使用
```JavaScript
// reduce作用对数组中所有的内容进行汇总
preValue:代表上一个值，初始值手动设置为0，每次 preValue = preValue + n
let total = new2Nums.reduce(function (preValue, n) {
  return preValue + n
}, 0)
console.log(total);
```

* 4. 

### ES6 语法补充
* ES6 对象字面量的增强写法
  - 属性的增强写法
  ```JavaScript
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
  ```JavaScript
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
```JavaScript
this.letters.push('aaa')
this.letters.push('aaaa', 'bbbb', 'cccc')
```
* 2.pop()方法: 删除数组中的最后一个元素
```JavaScript
this.letters.pop();
```
* 3.shift(): 删除数组中的第一个元素
```JavaScript
this.letters.shift();
```
* 4.unshift(): 在数组最前面添加元素
```JavaScript
this.letters.unshift()
this.letters.unshift('aaa', 'bbb', 'ccc')
```
* 5.splice作用: 删除元素/插入元素/替换元素
  - 删除元素: 第二个参数传入你要删除几个元素(如果没有传,就删除后面所有的元素)
  - 替换元素: 第二个参数, 表示我们要替换几个元素, 后面是用于替换前面的元素
  - 插入元素: 第二个参数, 传入0, 并且后面跟上要插入的元素
```JavaScript
splice(start)
splice(start):
this.letters.splice(1, 3, 'm', 'n', 'l', 'x')
this.letters.splice(1, 0, 'x', 'y', 'z')
```
* 6.sort(): 排序
* 7.reverse(): 反转
* 8.通过索引值修改数组中的元素
```JavaScript
this.letters[0] = 'bbbbbb';
this.letters.splice(0, 1, 'bbbbbb')
// set(要修改的对象, 索引值, 修改后的值)
Vue.set(this.letters, 0, 'bbbbbb')
```

### Vue的组件化开发
#### 1. **组件构造器->注册组件->使用组件**  的方式创建组件
* 创建组件构造器对象
```javascript
const cpnC = Vue.extend({
  template: `
    <div>
      <h2>我是标题</h2>
      <p>我是内容, 哈哈哈哈</p>
      <p>我是内容, 呵呵呵呵</p>
    </div>`
})
```
* 注册组件(不在Vue中注册的为全局组件)
```javascript
Vue.component('my-cpn', cpnC)
```
* 使用组件(必须在Vue监管的范围内使用组件)
```javascript
<div id="app">
  <!--3.使用组件-->
  <my-cpn></my-cpn>
  <my-cpn></my-cpn>
  <my-cpn></my-cpn>
  <my-cpn></my-cpn>

  <div>
    <div>
      <my-cpn></my-cpn>
    </div>
  </div>
</div>
```

#### 2. 全局组件和局部组件
* 创建组件构造器对象
```javascript
const cpnC = Vue.extend({
  template: `
    <div>
      <h2>我是标题</h2>
      <p>我是内容, 哈哈哈哈</p>
      <p>我是内容, 呵呵呵呵</p>
    </div>`
})
```
* 全局组件(在Vue外面注册组件)
```javascript
Vue.component('cpn', cpnC)
```
* 局部组件(使用Vue的components来注册组件)
```javascript
const app = new Vue({
  el: '#app',
  data: {
    message: '你好啊'
  },
  components: {
    // cpn使用组件时的标签名
    cpn: cpnC
  }
})
```

#### 3. 子组件和父组件
* 创建第一个组件构造器(子组件)
```javascript
const cpnC1 = Vue.extend({
  template: `
    <div>
      <h2>我是标题1</h2>
      <p>我是内容, 哈哈哈哈</p>
    </div>
  `
})
```
* 创建第二个组件构造器(父组件):父组件中包含了子组件的注册器
```javascript
const cpnC2 = Vue.extend({
  template: `
    <div>
      <h2>我是标题2</h2>
      <p>我是内容, 呵呵呵呵</p>
      <cpn1></cpn1>
    </div>
  `,
  components: {
    cpn1: cpnC1
  }
})

// root组件(来注册父组件)
const app = new Vue({
  el: '#app',
  data: {
    message: '你好啊'
  },
  components: {
    cpn2: cpnC2
  }
})

```


#### 4. 语法糖方式注册组件:省略组件构造器，直接在注册器中写组件
* 全局组件
```javascript
Vue.component('cpn1', {
  template: `
    <div>
      <h2>我是标题1</h2>
      <p>我是内容, 哈哈哈哈</p>
    </div>
  `
})
```
* 局部组件
```javascript
const app = new Vue({
  el: '#app',
  data: {
    message: '你好啊'
  },
  components: {
    'cpn2': {
      template: `        //`` 括起来的字符串可以分行写
        <div>
          <h2>我是标题2</h2>
          <p>我是内容, 呵呵呵</p>
        </div>
  `
    }
  }
})
```

#### 5. 组件模板分离的写法
```javascript
<div id="app">
  <cpn></cpn>
  <cpn></cpn>
  <cpn></cpn>
</div>

// 2. 创建组件内容
<template id="cpn">
  <div>
    <h2>我是标题</h2>
    <p>我是内容,呵呵呵</p>
  </div>
</template>

// 1.注册一个全局组件
Vue.component('cpn', {
  template: '#cpn'
})

const app = new Vue({
  el: '#app',
  data: {
    message: '你好啊'
  }
})
```

#### 6. 注册器中data必须是函数的形式:组件复用的时候希望data的值相互独立，所以使用函数每次**新创建一个对象**来传递值。
```javascript
Vue.component('cpn', {
  template: '#cpn',
  data() {
    return {
      title: 'abc'
    }
  }
})
```

#### 7. 父组件向子组件传递数据:使用props 属性
```javascript
<div id="app">
  <!--<cpn v-bind:cmovies="movies"></cpn>-->
  <!--<cpn cmovies="movies" cmessage="message"></cpn>-->

  // 此处父组件的message、movies传给子组件的cmessage、cmovies

  <cpn :cmessage="message" :cmovies="movies"></cpn>
</div>


const cpn = {
  template: '#cpn',
  // props: ['cmovies', 'cmessage'],
  props: {  
    // props定义了子组件的变量，也可以定义变量的默认值等等，用来接收父组件传来的值
    // 1.类型限制
    // cmovies: Array,
    // cmessage: String,

    // 2.提供一些默认值, 以及必传值
    cmessage: {
      type: String,
      default: 'aaaaaaaa',
      required: true
    },
    // 类型是对象或者数组时, 默认值必须是一个函数
    cmovies: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  methods: {

  }
}

const app = new Vue({
  el: '#app',
  data: {
    message: '你好啊',
    movies: ['海王', '海贼王', '海尔兄弟']
  },
  components: {
    cpn
  }
})
```
* **子组件中v-bind绑定的属性不能使用驼峰命名**，只能使用c-info的方式命名
```javascript
<div id="app">
  <cpn :c-info="info" :child-my-message="message" v-bind:class></cpn>
</div>
```

#### 8. 子组件向父组件传递数据：通过自定义事件
```javascript
<!--父组件模板-->
<div id="app">
// 父组件监听自定义的item-click事件是否发生，如果发生则做出相应，此时数据已经通过自定义事件回传到父组件中
  <cpn @item-click="cpnClick"></cpn>
</div>

<!--子组件模板-->
<template id="cpn">
  <div>
    <button v-for="item in categories"
    // 监听案件是否被点击，传回点击的itme
            @click="btnClick(item)">
      {{item.name}}
    </button>
  </div>
</template>


// 1.子组件
const cpn = {
  template: '#cpn',
  data() {
    // 只能返回对象
    return {
      categories: [
        {id: 'aaa', name: '热门推荐'},
        {id: 'bbb', name: '手机数码'},
        {id: 'ccc', name: '家用家电'},
        {id: 'ddd', name: '电脑办公'},
      ]
    }
  },
  methods: {
    btnClick(item) {
      // 发射事件: 自定义事件
      this.$emit('item-click', item)
    }
  }
}


// 2.父组件
const app = new Vue({
  el: '#app',
  data: {
    message: '你好啊'
  },
  components: {
    cpn
  },
  methods: {
    cpnClick(item) {
      console.log('cpnClick', item);
    }
  }
})
```




#### 9. watch(可以监控变量是否改变)
```javascript

<input type="text" v-model="dnumber1">
<input type="text" v-model="dnumber2">

watch: {
  dnumber1(newValue) {
    this.dnumber2 = newValue * 100;
    this.$emit('num1change', newValue);
  },
  dnumber2(newValue) {
    this.number1 = newValue / 100;
    this.$emit('num2change', newValue);
  }
}
// 使用watch来定义方法可以不用讲v-model拆分成 :value=""  @input="dnum2change"的形式
<input type="text" :value="dnum1" @input="dnum1change">
<input type="text" :value="dnum2" @input="dnum2change">

methods: {
  dnum1change(event){
    this.dnum1 = event.target.value;
    this.$emit('numchage1',this.dnum1)
  },
  dnum2change(event){
    this.dnum2 = event.target.value;
    this.$emit('numchage2',this.dnum2)
  }
}
```

#### 10. 组件访问——父访问子
##### 方式一(常用)
- 子组件中增加 *ref* 属性
```javascript
<cpn ref="aaa"></cpn>
```
- 父组件通过 *$ref.aaa* 的方式调用子组件中的值
```JavaScript
console.log(this.$refs.aaa.name);
```
##### 方式二(不常用)
通过 *$children[]* 的方式调用，因为使用的是数组的方式，耦合性太高不推荐使用
```javascript
console.log(this.$children[3].name)
```

#### 11. 组件访问——子访问父
- 访问父组件： *$parent*
```javascript
console.log(this.$parent)
```
- 访问根组件： *$root*
```javascript
console.log(this.$root)
```

#### 12.slot插槽的使用
1. 插槽的基本使用 <slot></slot>
```javascript
<template id="cpn">
  <div>
    <h2>我是组件</h2>
    <p>我是组件, 哈哈哈</p>
    <slot></slot>
  </div>
</template>
```
2. 插槽的默认值 <slot>默认内容</slot>
```javascript
<template id="cpn">
  <div>
    <h2>我是组件</h2>
    <p>我是组件, 哈哈哈</p>
    <slot><button>按钮</button></slot>
  </div>
</template>
```
3. 如果有多个值, 同时放入到组件进行替换时, 一起作为替换元素
```javascript
<cpn>
  <i>呵呵呵</i>
  <div>我是div元素</div>
  <p>我是p元素</p>
</cpn>

<template id="cpn">
  <div>
    <h2>我是组件</h2>
    <p>我是组件, 哈哈哈</p>
    <slot></slot>
  </div>
</template>
```
4. 具名插槽的使用
```javascript
<div id="app">
  <cpn><span slot="center">标题</span></cpn>
  <cpn><button slot="left">返回</button></cpn>
</div>

<template id="cpn">
  <div>
    <slot name="left"><span>左边</span></slot>
    <slot name="center"><span>中间</span></slot>
    <slot name="right"><span>右边</span></slot>
  </div>
</template>
```
5. 插槽的案例:父组件需要使用到子组件中的数据重新定义显示方式
```javascript
<div id="app">
  <cpn></cpn>

  <cpn>
    <!--目的是获取子组件中的pLanguages-->
    <template slot-scope="slot">
      <!--<span v-for="item in slot.data"> - {{item}}</span>-->
      <span>{{slot.data.join(' - ')}}</span>
    </template>
  </cpn>

  <cpn>
    <!--目的是获取子组件中的pLanguages-->
    <template slot-scope="slot">
      <!--<span v-for="item in slot.data">{{item}} * </span>-->
      <span>{{slot.data.join(' * ')}}</span>
    </template>
  </cpn>
  <!--<cpn></cpn>-->
</div>

<template id="cpn">
  <div>
    <slot :data="pLanguages">
      <ul>
        <li v-for="item in pLanguages">{{item}}</li>
      </ul>
    </slot>
  </div>
</template>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好啊'
    },
    components: {
      cpn: {
        template: '#cpn',
        data() {
          return {
            pLanguages: ['JavaScript', 'C++', 'Java', 'C#', 'Python', 'Go', 'Swift']
          }
        }
      }
    }
  })
</script>
```