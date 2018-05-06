$(document).ready(function () {

    //Executando o menu responsivo.
    var clickResponsivo = false;

    $('.burger').click(function () {
        if (!clickResponsivo) {
            $(this).addClass('is-active');
            $('.navbar-menu').addClass('is-active');
            $('.exitInfo').show();
            clickResponsivo = !clickResponsivo;
        } else {
            $('.navbar-menu').removeClass('is-active');
            $(this).removeClass('is-active');
            $('.exitInfo').hide();
            clickResponsivo = !clickResponsivo;
        }
    });

    // Habilitando Efeito de Accordion
    $('.collapsible-head').click(function () {
        var collapsible = $(this).parent('.collapsible').children('.collapsible-body');
        if (collapsible.css('display') == 'none') {
            collapsible.slideDown();
            $(this).children('.card-header-icon').children('.icon').fadeOut("slow", function(){
                $(this).html('<i class="fas fa-angle-up"></i>').fadeIn();
            });
        } else {
            collapsible.slideUp();
            $(this).children('.card-header-icon').children('.icon').fadeOut("slow", function(){
                $(this).html('<i class="fas fa-angle-down"></i>').fadeIn();
            });
        }
    });
});
