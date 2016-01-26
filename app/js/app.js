'use strict';

/* App */

var myApp = angular.module('myApp', [
    'ngRoute',
    'myAppControllers'
    ]);



myApp.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
        when('/helloWorld', {
            templateUrl: 'partials/helloWorld.html',
            controller: 'HelloCtrl'
        }).
        otherwise({
            redirectTo: '/helloWorld'
        });
    }
    ]);
