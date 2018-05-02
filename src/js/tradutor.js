$(document).ready(() => {

    let startLang;
    let lang;

    //Pegar o arquivo de Tradutor.
    function PegarTraducao() {
        $.getJSON("js/tradutor.json", {
                format: "json"
            })
            .done(function (data) {

                //Gravando a Tradução localmente para aumentar a performance.
                localStorage.removeItem("language");
                localStorage.setItem("language", JSON.stringify(data));
                lang = data;

                //Executando pra verificar se já está setado uma linguagem preferida e setar no sistema.
                verificarLinguaPreferencia();
                verificarLingua();
                mudarTraducao(startLang);
            })
            .fail(function () {
                console.log("error");
            });
    }

    PegarTraducao();

    //Começando a traduzir o arquivo ###############################################

    //Função para verificar a linguagem preferida.
    function verificarLinguaPreferencia() {
        if (localStorage.getItem("languagePref") == null) {
            localStorage.setItem("languagePref", $('#seletorLinguagem').val());
            startLang = localStorage.getItem("languagePref");
        } else {
            startLang = localStorage.getItem("languagePref");
        }
    }

    //Função para verificar se existe linguagem no localStorage.
    function verificarLingua() {
        if (localStorage.getItem("language") == null) {
            PegarTraducao();
        } else {
            lang = JSON.parse(localStorage.getItem("language"));
        }
    }

    //Setando uma novaLinguagem via Select de Linguagem.
    $('#seletorLinguagem').on('change', function () {

        localStorage.setItem("languagePref", $('#seletorLinguagem').val());
        startLang = $('#seletorLinguagem').val();

        mudarTraducao(startLang);

    })


    //Função que Executa a Mudança do Idioma.
    function mudarTraducao(data) {
        //Tranformando a linguagem baseado no valor recebido
          traduzir(lang[startLang]);
        $('#seletorLinguagem').val(startLang);
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
