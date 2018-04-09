
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