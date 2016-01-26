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

    $scope.removeItem = function(index){
        $scope.contacts.splice(index, 1);
        localStorage.setItem('contacts', ''+JSON.stringify($scope.contacts));

        console.log(JSON.stringify($scope.contacts));
    }




});

agendaAppController.controller('NewCtrl', function($scope){

    $scope.nome = "";
    $scope.email = "";
    $scope.phone = "";

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

agendaAppController.controller('EditCtrl', function($scope, $routeParams, $location){

    $scope.editContact = "";

    if(window.localStorage.getItem("contacts")){

        $scope.contacts = angular.fromJson(localStorage.getItem('contacts'));
        console.log(localStorage.getItem('contacts'));

    }else{
        $scope.contacts = [];
        localStorage.setItem('contacts', '');
    }

    $scope.editContact = $scope.contacts[$routeParams.contactId-1];

    console.log($scope.editContact);

    $scope.saveItem = function(){

        var editedContact = {
            id : $routeParams.contactId,
            name : $scope.editContact.name,
            email : $scope.editContact.email,
            phone : $scope.editContact.phone
        };

        $scope.contacts[$routeParams.contactId-1] = editedContact;
        localStorage.setItem('contacts', ''+JSON.stringify($scope.contacts));

        console.log(editedContact);

        $location.path( "/lista" );
    }



});