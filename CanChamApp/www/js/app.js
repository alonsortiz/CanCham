// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    if(localStorage['stored'])
    {
      alert(localStorage.getItem('stored'));
      $rootScope.isLogged = JSON.parse(localStorage.getItem('stored'));
      //$rootScope.isLogged = false;
    }

    if(localStorage['storedGg'])
    {
      //alert(localStorage.getItem('storedGg'));
      $rootScope.isLoggedGg = JSON.parse(localStorage.getItem('storedGg'));
      //$rootScope.isLogged = false;
    }

    if(localStorage['storedFb'])
    {
      //alert(localStorage.getItem('storedGg'));
      $rootScope.isLoggedFb = JSON.parse(localStorage.getItem('storedFb'));
      //$rootScope.isLogged = false;
    }

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
    //cache: false,
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'LogCtrl'
  })

  .state('app.home', {
    url: '/inicio',
    views: {
      'menuContent': {
        templateUrl: 'templates/inicio.html'
      }
    }
  })

  .state('app.homeFb', {
    url: '/inicio-loginFb',
    views: {
      'menuContent': {
        templateUrl: 'templates/inicio_loginFb.html'
      }
    }
  })

  .state('app.homeGg', {
    url: '/inicio-loginGg',
    views: {
      'menuContent': {
        templateUrl: 'templates/inicio_loginGg.html'
      }
    }
  })

  .state('app.calendario', {
      url: '/calendario',
      views: {
        'menuContent': {
          templateUrl: 'templates/calendario.html',
          controller: 'EventosCtrl'
        }
      }
    })

  .state('app.afiliate', {
    url: '/afiliate',
    views: {
      'menuContent': {
        templateUrl: 'templates/afiliate.html'
      }
    }
  })

  .state('app.preguntas', {
      url: '/preguntas',
      views: {
         'menuContent': {
          templateUrl: 'templates/preguntas.html',
          controller: 'PreguntasCtrl'
          }
      }
  })

  .state('app.login', {
    //cache: false,
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'LogCtrl'
      }
    }
  })

  .state('app.loginmail', {
      url: '/login-mail',
      views: {
        'menuContent': {
          templateUrl: 'templates/loginMail.html',
          controller: 'LogCtrl'
        }
      }
  })

  .state('app.logoutFb', {
      url: '/logoutFb',
      views: {
        'menuContent': {
          templateUrl: 'templates/logoutFb.html',
          //controller: 'LogCtrl'
        }
      }
  })

  .state('app.logoutGg', {
      url: '/logoutGg',
      views: {
        'menuContent': {
          templateUrl: 'templates/logoutGg.html',
          //controller: 'LogCtrl'
        }
      }
  })

  .state('app.repositorio', {
      url: '/repositorio',
      views: {
        'menuContent': {
         templateUrl: 'templates/repositorio.html',
         controller: 'RepositorioCtrl'
         }
      }
  })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/afiliate.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.docs', {
    url: '/docs',
    views: {
      'menuContent': {
        templateUrl: 'templates/docs.html'
        //controller: 'AppCtrl'
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/inicio');
});
