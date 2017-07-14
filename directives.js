app.directive('headerDirective', function(){
	return {
		// 使用方式（E：标签形式）
		restrict: 'E',
		// 是否替换
		repalce: false,
		// 指令对应的地址文件
		templateUrl: './src/html/header.html',
		// 对应的控制器
		controller: 'HeaderCtrl'

	}
});

// link方法
// app.directive('swiperDirective', function(){
// 	return{
// 		replace: true,
// 		template:'<div class="swiper-container"><div class="swiper-wrapper"><div class="swiper-slide" ng-repeat="url in myImgs" style="font-size:0;"><img ng-src="{{ url }}" alt="" style="width:100%;" /></div></div><div class="swiper-pagination"></div></div>',
//         scope: {
//         	myImgs: '='
//         },
//         link: function(scope, element, attrs){
//         	// 需要在link方法中监听myImgs的值，然后在内部执行mySwiper的JS代码
//             scope.$watch('myImgs', function () {
//                 var mySwiper = new Swiper ('.swiper-container', {
//                     direction: 'horizontal',
//                     // loop: true,
//                     autoplay: 1000,

//                     // observer:true, // 自动监听值的改变

//                     // 如果需要分页器
//                     pagination: '.swiper-pagination',
//                     autoplayDisableOnInteraction: false
//                 })
//             });
//         }
// 	}
// });

app.directive('ngRepeatFinished', function(){
    return {
        restrict: 'ECMA',
        controller: function($scope){
            if($scope.$last){
                $scope.$emit('ngRepeatFinished');
            }
        }
    }
})
