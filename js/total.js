var total = angular.module("total", []);
total.controller( 'totalCtrl', function ( $scope, $http ) {
    $http({
        method : 'POST',
        url    :  'http://localhost/controle/api/pessoa/total',

    }).then(function (response) {
        $scope.cargos = response.data;
        console.log( response.data )

    });
} );