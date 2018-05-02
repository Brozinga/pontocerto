$(document).ready(function(){

    var clickResponsivo = false;

    $('.burger').click(function(){
        if(!clickResponsivo){
         $(this).addClass('is-active');
         $('.navbar-menu').addClass('is-active');
         clickResponsivo = !clickResponsivo;
        }else{
         $('.navbar-menu').removeClass('is-active');
         $(this).removeClass('is-active');
         clickResponsivo = !clickResponsivo;
        }
    });
});
