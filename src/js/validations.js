//Pegando a linguagem do localStorage.
var startLang;
var lang;

//Pegando o Objeto completo de Tradução.
lang = JSON.parse(localStorage.getItem("language"));

//Setando na variável a minha linguagem favorita.
function pegandoLinguagem(){
    startLang = localStorage.getItem("languagePref");
}

//Validações ###############################################################

function verificarEmail(email){
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(regex.test(email.val())){
        return true;
    }else{
        return false;
    }
}


//Validar se o campo é nulo ou vazio.
function validarNullVazio(campo, erro){
    pegandoLinguagem();

    if(campo.val() =='' || campo.val() == null){
        iziToast.error({
            title: lang[startLang].Erros.lgErro,
            message: lang[startLang].Erros[erro],
            theme:'dark',
            backgroundColor: '#dc3545',
        });
        if(campo[0].localName == "select"){
            campo.parent().addClass('is-danger');
        }else{
            campo.addClass('is-danger');
        }
        campo.focus();

        return false;
    }else{

        return true;
    }
}


//Validar se as senhas coicidem.
function validarSenhas(senha, confirmacao, erro)
{
    pegandoLinguagem();

    if(senha.val() != confirmacao.val()){
        iziToast.error({
            title: lang[startLang].Erros.lgErro,
            message: lang[startLang].Erros[erro],
            theme:'dark',
            backgroundColor: '#dc3545',
        });

            senha.addClass('is-danger');
            confirmacao.addClass('is-danger');
            senha.focus();

        return false;
    }else{

        return true;
    }
}

