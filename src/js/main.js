$(document).ready(function(){

    var startLang;
    var lang;

    startLang = localStorage.getItem("languagePref");
    lang = JSON.parse(localStorage.getItem("language"));

    //Login ### Setando uma novaLinguagem via Select de Linguagem.----------------
    $('#seletorLinguagem').on('change', function () {
        localStorage.setItem("languagePref", $('#seletorLinguagem').val());
        startLang = $('#seletorLinguagem').val();
    })

   //Executando izitoas IZITOAST
    function ErroLogar() {
        iziToast.warning({
            title: lang[startLang].Erros.lgErro,
            message: lang[startLang].Erros.lgLoginVazio,
            backgroundColor: "#e83243",
            theme: "dark"
        });
    }

    //Evento Teste no botão logar.
    $('[data-language="lgBtnEntrar"]').on('click', function(){
        ErroLogar();
    });

});
