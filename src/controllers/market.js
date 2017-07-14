app.controller('MarketCtrl', ['$scope', '$css', '$http', '$stateParams', '$state', 'GoodService', function($scope, $css, $http, $stateParams, $state, GoodService) {
	// 引入market对应css文件
	$css.bind({
		href: './src/css/market.css'
	}, $scope);

	// 请求数据
	$http.get('./static/data/list.json').then(data => {
		// 保存左侧分类列表数据
		$scope.categories = data.data.data.categories;

		// 保存列表对应的商品数据
		$scope.products = data.data.data.products;
		console.log($scope.products);

		// 选中项对应商品列表数据,首次显示第一个,非首次更新商品数量
		let tempGoodList = $scope.products[$scope.categories[0].id];
		$scope.goods = GoodService.updateNum(tempGoodList);

		// 接收跳转数据改变显示物品
		if($stateParams.category_id!=null && $stateParams.category_id!=100001){
			$scope.currentIndex = $stateParams.category_id;
			$scope.goods = $scope.products[$stateParams.category_id];
		}
	});

	// 初始下标为0，为第一个菜单栏添加class
	$scope.currentIndex = "104747";

	// 菜单栏点击事件切换右侧列表，改变下标使对应栏目加上choose类
	$scope.changeList = function() {
		console.log(this)
		// 获取点击的菜单对应下标并获取id
		let key = $scope.categories[this.$index].id;
		// 更新点击对应的商品列表
		let tempGoodList = $scope.products[key];
		$scope.goods = GoodService.updateNum(tempGoodList);
		// 将点击元素下标赋值给当前下标供外部判断添加class
		$scope.currentIndex = this.item.id;
	}

	// 添加到购物车
	$scope.addToCart = function() {
		GoodService.addGood(this.item);
	}

	// 从购物车移除
	$scope.reduceToCart = function() {
		GoodService.reduceGood(this.item);
	}

	// 跳转到详情页
	$scope.jumpto_xq = function() {
		console.log(this);
		$state.go('detail',{good: this.item});
	}

}]);