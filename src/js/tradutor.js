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
                verificarLinguaPreferencia();
                verificarLingua();
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
        //Geral #####################################################################################
        $('[data-linguagem="lgSair"]').text(tradutor.lgSair);

        //Tela de Login #############################################################################
        $('[data-linguagem="lgUsuario"]').text(tradutor.lgUsuario + ':');
        $('[data-linguagem="lgSenha"]').text(tradutor.lgSenha + ':');
        $('[data-linguagem="lgLangPortugues"]').text(tradutor.lgLangPortugues);
        $('[data-linguagem="lgLangIngles"]').text(tradutor.lgLangIngles);
        $('[data-linguagem="lgPlaceUsuario"]').prop('placeholder', tradutor.lgPlaceUsuario);
        $('[data-linguagem="lgPlaceSenha"]').prop('placeholder', tradutor.lgPlaceSenha);
        $('[data-linguagem="lgBtnEntrar"]').text(tradutor.lgBtnEntrar);
        $('[data-linguagem="lgIdioma"]').text(tradutor.lgIdioma + ':');

        //Tela de Administração #####################################################################
        $('[data-linguagem="lgTituloAcompanhamento"]').text(tradutor.administracao.lgTituloAcompanhamento);
        $('[data-linguagem="lgTituloUsuarios"]').text(tradutor.administracao.lgTituloUsuarios);
        $('[data-linguagem="lgGerenciamentoUsuarios"]').text(tradutor.administracao.lgGerenciamentoUsuarios);

         //Tela de Usuários #########################################################################
         $('[data-linguagem="lgAdicionar"]').text(tradutor.lgAdicionar);
         $('[data-linguagem="lgAtualizar"]').text(tradutor.lgAtualizar);
         $('[data-linguagem="lgLimpar"]').text(tradutor.lgLimpar);
         $('[data-linguagem="lgControleUsuarios"]').text(tradutor.Usuarios.lgControleUsuarios);
         $('[data-linguagem="lgNome"]').prop('placeholder',tradutor.Usuarios.lgNome);
         $('[data-linguagem="lgMatricula"').prop('placeholder',tradutor.Usuarios.lgMatricula);
         $('[data-linguagem="lgLogin"').prop('placeholder',tradutor.Usuarios.lgLogin);
         $('[data-linguagem="lgSenhaUsuario"').prop('placeholder',tradutor.Usuarios.lgSenhaUsuario);
         $('[data-linguagem="lgConfSenhaUsuario"').prop('placeholder',tradutor.Usuarios.lgConfSenhaUsuario);
         $('[data-linguagem="lgAcesso"]').text(tradutor.Usuarios.lgAcesso);
         $('[data-linguagem="lgAcessoFunc"]').text(tradutor.Usuarios.lgAcessoFunc);
         $('[data-linguagem="lgAcessoSuper"]').text(tradutor.Usuarios.lgAcessoSuper);
         $('[data-linguagem="lgAcessoAdmin"]').text(tradutor.Usuarios.lgAcessoAdmin);
         $('[data-linguagem="lgAtividade"]').text(tradutor.Usuarios.lgAtividade);
         $('[data-linguagem="lgAtividadeAtivo"]').text(tradutor.Usuarios.lgAtividadeAtivo);
         $('[data-linguagem="lgAtividadeInativo"]').text(tradutor.Usuarios.lgAtividadeInativo);
    }
});
