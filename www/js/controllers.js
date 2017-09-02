angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal,$rootScope, $ionicPopover, $timeout,  $location, $ionicPopup,API,$rootScope) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  //--------------------------------------------
   $scope.login = function(user) {
			
		if(typeof(user)=='undefined'){
			$scope.showAlert('Please fill username and password to proceed.');	
			return false;
		}
		API.get_details('LoginApi?username='+user.username+'&password='+user.password+'').success(function(data)
    	{
    		if(data.Error=="False"){
    			$rootScope.userEmail=user.username;
    			$rootScope.password=user.password;
				$location.path('/app/dashboard');
			}else{
				$scope.showAlert('Invalid username or password.');	
			}
    	})
		
		
	};
	//--------------------------------------------------/
	$scope.userregistration=function(data){
		API.get_details('register?username='+data.username+'&password='+data.password+'&email='+data.email+'&mobile='+data.mobile+'').success(function(data1)
    	{
    		console.log(data);
    		if(data1.Error=="True")
    		{
    			//alert(data.Message);
    			$scope.showAlert(data1.Message);	

    		}
    		else
    		{
    			$rootScope.userEmail=data.email;
    			$rootScope.password=data.password;
				$location.path('/app/dashboard');
    		}
    	})
	}
  //--------------------------------------------
  $scope.logout = function() { 
  	$rootScope.userEmail='';
    $rootScope.password='';  
  	$location.path('/app/login');  
  	 };
  //--------------------------------------------
   // An alert dialog
	 $scope.showAlert = function(msg) {
	   var alertPopup = $ionicPopup.alert({
		 title: 'Warning Message',
		 template: msg
	   });
	 };
  //--------------------------------------------
})

.controller('ProfilesCtrl', function($scope) {
   // $scope.profiles = Profiles.all();
})

.controller('ProfileCtrl', function($scope, $stateParams,$rootScope,API ) {
	//$scope.profile = Profiles.get($stateParams.profileId);
	// send money
	$scope.sendMoney=function(data1){
		console.log("here");
		API.get_details('SendBittcoinapi?username='+$rootScope.userEmail+'&address_to='+data1.address+'&amount='+data1.amount+'&fees='+data1.fees+'&description='+data1.description+'').success(function(data)
		{
			console.log(data);
			//$scope.balance=data.Balance;
		})
	}
})

.controller('DashCtrl', function($scope, $stateParams ,$rootScope,API) {
	//$scope.profiles = Profiles.all();
		API.get_details('BalanceApi?username='+$rootScope.userEmail+'&password='+$rootScope.password+'').success(function(data)
		{
			console.log(data);
			$scope.balance=data.Balance;
		})
		API.get_details('GetAddress?username='+$rootScope.userEmail+'&password='+$rootScope.password+'').success(function(data)
		{
			console.log(data);
			$scope.reciveAddress=data.Message;
		})

	  $scope.logout = function() { 
	  	$rootScope.userEmail='';
	    $rootScope.password='';  
	  	$location.path('/app/login');  
  	 };
})
.controller('TransationCtrl',function($scope,$stateParams,$rootScope,API)
{
	API.get_details('transactionApi?username='+$rootScope.userEmail+'&password='+$rootScope.password+'').success(function(data)
	{
		console.log(data);
		if(data.length>0)
		{
			$scope.allData=data;
		}
		else
		{
			$scope.allData=data;
		}
		
	})
})

