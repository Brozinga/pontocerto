$(document).ready(() => {

    let startLang;
    let lang;

    //Pegar o arquivo de Tradutor.
    function PegarTraducao() {
        $.getJSON("js/tradutor.json", {
                format: "jspn"
            })
            .done(function (data) {

                //Gravando a Tradução localmente para aumentar a performance.
                localStorage.removeItem("language");
                localStorage.setItem("language", JSON.stringify(data));
                lang = data;
            })
            .fail(function () {
                console.log("error");
            });
    }

    PegarTraducao();

    //Começando a traduzir o arquivo ###############################################

    //Função para verificar a linguagem preferida.
    function verifyLangPref() {
        if (localStorage.getItem("languagePref") == null) {
            localStorage.setItem("languagePref", $('.lang').val());
        } else {
            startLang = localStorage.getItem("languagePref");
        }
    }

    //Função para verificar se existe linguagem no localStorage.
    function verifyLanguage() {
        if (localStorage.getItem("language") == null) {
            PegarTraducao();
        } else {
            lang = JSON.parse(localStorage.getItem("language"));
        }
    }

    //Executando pra verificar se já está setado uma linguagem preferida e setar no sistema.
    verifyLangPref();
    verifyLanguage();
    mudarTraducao(startLang);

    //Setando uma novaLinguagem via Select de Linguagem.
    $('.lang').on('change', function () {

        localStorage.setItem("languagePref", $('.lang').val());
        startLang = $('.lang').val();

        mudarTraducao(startLang);

    })


    function mudarTraducao(data) {
        //Tranformando a linguagem baseado no valor recebido
        if (data == 'ptBR') {
            traduzir(lang.ptBR);
        } else if(data == 'enUS') {
            traduzir(lang.enUS);
        }

        $('.lang').val(startLang);
    }


    //Função para Traduzir
    function traduzir(tradutor) {
        $('[data-language="lgUsuario"]').text(tradutor.lgUsuario + ':');
        $('[data-language="lgSenha"]').text(tradutor.lgSenha + ':');
        $('[data-language="lgLangPortugues"]').text(tradutor.lgLangPortugues);
        $('[data-language="lgLangIngles"]').text(tradutor.lgLangIngles);
        $('[data-language="lgPlaceUsuario"]').prop('placeholder', tradutor.lgPlaceUsuario);
        $('[data-language="lgPlaceSenha"]').prop('placeholder', tradutor.lgPlaceSenha);
        $('[data-language="lgBtnEntrar"]').text(tradutor.lgBtnEntrar);
        $('[data-language="lgIdioma"]').text(tradutor.lgIdioma + ':');
    }
});
