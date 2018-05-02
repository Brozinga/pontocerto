$(document).ready(function () {

    //Importando arquivo de Validação.
    $.getScript("js/validations.js");

    //Limpando a classe de validação dos Inputs.
    $('#frmLoginUsuario').keypress(function () {
        $('#frmLoginUsuario').removeClass('is-danger');
    });
    $('#frmLoginSenha').keypress(function () {
        $('#frmLoginSenha').removeClass('is-danger');
    });

    //Validando antes do submit do Form.
    $('#frmLogin').submit(function () {
        event.preventDefault();
        if (validarLogin($("#frmLoginUsuario"), $('#frmLoginSenha'))) {
            window.location.href = "administracao.html";
        };

    });
});
