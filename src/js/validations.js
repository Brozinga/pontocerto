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

function validarLogin(login, senha){
    pegandoLinguagem();

    if(login.val() =='' || login.val() == null){
        iziToast.error({
            title: lang[startLang].Erros.lgErro,
            message: lang[startLang].Erros.lgLoginVazio,
            theme:'dark',
            backgroundColor: '#dc3545',
        });

        login.addClass('is-danger');
        login.focus();

        return false;
    }else if(senha.val() == '' || senha.val() == null){
        iziToast.error({
            title: lang[startLang].Erros.lgErro,
            message: lang[startLang].Erros.lgSenhaVazio,
            theme:'dark',
            backgroundColor: '#dc3545',
        });

        senha.addClass('is-danger');
        senha.focus();

        return false;
    }else{
        return true;
    }
}

