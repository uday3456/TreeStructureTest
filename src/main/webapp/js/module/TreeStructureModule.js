app=angular.module('TreeStructureModule',['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('tree',{
		url:'/tree',
		templateUrl:'views/TreeStructure.html',
		controller:'TreeStructureController',	
	});
	$stateProvider
	.state('treeChild',{
		url:'/treeChild',
		templateUrl:'views/TreeStructureRoot.html',
		controller:'TreeStructureControllerRoot',	
	});
	$urlRouterProvider.when("/","/tree");
})