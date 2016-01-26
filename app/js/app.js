'use strict';

/* App */

var myApp = angular.module('agendaApp', [
    'ngRoute',
    'agendaAppController'
    ]);



myApp.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
        when('/lista', {
            templateUrl: 'partials/list.html',
            controller: 'ListCtrl'
        }).
        when('/adicionar', {
            templateUrl: 'partials/new.html',
            controller: 'NewCtrl'
        }).
        otherwise({
            redirectTo: '/lista'
        });
    }
    ]);
