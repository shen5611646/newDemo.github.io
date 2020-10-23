const app = new Vue({
	el:'#app',
	data:{
		books:[
			{
				name:"《算法导论》",
				date:'2006-9',
				price:85.00,
				count:1,
				disable:false
			},
			{
				name:"《UNIX编程艺术》",
				date:'2006-9',
				price:59.00,
				count:1,
				disable:false
			},
			{
				name:"《编程珠玑》",
				date:'2006-9',
				price:39.00,
				count:1,
				disable:false
			},
			{
				name:"《代码大全》",
				date:'2006-3',
				price:128.00,
				count:1,
				disable:false
			}
		]
	},
	computed:{
		doTotal(){
			let total = 0;
			for(book of this.books){
				total = book.price*book.count + total
			}
			return total
		}
	},
	methods:{
		add(book){
			book.count += 1
			book.disable=false
		},
		sub(book){
			if(book.count==1){
				book.disable = true
			}else{
				book.count -= 1
			}
		},
		remove(index){
			this.books.splice(index,1)
		}
	},
	filters:{
		showPrice(price){
			return '￥' + price.toFixed(2)
		}
	}
})