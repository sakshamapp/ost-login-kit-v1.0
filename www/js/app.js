// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers' , 'starter.services'])

.run(function($ionicPlatform , $rootScope, $timeout) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

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
    url: '/app',
    abstract: true,
    cache: false,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

//--------------------------------------

 .state('app.login', {
    url: '/login',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-signin.html',
        controller: 'AppCtrl'
      }
    },
	//authStatus: false
  })
 .state('app.signup', {
    url: '/signup',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-signup.html',
        controller: 'AppCtrl'
      }
   },
	//authStatus: false
  })
//--------------------------------------


  .state('app.dashboard', {
    url: '/dashboard',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/dashboard.html',
		controller: 'DashCtrl'
      }
     },
	 //authStatus: true
  })


    .state('app.profiles', {
      url: '/profiles',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/profiles.html',
          controller: 'ProfileCtrl'
        }
      }
    })
    .state('app.transation', {
      url: '/transation',
      cache: false,
      views: {
        'menuContent': {
          templateUrl: 'templates/transation-report.html',
          controller: 'TransationCtrl'
        }
      }
    })

  .state('app.profile', {
    url: '/profile/:profileId',
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/profile-detail.html',
        controller: 'ProfileCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
