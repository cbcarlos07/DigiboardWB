var pessoas = angular.module("pessoas", []);
pessoas.controller("pessoasCtrl", function ( $scope, $http ) {
   console.log( "In my appcontroller" );

   $scope.newUser = {};
   $scope.clickedUser = {};
   $scope.message = "";
   var parametros = { "nome" : '%' };
   $http({
       method : 'POST',
       url    :  'http://localhost/controle/api/pessoa/nome',
       params : parametros
      }).then(function (response) {
          $scope.users = response.data;
   });

   $http({
       method : 'POST',
       url    :  'http://localhost/controle/api/empresa',
       dataType : 'json'
   }).then(function (value) {
      $scope.empresas = value.data;

      var option = "";
      $.each( value.data, function (i, j) {
          option += "<option value='"+j.cd_empresa+"'>"+j.nm_empresa+"</option>";
      } );

      var combo = $('#empresa');
      combo.find( 'option' ).remove();
      combo.append( option );
    //  console.log( value.data );
   });

    $http({
        method : 'POST',
        url    :  'http://localhost/controle/api/empresa',
        dataType : 'json'
    }).then(function (value) {
        $scope.empresas = value.data;

        var option = "";
        $.each( value.data, function (i, j) {
            option += "<option value='"+j.cd_empresa+"'>"+j.nm_empresa+"</option>";
        } );

        var combo = $('#empresas');
        combo.find( 'option' ).remove();
        combo.append( option );
        //  console.log( value.data );
    });

    $http({
        method : 'POST',
        url    :  'http://localhost/controle/api/setor',
        dataType : 'json'
    }).then(function (value) {
        $scope.setor = value.data;

        var option = "";
        $.each( value.data, function (i, j) {
            option += "<option value='"+j.cd_setor+"'>"+j.nm_setor+"</option>";
        } );

        var combo = $('#setor');
        combo.find( 'option' ).remove();
        combo.append( option );
    //    console.log( value.data );
    });

    $http({
        method : 'POST',
        url    :  'http://localhost/controle/api/setor',
        dataType : 'json'
    }).then(function (value) {
        $scope.setor = value.data;

        var option = "";
        $.each( value.data, function (i, j) {
            option += "<option value='"+j.cd_setor+"'>"+j.nm_setor+"</option>";
        } );

        var combo = $('#setors');
        combo.find( 'option' ).remove();
        combo.append( option );
       console.log( value.data );
    });

    $http({
        method : 'POST',
        url    :  'http://localhost/controle/api/cargo',
        dataType : 'json'
    }).then(function (value) {
        $scope.setor = value.data;

        var option = "";
        $.each( value.data, function (i, j) {
            option += "<option value='"+j.cd_cargo+"'>"+j.ds_cargo+"</option>";
        } );

        var combo = $('#cargo');
        combo.find( 'option' ).remove();
        combo.append( option );
      //  console.log( value.data );
    });

    $http({
        method : 'POST',
        url    :  'http://localhost/controle/api/cargo',
        dataType : 'json'
    }).then(function (value) {
        $scope.setor = value.data;

        var option = "";
        $.each( value.data, function (i, j) {
            option += "<option value='"+j.cd_cargo+"'>"+j.ds_cargo+"</option>";
        } );

        var combo = $('#cargos');
        combo.find( 'option' ).remove();
        combo.append( option );
      //  console.log( value.data );
    });

 /*  $scope.users = [
       { "id": "1", "nome" : "Gysa", "telefone" : "333333", "empresa" : "Casa", "setor" : "Quarto", "email" : "s@gmail.com", "cargo" : "Dona"},
       { "id": "2", "nome" : "Gysa", "telefone" : "333333", "empresa" : "Casa", "setor" : "Quarto", "email" : "s@gmail.com", "cargo" : "Dona"},
       { "id": "3", "nome" : "Gysa", "telefone" : "333333", "empresa" : "Casa", "setor" : "Quarto", "email" : "s@gmail.com", "cargo" : "Dona"},
       { "id": "4", "nome" : "Gysa", "telefone" : "333333", "empresa" : "Casa", "setor" : "Quarto", "email" : "s@gmail.com", "cargo" : "Dona"},
   ];
*/
   $scope.saveUser = function (  ) {

       $scope.users.push( $scope.newUser );
       $scope.newUser = {};
       $scope.message = "New user added succefullt";

   };

   $scope.selectUser = function ( user ) {
       console.log( user );
       $scope.clickedUser = user;
   };
   
   $scope.updateUser = function () {
       $scope.message = "New user updated succefullt";
   };
   
   $scope.deleteUser = function ( user ) {



       $.ajax({
           url : 'http://localhost/controle/api/pessoa/delete',
           type : 'post',
           dataType: 'json',
           data : {
               codigo : user
           },
           success : function (data) {
               console.log( data );
           }
       });

       $scope.users.splice( $scope.users.indexOf($scope.clickedUser), 1 );
        $scope.message = "User deleted succefullt";
   };

   $scope.clearMessage = function () {
       $scope.message = "";
   }
});