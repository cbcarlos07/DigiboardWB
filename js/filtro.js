
$( document ).ready( function () {
    preencherComboFNome();
    preencherComboFTelefone();
    preencherComboEmpresa();
    preencherComboSetor();
    preencherComboEmail();
    preencherComboCargo();
} );


function preencherComboFNome(){
    var fnome = $('#fnome');
    $.ajax({
        url  : 'http://localhost/controle/api/pessoa/nome',
        type : 'post',
        dataType : 'json',
        success : function (data) {
            var option = "<option value='%'></option>";
            $.each( data, function (i, j) {
                option += "<option value='"+j.nm_pessoa+"'>"+j.nm_pessoa+"</option>";
            } );

            fnome.find( 'option' ).remove();
            fnome.append( option );
            fnome.trigger( "chosen:updated" )

            fnome.chosen({
                allow_single_deselect : true
            });


        }
    });
}


function preencherComboFTelefone(){
    var fobj = $('#ffone');
    $.ajax({
        url  : 'http://localhost/controle/api/pessoa/fone',
        type : 'post',
        dataType : 'json',
        success : function (data) {
            var option = "<option value='%'></option>";
            $.each( data, function (i, j) {
                option += "<option value='"+j.telefone+"'>"+j.telefone+"</option>";
            } );

            fobj.find( 'option' ).remove();
            fobj.append( option );
            fobj.trigger( "chosen:updated" )
            fobj.chosen({
                allow_single_deselect : true
            });

        }
    });
}



function preencherComboEmpresa(){
    var fobj = $('#fempresa');
    $.ajax({
        url  : 'http://localhost/controle/api/empresa',
        type : 'post',
        dataType : 'json',
        success : function (data) {
            var option = "<option value='%'></option>";
            $.each( data, function (i, j) {
                option += "<option value='"+j.cd_empresa+"'>"+j.nm_empresa+"</option>";
            } );

            fobj.find( 'option' ).remove();
            fobj.append( option );
            fobj.trigger( "chosen:updated" )
            fobj.chosen({
                allow_single_deselect : true
            });

        }
    });
}


function preencherComboSetor(){
    var fobj = $('#fsetor');
    $.ajax({
        url  : 'http://localhost/controle/api/setor',
        type : 'post',
        dataType : 'json',
        success : function (data) {
            var option = "<option value='%'></option>";
            $.each( data, function (i, j) {
                option += "<option value='"+j.cd_setor+"'>"+j.nm_setor+"</option>";
            } );

            fobj.find( 'option' ).remove();
            fobj.append( option );
            fobj.trigger( "chosen:updated" )
            fobj.chosen({
                allow_single_deselect : true
            });

        }
    });
}



function preencherComboEmail(){
    var fobj = $('#femail');
    $.ajax({
        url  : 'http://localhost/controle/api/pessoa/mail',
        type : 'post',
        dataType : 'json',
        success : function (data) {
            var option = "<option value='%'></option>";
            $.each( data, function (i, j) {
                option += "<option value='"+j.email+"'>"+j.email+"</option>";
            } );

            fobj.find( 'option' ).remove();
            fobj.append( option );
            fobj.trigger( "chosen:updated" );
            fobj.chosen({
                allow_single_deselect : true
            });

        }
    });
}


function preencherComboCargo(){
    var fobj = $('#fcargo');
    $.ajax({
        url  : 'http://localhost/controle/api/cargo',
        type : 'post',
        dataType : 'json',
        success : function (data) {
            var option = "<option value='%'></option>";
            $.each( data, function (i, j) {
                option += "<option value='"+j.cd_cargo+"'>"+j.ds_cargo+"</option>";
            } );

            fobj.find( 'option' ).remove();
            fobj.append( option );
            fobj.trigger( "chosen:updated" );
            fobj.chosen({
                allow_single_deselect : true
            });

        }
    });
}

function validarCampo() {

    var nome = $('#nome');
    var fone = $('#telefone');
    var empresa = $('#empresa');
    var setor   = $('#setor');
    var email   = $('#email');
    var cargo   = $('#cargo');
    var retorno = true;
    if( (nome.val( ) == "" ) || ( fone.val() == "" ) || ( empresa.val() == "%" ) ||
        (setor.val() == "%") || ( email.val() == "" ) || (cargo.val() == "%")
    ){
        retorno = false;
        if(nome.val( ) == "" ){
            nome.css( 'border-color', 'red' );
        }

        if(fone.val( ) == "" ){
            fone.css( 'border-color', 'red' );
        }
        if(empresa.val( ) == "%" ){
            empresa.css( 'border-color', 'red' );
        }
        if(setor.val( ) == "%" ){
            setor.css( 'border-color', 'red' );
        }
        if(email.val( ) == "" ){
            email.css( 'border-color', 'red' );
        }
        if(cargo.val( ) == "%" ){
            cargo.css( 'border-color', 'red' );
        }
    }

    return retorno;

}


function validarCampo() {

    var nome = $('#nome');
    var fone = $('#telefone');
    var empresa = $('#empresa');
    var setor   = $('#setor');
    var email   = $('#email');
    var cargo   = $('#cargo');
    var retorno = true;
    if( (nome.val( ) == "" ) || ( fone.val() == "" ) || ( empresa.val() == "%" ) ||
        (setor.val() == "%") || ( email.val() == "" ) || (cargo.val() == "%")
    ){
        retorno = false;
        if(nome.val( ) == "" ){
            nome.css( 'border-color', 'red' );
        }

        if(fone.val( ) == "" ){
            fone.css( 'border-color', 'red' );
        }
        if(empresa.val( ) == "%" ){
            empresa.css( 'border-color', 'red' );
        }
        if(setor.val( ) == "%" ){
            setor.css( 'border-color', 'red' );
        }
        if(email.val( ) == "" ){
            email.css( 'border-color', 'red' );
        }
        if(cargo.val( ) == "%" ){
            cargo.css( 'border-color', 'red' );
        }
    }

    return retorno;

}


function validarCampos() {

    var nome = $('#name');
    var fone = $('#phone');
    var empresa = $('#empresas');
    var setor   = $('#setors');
    var email   = $('#mail');
    var cargo   = $('#cargos');
    var retorno = true;
    if( (nome.val( ) == "" ) || ( fone.val() == "" ) || ( empresa.val() == "%" ) ||
        (setor.val() == "%") || ( email.val() == "" ) || (cargo.val() == "%")
    ){
        retorno = false;
        if(nome.val( ) == "" ){
            nome.css( 'border-color', 'red' );
        }

        if(fone.val( ) == "" ){
            fone.css( 'border-color', 'red' );
        }
        if(empresa.val( ) == "%" ){
            empresa.css( 'border-color', 'red' );
        }
        if(setor.val( ) == "%" ){
            setor.css( 'border-color', 'red' );
        }
        if(email.val( ) == "" ){
            email.css( 'border-color', 'red' );
        }
        if(cargo.val( ) == "%" ){
            cargo.css( 'border-color', 'red' );
        }
    }

    return retorno;

}