var app = angular.module("clockApp",[]);

app.controller("TimeCtrl",TimeCtrl);


function TimeCtrl($scope) {

	$scope.userBirthday = "";

	var currentDate = new Date();

	$scope.timeString = currentDate.toTimeString();

	
	$scope.updateTime = function(){

		var currentDate = new Date();

		$scope.timeString = currentDate.toTimeString();
	}


}