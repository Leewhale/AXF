app.service('GoodService',['$rootScope', 'funFactory', function($rootScope, funFactory){
	var arr = [];
	// 添加商品到购物车，查重，计数
	this.addGood = function(good){
		// 单个物品计数 有bug！！ 切换页面数量重置 为物品添加数量属性
		good.buyNum = good.buyNum != undefined? good.buyNum+1 : 1;

		// 查重并添加物品，更改arr数据 
		var flag = 0;
		arr.forEach((item,index)=>{
			if(good.id === item.good.id){
				flag = 1;
				item.num ++;
			}
		});

		if(flag == 0){
			var goodObj = {};
			goodObj.good = good;
			goodObj.num = 1;
			goodObj.check = true;
			arr.push(goodObj);
		}
		$rootScope.count_number ++;
	}

	// 将商品移除购物车，减小数量，为0则删除元素
	this.reduceGood = function(good){
		// 设置删除标识
		let delIndex;
		// 单个物品减少计数
		arr.forEach((item, index)=>{
			if(good.id === item.good.id){
				if(item.num > 1){
					item.num --;
				}else{
					delIndex = index;
				}
			}
		});
		// 数量等于1再减少删除商品
		(delIndex != undefined) && arr.splice(delIndex, 1);

		// 单个商品数量加减计数
		if(good.buyNum>1){
			good.buyNum--;
		}else if(good.buyNum == 1){
			good.buyNum = 0;
		}

		// 根下总商品计数
		$rootScope.count_number>0 && $rootScope.count_number --;
	}

	// 返回数组函数
	this.showGood = function(){
		return arr;
	}

	// 切回页面将购买数量写入
	this.updateNum = function(goodlist){
		if(arr.length === 0){
			return goodlist;
		}else{
			let listId = goodlist[0].category_id;
			arr.forEach( item => {
				if(item.good.category_id === listId){
					goodlist.forEach( good => {
						(item.good.id === good.id) && (good.buyNum = item.num);
					})
				}
			})
			return goodlist;
		}
	}






	// 购物车中使用
	// 增加数量
	this.addGoodCount = function(index){
		arr[index].num ++;
		$rootScope.count_number ++;
		return funFactory.countMoney(arr);
	}
	// 减少数量
	this.reduceGoodCount = function(index){
		if(arr[index].num > 1){
			arr[index].num --;
		}else{
			arr.splice(index,1);
		}
		$rootScope.count_number --;
		return funFactory.countMoney(arr);
	}
	// 是否选择此商品
	this.isChecked = function(index){
		arr[index].check = !arr[index].check;
		return funFactory.countMoney(arr);
	}
	// 是否全选
	this.allChecked = function(){
		let flag = true;
		for(let i=0; i<arr.length; i++){
			if(!arr[i].check){
				flag =  false;
				break;
			}
		}

		// 如果全选中则商品全不选
		if(flag){
			arr.forEach(item=>{
				item.check = false;
			})
		}else{
			arr.forEach(item=>{
				item.check = true;
			})
		}

		// 计算价钱
		return funFactory.countMoney(arr);
	}

}])