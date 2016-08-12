angular.module('starter', ['ionic'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider

                    .state('app', {
                        url: "/app",
                        abstract: true,
                        templateUrl: "menu.html",
                        controller: 'AppCtrl'
                    })

                    .state('app.playlists', {
                        url: "/playlists",
                        views: {
                            'menuContent': {
                                templateUrl: "playlists.html",
                                controller: 'PlaylistsCtrl'
                            }
                        }
                    })
                    
                    .state('app.Beijing', {
                        url: "/Beijing",
                        views: {
                            'menuContent': {
                                templateUrl: "Beijing.html",
                                controller: 'BeijingCtrl'
                            }
                        }
                    })
                    
                    .state('app.Shenzhen', {
                        url: "/Shenzhen",
                        views: {
                            'menuContent': {
                                templateUrl: "Shenzhen.html",
                                controller: 'ShenzhenCtrl'
                            }
                        }
                    })
                    
                     .state('app.Shanghai', {
                        url: "/Shanghai",
                        views: {
                            'menuContent': {
                                templateUrl: "Shanghai.html",
                                controller: 'ShanghaiCtrl'
                            }
                        }
                    })


            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/playlists');
        })

        .controller('AppCtrl', function ($scope,$http) {
        	$scope.locations=[];
        	$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=temperature&location=dl').success(function(data){
        		$scope.locations.push({location:'Dalian',temp:data.value});   		
    		});
        	
        	$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=temperature&location=bj').success(function(data){
        		$scope.locations.push({location:'Beijing',temp:data.value});
        	});
        	
            $http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=temperature&location=sz').success(function(data){
            	$scope.locations.push({location:'Shenzhen',temp:data.value});
        	});
            
            $http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=temperature&location=sh').success(function(data){
            	$scope.locations.push({location:'Shanghai',temp:data.value});
        	});
        })

        .controller('PlaylistsCtrl', function ($scope,$http) {
//            $scope
            console.log("controller running...");
            var updateStatus = function(){
                console.log("function running...");
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm2.5&location=dl').success(function(data){
	    			$scope.pm25=data;
//                                console.log(data);
	    			$scope.pm25c=getColor(data.value);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm10&location=dl').success(function(data){
	    			$scope.pm10=data;
//                                console.log(data);
                    $scope.pm10c=getColor(data.value);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm1.0&location=dl').success(function(data){
	    			$scope.pm1=data;
	    			$scope.pm1c=getColor(data.value);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=temperature&location=dl').success(function(data){
	    			$scope.temperature=data;
                                console.log(data);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=humidity&location=dl').success(function(data){
	    			$scope.humidity=data;
                                console.log(data);
	    		});
	    	};
    	    setInterval(function(){
            $scope.$apply(updateStatus);
             },10000);
             
             updateStatus();
             
             var getColor=function (num){
            	 if(num<=50 &&num>0){
            		 return "#3ebf6c";
            	 }else if(num>50 && num<=100){
            		 return "#d7af0c";
            	 }else if(num>100 && num<=150){
            		 return "#dd0000";
            	 }else{
            		 return "#6d6d6d";
            	 }
             };
             
//            $scope.apply(updateStatus);
//            $scope.apply(setInterval);
        })
        
          .controller('BeijingCtrl', function ($scope,$http) {
            console.log("controller running...");
            var updateStatus = function(){
                console.log("function running...");
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm2.5&location=bj').success(function(data){
	    			$scope.pm25=data;
//                                console.log(data);
	    			$scope.pm25c=getColor(data.value);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm10&location=bj').success(function(data){
	    			$scope.pm10=data;
//                                console.log(data);
                    $scope.pm10c=getColor(data.value);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm1.0&location=bj').success(function(data){
	    			$scope.pm1=data;
	    			$scope.pm1c=getColor(data.value);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=temperature&location=bj').success(function(data){
	    			$scope.temperature=data;
                                console.log(data);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=humidity&location=bj').success(function(data){
	    			$scope.humidity=data;
                                console.log(data);
	    		});
	    	};
    	    setInterval(function(){
            $scope.$apply(updateStatus);
             },10000);
             
             updateStatus();
             
             var getColor=function (num){
            	 if(num<=50 &&num>0){
            		 return "#3ebf6c";
            	 }else if(num>50 && num<=100){
            		 return "#d7af0c";
            	 }else if(num>100 && num<=150){
            		 return "#dd0000";
            	 }else{
            		 return "#6d6d6d";
            	 }
             };
             
        })
        
           .controller('ShenzhenCtrl', function ($scope,$http) {
            console.log("controller running...");
            var updateStatus = function(){
                console.log("function running...");
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm2.5&location=sz').success(function(data){
	    			$scope.pm25=data;
//                                console.log(data);
	    			$scope.pm25c=getColor(data.value);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm10&location=sz').success(function(data){
	    			$scope.pm10=data;
//                                console.log(data);
                    $scope.pm10c=getColor(data.value);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm1.0&location=sz').success(function(data){
	    			$scope.pm1=data;
	    			$scope.pm1c=getColor(data.value);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=temperature&location=sz').success(function(data){
	    			$scope.temperature=data;
                                console.log(data);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=humidity&location=sz').success(function(data){
	    			$scope.humidity=data;
                                console.log(data);
	    		});
	    	};
    	    setInterval(function(){
            $scope.$apply(updateStatus);
             },10000);
             
             updateStatus();
             
             var getColor=function (num){
            	 if(num<=50 &&num>0){
            		 return "#3ebf6c";
            	 }else if(num>50 && num<=100){
            		 return "#d7af0c";
            	 }else if(num>100 && num<=150){
            		 return "#dd0000";
            	 }else{
            		 return "#6d6d6d";
            	 }
             };
             
        })
       
          .controller('ShanghaiCtrl', function ($scope,$http) {
            console.log("controller running...");
            var updateStatus = function(){
                console.log("function running...");
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm2.5&location=sh').success(function(data){
	    			$scope.pm25=data;
//                                console.log(data);
	    			$scope.pm25c=getColor(data.value);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm10&location=sh').success(function(data){
	    			$scope.pm10=data;
//                                console.log(data);
                    $scope.pm10c=getColor(data.value);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm1.0&location=sh').success(function(data){
	    			$scope.pm1=data;
	    			$scope.pm1c=getColor(data.value);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=temperature&location=sh').success(function(data){
	    			$scope.temperature=data;
                                console.log(data);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=humidity&location=sh').success(function(data){
	    			$scope.humidity=data;
                                console.log(data);
	    		});
	    	};
    	    setInterval(function(){
            $scope.$apply(updateStatus);
             },10000);
             
             updateStatus();
             
             var getColor=function (num){
            	 if(num<=50 &&num>0){
            		 return "#3ebf6c";
            	 }else if(num>50 && num<=100){
            		 return "#d7af0c";
            	 }else if(num>100 && num<=150){
            		 return "#dd0000";
            	 }else{
            		 return "#6d6d6d";
            	 }
             };
             
        })