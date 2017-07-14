app.controller('CartCtrl', ['$scope', '$rootScope', '$css', 'GoodService', 'funFactory', '$state', function($scope, $rootScope, $css, GoodService, funFactory, $state){
	// 添加购物车页的css样式
	$css.bind({
		href: './src/css/cart.css'
	}, $scope);

	// 分离总价钱和是否全选函数,函数表达式/(ㄒoㄒ)/~~需要写在调用之前
	$scope.comFn = function(obj){
		$scope.totlePrice = obj.allMoney;
		$scope.allCheckedFlag = obj.allCheck;
	}

// 刷新页面和跳转页面后执行以下代码更新购物车商品信息
	// 获取GoodService中保存的要购买的物品并显示在购物车页
	$scope.goods = GoodService.showGood();

	// 保存价钱
	var tempO = funFactory.countMoney($scope.goods);
	$scope.comFn(tempO);

// 功能函数调用
	// 增加数量
	$scope.addCount = function(){
		let tempObj = GoodService.addGoodCount(this.$index);
		$scope.comFn(tempObj);
	}

	// 减少数量
	$scope.reduceCount = function() {
		let tempObj = GoodService.reduceGoodCount(this.$index);
		$scope.comFn(tempObj);
	}

	// 单个商品选中按钮
	$scope.isChecked = function(){
		let tempObj = GoodService.isChecked(this.$index);
		$scope.comFn(tempObj);
	}

	// 全选按钮
	$scope.allCheckedFlag = true;
	$scope.allChecked = function(){
		let tempObj = GoodService.allChecked();
		$scope.comFn(tempObj);
	}

	
	// 购物车无商品点击回到home页
	$scope.backToHome = function(){
		$state.go('home');
	}
	
}]);