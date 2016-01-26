'use strict';

/* Controllers */

var agendaAppController = angular.module('agendaAppController', []);


agendaAppController.controller('ListCtrl', function($scope){

    /*** code ***/
    if(window.localStorage.getItem("contacts")){

        $scope.contacts = angular.fromJson(localStorage.getItem('contacts'));
        console.log(localStorage.getItem('contacts'));

    }else{
        $scope.contacts = [];
        localStorage.setItem('contacts', '');
    }




});

agendaAppController.controller('NewCtrl', function($scope){

    // $scope.name = "";
    // $scope.email = "";
    // $scope.phone = "";

    /*** code ***/

    if(window.localStorage.getItem("contacts")){

        $scope.contacts = angular.fromJson(localStorage.getItem('contacts'));

    }else{
        $scope.contacts = [];
        localStorage.setItem('contacts', '');
    }

    // $scope.contacts = [
    //     { id: 1, name: 'Allan Benjamin', email: 'allan@gmail.com', phone: '557188339933'},
    //     { id: 2, name: 'Georgia Smith', email: 'georgia@gmail.com', phone: '557188339933'},
    //     { id: 3, name: 'Gregory Levinsky', email: 'gregory@gmail.com', phone: '557188339933'},
    //     { id: 4, name: 'Jackeline Macfly', email: 'jackeline@gmail.com', phone: '557188339933'},
    //     { id: 5, name: 'Joseph Climber', email: 'joseph@gmail.com', phone: '557188339933'},
    //     { id: 6, name: 'Joshua Jackson', email: 'joshua@gmail.com', phone: '557188339933'}
    // ];


    $scope.addItem = function(){

        var newContact = {
                id : $scope.contacts.length + 1,
                name : $scope.nome,
                email : $scope.email,
                phone : $scope.phone
        };

        $scope.contacts.push(newContact);
        localStorage.setItem('contacts', ''+JSON.stringify($scope.contacts));

        console.log(JSON.stringify($scope.contacts));

    }



});