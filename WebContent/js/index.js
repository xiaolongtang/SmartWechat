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


            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/playlists');
        })

        .controller('AppCtrl', function ($scope,$http) {
        	$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=temperature').success(function(data){
//    			var temp=data;
        		var locationArray=[
//    			                  {location:'Beijing', temp:26},
//    			                  {location:'Shenzhen', temp:27},
//    			                  {location:'Budapest', temp:24}
    			                      ];
        		locationArray.push({location:'Dalian',temp:data.value});
        		locationArray.push({location:'Beijing',temp:26.3});
        		locationArray.push({location:'Shenzhen',temp:27.2});
        		locationArray.push({location:'Budapest',temp:24.7});
        		$scope.locations=locationArray;
    		});
        	
//            $scope.locations=[
//        {location:'Dalian', temp:26},
//        {location:'Beijing', temp:26},
//        {location:'Shenzhen', temp:27},
//        {location:'Budapest', temp:24}
//            ];
        })

//        .controller('PlaylistsCtrl', function ($scope) {
//            console.log("PlaylistsCtrl");
//            $scope.playlists = [
//                {title: 'Reggae', id: 1},
//                {title: 'Chill', id: 2},
//                {title: 'Dubstep', id: 3},
//                {title: 'Indie', id: 4},
//                {title: 'Rap', id: 5},
//                {title: 'Cowbell', id: 6}
//            ];
//        })

        .controller('PlaylistsCtrl', function ($scope,$http) {
//            $scope
            console.log("controller running...");
            var updateStatus = function(){
                console.log("function running...");
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm2.5').success(function(data){
	    			$scope.pm25=data;
//                                console.log(data);
	    			$scope.pm25c=getColor(data.value);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm10').success(function(data){
	    			$scope.pm10=data;
//                                console.log(data);
                    $scope.pm10c=getColor(data.value);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm1.0').success(function(data){
	    			$scope.pm1=data;
	    			$scope.pm1c=getColor(data.value);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=temperature').success(function(data){
	    			$scope.temperature=data;
                                console.log(data);
	    		});
	    		$http.get('https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=humidity').success(function(data){
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