angular
		.module('starter', [ 'ionic' ])

		.run(function($ionicPlatform) {
			$ionicPlatform.ready(function() {
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

		.config(function($stateProvider, $urlRouterProvider) {
			$stateProvider

			.state('app', {
				url : "/app",
				abstract : true,
				templateUrl : "menu.html",
				controller : 'AppCtrl'
			})

			.state('app.playlists', {
				url : "/playlists",
				views : {
					'menuContent' : {
						templateUrl : "playlists.html",
						controller : 'PlaylistsCtrl'
					}
				}
			})

			.state('app.Beijing', {
				url : "/Beijing",
				views : {
					'menuContent' : {
						templateUrl : "Beijing.html",
						controller : 'BeijingCtrl'
					}
				}
			})

			.state('app.Shenzhen', {
				url : "/Shenzhen",
				views : {
					'menuContent' : {
						templateUrl : "Shenzhen.html",
						controller : 'ShenzhenCtrl'
					}
				}
			})

			.state('app.Shanghai', {
				url : "/Shanghai",
				views : {
					'menuContent' : {
						templateUrl : "Shanghai.html",
						controller : 'ShanghaiCtrl'
					}
				}
			})

			.state('app.Remote', {
				url : "/Remote",
				views : {
					'menuContent' : {
						templateUrl : "Remote.html",
						controller : 'RemoteCtrl'
					}
				}
			})

			// if none of the above states are matched, use this as the fallback
			$urlRouterProvider.otherwise('/app/playlists');
		})

		.controller(
				'AppCtrl',
				function($scope, $http) {
					$scope.locations = [ {
						location : 'Dalian',
						temp : 20
					}, {
						location : 'Beijing',
						temp : 20
					}, {
						location : 'Shenzhen',
						temp : 20
					}, {
						location : 'Shanghai',
						temp : 20
					}, {
						location : 'Remote',
						temp : 0
					} ];
					$http
							.get(
									'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=temperature&location=dl')
							.success(function(data) {
								$scope.locations[0].temp = data.value;
							});

					$http
							.get(
									'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=temperature&location=bj')
							.success(function(data) {
								$scope.locations[1].temp = data.value;
							});

					$http
							.get(
									'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=temperature&location=sz')
							.success(function(data) {
								$scope.locations[2].temp = data.value;
							});

					$http
							.get(
									'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=temperature&location=sh')
							.success(function(data) {
								$scope.locations[3].temp = data.value;
							});
				})

		.controller(
				'PlaylistsCtrl',
				function($scope, $http) {
					//            $scope
					console.log("controller running...");
					var updateStatus = function() {
						console.log("function running...");
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm2.5&location=dl')
								.success(function(data) {
									$scope.pm25 = data;
									//                                console.log(data);
									$scope.pm25c = getColor(data.value);
								});
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm10&location=dl')
								.success(function(data) {
									$scope.pm10 = data;
									//                                console.log(data);
									$scope.pm10c = getColor(data.value);
								});
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm1.0&location=dl')
								.success(function(data) {
									$scope.pm1 = data;
									$scope.pm1c = getColor(data.value);
								});
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=temperature&location=dl')
								.success(function(data) {
									$scope.temperature = data;
									console.log(data);
								});
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=humidity&location=dl')
								.success(function(data) {
									$scope.humidity = data;
									console.log(data);
								});
					};
					setInterval(function() {
						$scope.$apply(updateStatus);
					}, 10000);

					updateStatus();

					var getColor = function(num) {
						if (num <= 50 && num > 0) {
							return "#3ebf6c";
						} else if (num > 50 && num <= 100) {
							return "#d7af0c";
						} else if (num > 100 && num <= 150) {
							return "#dd0000";
						} else {
							return "#6d6d6d";
						}
					};

					//            $scope.apply(updateStatus);
					//            $scope.apply(setInterval);
				})

		.controller(
				'BeijingCtrl',
				function($scope, $http) {
					console.log("controller running...");
					var updateStatus = function() {
						console.log("function running...");
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm2.5&location=bj')
								.success(function(data) {
									$scope.pm25 = data;
									//                                console.log(data);
									$scope.pm25c = getColor(data.value);
								});
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm10&location=bj')
								.success(function(data) {
									$scope.pm10 = data;
									//                                console.log(data);
									$scope.pm10c = getColor(data.value);
								});
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm1.0&location=bj')
								.success(function(data) {
									$scope.pm1 = data;
									$scope.pm1c = getColor(data.value);
								});
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=temperature&location=bj')
								.success(function(data) {
									$scope.temperature = data;
									console.log(data);
								});
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=humidity&location=bj')
								.success(function(data) {
									$scope.humidity = data;
									console.log(data);
								});
					};
					setInterval(function() {
						$scope.$apply(updateStatus);
					}, 10000);

					updateStatus();

					var getColor = function(num) {
						if (num <= 50 && num > 0) {
							return "#3ebf6c";
						} else if (num > 50 && num <= 100) {
							return "#d7af0c";
						} else if (num > 100 && num <= 150) {
							return "#dd0000";
						} else {
							return "#6d6d6d";
						}
					};

				})

		.controller(
				'ShenzhenCtrl',
				function($scope, $http) {
					console.log("controller running...");
					var updateStatus = function() {
						console.log("function running...");
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm2.5&location=sz')
								.success(function(data) {
									$scope.pm25 = data;
									//                                console.log(data);
									$scope.pm25c = getColor(data.value);
								});
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm10&location=sz')
								.success(function(data) {
									$scope.pm10 = data;
									//                                console.log(data);
									$scope.pm10c = getColor(data.value);
								});
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm1.0&location=sz')
								.success(function(data) {
									$scope.pm1 = data;
									$scope.pm1c = getColor(data.value);
								});
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=temperature&location=sz')
								.success(function(data) {
									$scope.temperature = data;
									console.log(data);
								});
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=humidity&location=sz')
								.success(function(data) {
									$scope.humidity = data;
									console.log(data);
								});
					};
					setInterval(function() {
						$scope.$apply(updateStatus);
					}, 10000);

					updateStatus();

					var getColor = function(num) {
						if (num <= 50 && num > 0) {
							return "#3ebf6c";
						} else if (num > 50 && num <= 100) {
							return "#d7af0c";
						} else if (num > 100 && num <= 150) {
							return "#dd0000";
						} else {
							return "#6d6d6d";
						}
					};

				})

		.controller(
				'ShanghaiCtrl',
				function($scope, $http) {
					console.log("controller running...");
					var updateStatus = function() {
						console.log("function running...");
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm2.5&location=sh')
								.success(function(data) {
									$scope.pm25 = data;
									//                                console.log(data);
									$scope.pm25c = getColor(data.value);
								});
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm10&location=sh')
								.success(function(data) {
									$scope.pm10 = data;
									//                                console.log(data);
									$scope.pm10c = getColor(data.value);
								});
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=pm1.0&location=sh')
								.success(function(data) {
									$scope.pm1 = data;
									$scope.pm1c = getColor(data.value);
								});
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=temperature&location=sh')
								.success(function(data) {
									$scope.temperature = data;
									console.log(data);
								});
						$http
								.get(
										'https://smart-web-wechat.run.aws-usw02-pr.ice.predix.io/value?type=humidity&location=sh')
								.success(function(data) {
									$scope.humidity = data;
									console.log(data);
								});
					};
					setInterval(function() {
						$scope.$apply(updateStatus);
					}, 10000);

					updateStatus();

					var getColor = function(num) {
						if (num <= 50 && num > 0) {
							return "#3ebf6c";
						} else if (num > 50 && num <= 100) {
							return "#d7af0c";
						} else if (num > 100 && num <= 150) {
							return "#dd0000";
						} else {
							return "#6d6d6d";
						}
					};

				})
		.controller(
				'RemoteCtrl',
				function($scope, $http) {
					var webSocket = null;
					var tryTime = 0;

					var init = function() {
						initSocket();
						window.onbeforeunload = function() {
							//??????????
						};
					};
					function initSocket() {
						var nodeId = "messages";
						if (!window.WebSocket) {
							alert("browser doesn't support");
							return false;
						}

						webSocket = new WebSocket(
								"wss://controller-websocket-server-test.run.aws-usw02-pr.ice.predix.io/tvCtrl/user");
						//https://controller-websocket-server-test.run.aws-usw02-pr.ice.predix.io/tvCtrl/user
						webSocket.onmessage = function(msg) {
							console.log(msg);
						};

						// ??
						webSocket.onerror = function(event) {
							console.log(event);
						};

						// ????
						webSocket.onopen = function(event) {
							console.log(event);
						};
						// ????
						webSocket.onclose = function() {
							// ??10?,??????10?
							if (tryTime < 10) {
								setTimeout(function() {
									webSocket = null;
									tryTime++;
									initSocket();
								}, 500);
							} else {
								tryTime = 0;
							}
						};
					};
					$scope.sendMeg=function(msg) {
						msg='pi1#'+msg;
						webSocket.send(msg);
					};
					
					init();
				})