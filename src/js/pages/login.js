$(document).ready(function () {

    //Importando arquivo de Validação.
    $.getScript("js/validations.js");

    //Limpando a classe de validação dos Inputs.
    $('#loginUsuario').keypress(function () {
        $('#loginUsuario').removeClass('is-danger');
    });
    $('#loginSenha').keypress(function () {
        $('#loginSenha').removeClass('is-danger');
    });

    //Validando antes do submit do Form.
    $('#login').submit(function () {
        event.preventDefault();
        if (validarNullVazio($("#loginUsuario"),'lgLoginVazio') && validarNullVazio($('#loginSenha'),'lgSenhaVazio')) {
            window.location.href = "administracao.html";
        };

    });
});
