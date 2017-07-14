app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	// 默认路由
	$urlRouterProvider
	.when('', 'home');

	// 静态路由
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: './src/html/home.html',
		controller: 'HomeCtrl'
	})
	.state('market', {
		params: {'category_id': null},
		url: '/market',
		templateUrl: './src/html/market.html',
		controller: 'MarketCtrl'
	})
	.state('cart', {
		url: '/cart',
		templateUrl: './src/html/cart.html',
		controller: 'CartCtrl'
	})
	.state('mine', {
		url: '/mine',
		templateUrl: './src/html/mine.html',
		controller: 'MineCtrl'
	})
	.state('detail', {
		params: {'good': null},
		url: '/detail',
		templateUrl: './src/html/detail.html',
		controller: 'DetailCtrl'
	})
}]);