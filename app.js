/**
 * Created by YERLAN on 04.03.2016.
 */

// create the module and include ngRoute for all routing needs
var cinemaApp = angular.module('cinemaApp', ['ngRoute']);

// configure routes
cinemaApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });
});

// create the controller and inject Angular's $scope
cinemaApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

cinemaApp.controller('aboutController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

cinemaApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
