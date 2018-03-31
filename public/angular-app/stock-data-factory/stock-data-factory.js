/*global angular*/
angular.module('meannasdaq').factory('stockDataFactory', stockDataFactory);

function stockDataFactory($http) {
    return {
        stockList : stockList,
        stockDisplay : stockDisplay,
        stocksGetSymbol : stocksGetSymbol,
        postSymbol : postSymbol
    };
    
    function stockList() {
        return $http.get('/api/stocks').then(complete).catch(failed);
    }
    
    function stockDisplay(id) {
        return $http.get('/api/stocks/' + id).then(complete).catch(failed);    
    }
    
    function stocksGetSymbol(symbol){
        return $http.get('api/search/' + symbol).then(complete).catch(failed);
    }
    
    function postSymbol(symbol){
        return $http.post('/search/', symbol).then(complete).catch(failed);
    }
    
    function complete(response) {
        return response;
    }
    
    function failed(error) {
        console.log(error.statusText);
    }
}