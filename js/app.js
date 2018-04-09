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
   };

   $('#fnome').on('change', function () {
        pesquisa : pesquisa();
   });

    $('#ffone').on('change', function () {
        pesquisa : pesquisa();
    });

    $('#fempresa').on('change', function () {
        pesquisa : pesquisa();
    });

    $('#fsetor').on('change', function () {
        pesquisa : pesquisa();
    });

    $('#femail').on('change', function () {
        pesquisa : pesquisa();
    });

    $('#fcargo').on('change', function () {
        pesquisa : pesquisa();
    });

   function pesquisa() {
       var nome    = $('#fnome').val();
       var fone    = $('#ffone').val();
       var empresa = $('#fempresa').val();
       var setor   = $('#fsetor').val();
       var email   = $('#femail').val();
       var cargo   = $('#fcargo').val();
       var param   = { 'nome': nome, 'telefone' : fone, 'empresa' : empresa, 'email' : empresa, 'setor' : setor, 'email' : email, 'cargo' : cargo };
       $http({
           method : 'POST',
           url    :  'http://localhost/controle/api/pessoa',
           params : param
       }).then(function (response) {
           $scope.users = response.data;

       });
   }

   $('.btn-pesq').on('click', function () {
      pesquisa : pesquisarNome();
   });

    function pesquisarNome() {
        var nome = $('#pnome').val();
        if( nome == "" ){
            nome = '%';
        }
        var parametros = { "nome" : nome };
        $http({
            method : 'POST',
            url    :  'http://localhost/controle/api/pessoa/nome',
            params : parametros
        }).then(function (response) {
            $scope.users = response.data;

        });
    }


});