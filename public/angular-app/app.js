/*global angular StocksController*/
angular.module('meannasdaq', ['ngRoute'])
.config(config);

function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'angular-app/stock-list/stocks.html',
            controller : StocksController,
            controllerAs:'vm'
        });
}