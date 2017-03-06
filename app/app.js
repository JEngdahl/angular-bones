angular.module('<NameHere>', [
	'<NameHere>.scopeControl',
	'<NameHere>.httpModule',
  	'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/homePage.html',
      controller: 'storyController'
    });
});
