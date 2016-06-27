window.onload = responsive;
window.onresize = responsive;

function responsive(){
  var mq880 = window.matchMedia( "(max-width: 880px)" );
  var matched;

  if (mq880.matches){
    matched = true; 

    $('#navbar--mobile button').on('click', function(e){
      $('#navbar--mobile__links').slideToggle('slow'); 
    });
  }
}; 