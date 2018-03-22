/*global angular StocksController StockController*/
angular.module('meannasdaq', ['ngRoute'])
.config(config);

function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'angular-app/stock-list/stocks.html',
            controller : StocksController,
            controllerAs:'vm'
        })
        .when('/stock/:id', {
            templateUrl : 'angular-app/stock-display/stock.html',
            controller : StockController,
            controllerAs:'vm'
        });
}