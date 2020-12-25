const app = new Vue({
  el:'#app',
  data:{
		allPrice: 0, //总价
    list: [
			{
				id: 1,
				name: '《算法导论》',
				date: '2006-9',
				price: 85.00,
				count: 1
			},
			{
				id: 2,
				name: '《UNIX编程艺术》',
				date: '2006-2',
				price: 59.00,
				count: 1
			},
			{
				id: 3,
				name: '《编程珠玑》',
				date: '2008-10',
				price: 39.00,
				count: 1
			},
			{
				id: 4,
				name: '《代码大全》',
				date: '2006-3',
				price: 128.00,
				count: 1
			},
		]
	},
	methods:{
		// 计算修改后的总价
		countAllprice() {
			this.allPrice = 0;
			for (let index = 0; index < this.list.length; index++) {
				this.allPrice += this.list[index].price * this.list[index].count;				
			}
		},
		// 添加数量
		addCount(index1){
			for (let index = 0; index < this.list.length; index++) {
				if(index1 == index){
					this.list[index].count += 1;
				}				
			}
		},
		// 减少数量
		subCount(index1){
			for (let index = 0; index < this.list.length; index++) {
				if(index1 == index){
					this.list[index].count -= 1;
				}				
			}
		},
		// 移除一行
		removeLine(index1){
			this.list.splice(index1,1);
		},
		// // 保留两位小数
		// keepTwoDecimals(price){
		// 	return '￥' + price.toFixed(2);
		// }
	},
	filters:{
		keepTwoDecimals(price){
			return '￥' + price.toFixed(2);
		}
	},
	computed:{
		AllPrice(){
			this.allPrice = 0;
			for (let index = 0; index < this.list.length; index++) {
				this.allPrice += this.list[index].price * this.list[index].count;
			}
			return this.allPrice
		}
	}
})

const nums = [10,20,3,65,476,57,56,756,7,567,5,7]
let newNums = nums.reduce()
console.log(newNums)