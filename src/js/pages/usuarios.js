$(document).ready(function () {

    //Importando arquivo de Validação.
    $.getScript("js/validations.js");


    //Carregando DataTable framework onde haverá a edição dos Dados dos usuários.
    $.getScript('js/datatable/datatables.min.js', function () {

        //Carregando a tradução.
        var startLang;
        var lang;

        startLang = localStorage.getItem("languagePref");
        lang = JSON.parse(localStorage.getItem("language"));


        //Limpando os campos de Controle de Usuários.
        $('#usuarioLimpar').click(function () {
            limparTodosOsCampos();
            removerDangerTodos();
        });

        function limparTodosOsCampos(){
            $("#usuarioNome").val('');
            $("#usuarioMatricula").val('');
            $("#usuarioLogin").val('');
            $("#usuarioAcesso").val('');
            $("#usuarioAtividade").val('');
            $("#usuarioSenha").val('');
            $("#usuarioConfSenha").val('');
        }

        function removerDangerTodos(){
            removendoDangerSenha();
            removendoDangerConfSenha();
            removendoDangerNome();
            removendoDangerMatricula();
            removendoDangerLogin();
            removendoDangerAcesso();
            removendoDangerAtividade();
        }


        $('#usuarioAdicionar').click(function () {
            removerDangerTodos();

            //Validando os campos se são nulos ou vazios antes da Inserção.
           if(validarNullVazio($("#usuarioNome"), 'lgNomeVazio') &&
            validarNullVazio($("#usuarioMatricula"), 'lgMatriculaVazia') &&
            validarNullVazio($("#usuarioLogin"), 'lgLoginVazio') &&
            validarNullVazio($("#usuarioSenha"), 'lgSenhaVazio') &&
            validarNullVazio($("#usuarioConfSenha"), 'lgConfSenhaVazia') &&
            validarNullVazio($("#usuarioAcesso"), 'lgAcessoVazio') &&
            validarNullVazio($("#usuarioAtividade"), 'lgAtividadeVazio')){
                if(validarSenhas($("#usuarioSenha"), $("#usuarioConfSenha"),'lgConfirmacaoSenhaIncorreto')){
                    iziToast.success({
                        title: 'Adicionado',
                        message: 'Adicionado com sucesso!',
                        theme:'dark',
                        backgroundColor: '#28a745',
                    });

                    limparTodosOsCampos();
                }
            }
        });


        //Limpando a classe de validação dos Inputs.
        $('#usuarioNome').keypress(removendoDangerNome);

        function removendoDangerNome() {
            $('#usuarioNome').removeClass('is-danger');
        }

        $('#usuarioMatricula').keypress(removendoDangerMatricula);

        function removendoDangerMatricula() {
            $('#usuarioMatricula').removeClass('is-danger');
        }
        $('#usuarioLogin').keypress(removendoDangerLogin);

        function removendoDangerLogin() {
            $('#usuarioLogin').removeClass('is-danger');
        }

        $('#usuarioAcesso').change(removendoDangerAcesso);

        function removendoDangerAcesso() {
            $('#usuarioAcesso').parent().removeClass('is-danger');
        }

        $('#usuarioAtividade').change(removendoDangerAtividade);

        function removendoDangerAtividade() {
            $('#usuarioAtividade').parent().removeClass('is-danger');
        }
        $('#usuarioSenha').keypress(removendoDangerSenha);

        function removendoDangerSenha() {
            $('#usuarioSenha').removeClass('is-danger');
        }

        $('#usuarioConfSenha').keypress(removendoDangerConfSenha);

        function removendoDangerConfSenha() {
            $('#usuarioConfSenha').removeClass('is-danger');
        }


        //Dados que virão do BackEnd.
        var dataSet = [
            ["1", "Tiger Nixon", "A111", "tnixon", "3", "true"],
            ["2", "Garrett Winters", "A112", "gwinters", "2", "true"],
            ["3", "Ashton Cox", "A113", "acox", "3", "true"],
            ["4", "Ashton Cox", "A113", "acox", "3", "true"],
            ["5", "Ashton Cox", "A113", "acox", "3", "true"],
            ["6", "Ashton Cox", "A113", "acox", "3", "true"],
            ["7", "Ashton Cox", "A113", "acox", "3", "true"],
            ["8", "Ashton Cox", "A113", "acox", "3", "true"],
            ["9", "Ashton Cox", "A113", "acox", "3", "true"],
            ["10", "Ashton Cox", "A113", "acox", "3", "true"],
            ["11", "Ashton Cox", "A113", "acox", "3", "true"],
            ["12", "Ashton Cox", "A113", "acox", "3", "true"],
            ["13", "Ashton Cox", "A113", "acox", "3", "true"],
        ];


        //Montando a tabela de Dados.
        var table = $('#example').DataTable({
            data: dataSet,
            responsive: false,
            "language": lang[startLang].Usuarios.dataTable,
            "rowCallback": function (row, data, index) {

                //Setando a tradução de Nível de Acesso.
                if (data[4] == "3") {
                    $('td:eq(4)', row).html(lang[startLang].Usuarios.lgAcessoFunc);

                } else if (data[4] == "2") {
                    $('td:eq(4)', row).html(lang[startLang].Usuarios.lgAcessoSuper);

                } else if (data[4] == "1") {
                    $('td:eq(4)', row).html(lang[startLang].Usuarios.lgAcessoAdmin);

                };


                //Setando a tradução da Atividade.
                if (data[5] == "true") {
                    $('td:eq(5)', row).html(lang[startLang].Usuarios.lgAtividadeAtivo);

                } else if (data[5] == "false") {
                    $('td:eq(5)', row).html(lang[startLang].Usuarios.lgAtividadeInativo);

                }

                $('td:eq(0)', row).prop('hidden', true);
                $('#example thead tr').children('th:eq(0)').prop('hidden', true);
            },
            columns: [{
                    title: 'line'
                },
                {
                    title: lang[startLang].Usuarios.lgNome
                },
                {
                    title: lang[startLang].Usuarios.lgMatricula
                },
                {
                    title: lang[startLang].Usuarios.lgLogin
                },
                {
                    title: lang[startLang].Usuarios.lgAcesso
                },
                {
                    title: lang[startLang].Usuarios.lgAtividade
                },
            ]
        });


        //Carregando dados para Edição advindos do BackEnd.
        $('#example tbody').on('click', 'tr', function () {
            var dados = dataSet[$(this).children('td:eq(0)').text() - 1];

            var collapsible = $('.collapsible').children('.collapsible-body');
            if (collapsible.css('display') == 'none') {
                collapsible.slideDown();
                $('.collapsible').children('.card-header').children('.card-header-icon').children('.icon').fadeOut("slow", function(){
                    $(this).html('<i class="fas fa-angle-up"></i>').fadeIn();
                });
            }

            removendoDangerSenha();
            removendoDangerConfSenha();

            if (dados[1] != "") {
                removendoDangerNome();
            }
            if (dados[2] != "") {
                removendoDangerMatricula();
            }
            if (dados[3] != "") {
                removendoDangerLogin();
            }
            if (dados[4] != "") {
                removendoDangerAcesso();
            }
            if (dados[5] != "") {
                removendoDangerAtividade();
            }

            $("#usuarioNome").val(dados[1]);
            $("#usuarioMatricula").val(dados[2]);
            $("#usuarioLogin").val(dados[3]);
            $("#usuarioAcesso").val(dados[4]);
            $("#usuarioAtividade").val(dados[5]);
        });


        //Desabilitando o Loading e removendo efeito de Blur do Fundo.
        $('.loading').fadeOut();
        $('.container').removeClass('blur');
    });
});
