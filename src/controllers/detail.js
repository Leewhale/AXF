app.controller('DetailCtrl', ['$scope', '$rootScope', '$css', '$stateParams', function($scope, $rootScope, $css, $stateParams){
	// 引入详情页样式
	$css.bind({
		href: './src/css/detail.css'
	}, $scope);

	//隐藏底部导航
	$rootScope.footerNavFlag = false;
	//将接收参数赋给good并展示到页面
	$scope.good = $stateParams.good;
	// 点击返回
	$scope.goback = function(){
		window.history.back();
		$rootScope.footerNavFlag = true;
	}
}])