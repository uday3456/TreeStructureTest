app.controller('TreeStructureController',function($scope){
	//var increment=0,decrement;
	$scope.increment=0;
	$scope.clicked=false;
	$scope.childIncrement=0;
	$scope.childClicked=false;
	$scope.count=function(){
		$scope.clicked=true;
		$scope.increment=$scope.increment+1;
		return $scope.increment;
	}
	$scope.array=function(num){
		return new Array(num);
	}
	$scope.childArray=function(num){
		return new Array(num);
	}
	
	$scope.removeAll=function(){
		$scope.increment=0;
		$scope.childIncrement=0;
		$scope.clicked=false;
		$scope.childClicked=false;
		return $scope.increment;
	}
	$scope.childCreation=function(){
		$scope.childClicked=true;
		$scope.childIncrement=$scope.childIncrement+1;
		return $scope.childIncrement;
	}
});