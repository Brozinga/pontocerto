$(document).ready(function(){

    //Executando o menu responsivo.
      var clickResponsivo = false;

      $('.burger').click(function(){
          if(!clickResponsivo){
           $(this).addClass('is-active');
           $('.navbar-menu').addClass('is-active');
           $('.exitInfo').show();
           clickResponsivo = !clickResponsivo;
          }else{
           $('.navbar-menu').removeClass('is-active');
           $(this).removeClass('is-active');
           $('.exitInfo').hide();
           clickResponsivo = !clickResponsivo;
          }
      });
  });
