window.onload = responsive;
window.onresize = responsive;

function responsive(){
  var mq880 = window.matchMedia( "(max-width: 880px)" );

  if (mq880.matches){ 

    $('#navbar--mobile button').on('click', function(e){
      $('#navbar--mobile__links').slideToggle('slow'); 
    });
  }
}; 