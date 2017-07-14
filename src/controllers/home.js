
app.controller('HomeCtrl', ['$scope', '$css', '$http', '$state', 'GoodService', function($scope, $css, $http, $state, GoodService){
	// 添加home页样式
	$css.bind({
		href: './src/css/home.css'
	}, $scope);

	// 获取home页数据
	$http.get('./static/data/home.json').then(data => {
		$scope.data = data.data.data.act_info;
	})

	// 添加到购物车
	$scope.addToCart = function(){
		GoodService.addGood(this.good);
	}

	// 轮播图
	// $scope.imgs = [
	// 'http://img01.bqstatic.com//upload/activity/2017062311023830.jpg@90Q.jpg',
	// 'http://img01.bqstatic.com//upload/activity/201706231845081.jpg@90Q.jpg',
	// 'http://img01.bqstatic.com//upload/activity/2017062616373766.jpg@90Q.jpg',
	// 'http://img01.bqstatic.com//upload/activity/2017062117043788.jpg@90Q.jpg',
	// 'http://img01.bqstatic.com//upload/activity/2017061419560712.jpg@90Q.jpg'];

	// 跳转
	$scope.goToMarket = function(){
		console.log(this)
		var category_id;
		if(this.item.cicons_detail != undefined){
			category_id = this.item.cicons_detail.category_id;
		}else if(this.item.category_detail != undefined){
			category_id = this.item.category_detail.category_id;
		}else{
			category_id = "104747";
		}
		
		// 跳转页面，传参
		$state.go('market', {category_id: category_id});
	}

	// 轮播图
	// 监听ngRepeatFinished在进行渲染
	$scope.$on('ngRepeatFinished', function(){
		console.log("aaa")
		var mySwiper = new Swiper('.swiper-container', {
			direction: 'horizontal',
			loop: true,
			autoplay: 1000,
			observer:true, // 自动监听值的改变
			// 如果需要分页器
			pagination: '.swiper-pagination',
			autoplayDisableOnInteraction: false
		});
	})

	// 跳转到详情页
	$scope.jumpto_xq = function(){
		console.log(this);
		$state.go('detail',{good: this.good});
	}
}]);