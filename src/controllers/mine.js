app.controller('MineCtrl', ['$scope', '$rootScope', '$css', function($scope, $rootScope, $css) {
	$css.bind({
		href: './src/css/mine.css'
	}, $scope);

	// // dom操作 try 1 try  切换class
	// var ddnav = document.querySelectorAll(".dd_nav div");
	// var ddcnt = document.querySelectorAll(".dd_content li");
	// angular.element(ddnav).on('click', function() {
	// 	angular.element(ddnav).removeClass('dd_nav_choose');
	// 	angular.element(this).addClass('dd_nav_choose');

	// 	// 垃圾angular，show()hide()都没  index()也没有 垃圾 
	// 	// var index;
	// 	// for(let i=0; i<ddnav.length; i++){
	// 	// 	// angular.element(ddnav[i]).hasClass('dd_nav_choose') && index = i;
	// 	// 	if(angular.element(ddnav[i]).hasClass('dd_nav_choose')){
	// 	// 		index = i;
	// 	// 	} 
	// 	// }
	// 	// console.log(index)
	// 	// // angular.element(ddcnt).hide();
	// })

	// 二级页面box显示标识
	$scope.my_cntbox_show = false;

	// 显示隐藏底部导航
	$scope.hideFooterNav = function(){
		$rootScope.footerNavFlag = false;
	}
	$scope.showFooterNav = function(){
		$rootScope.footerNavFlag = true;
	}
}]);