window.onload = responsive;
window.onresize = responsive;

function responsive(){
  var mq1050 = window.matchMedia( "(max-width: 1050px)" );
  var mq880 = window.matchMedia( "(max-width: 880px)" );

  if (mq1050.matches){
    $(".contact > a").contents().filter(function () {
     return this.nodeType === 3; 
    }).remove();

    $('.heading > .contact img').addClass('icon'); 
    $('.heading > .contact img:first-child').css('margin', '5px'); 
  }
  else{
    $('.heading > .contact img').removeClass('icon'); 
    $('.heading > .contact img:first-child').css('margin', '15px'); 

    if (!$('.heading > .contact a').text().trim().length) {
      $('.heading > .contact a:first-child').append("Download Resume"); 
      $('.heading > .contact a:last-child').append("LinkedIn Profile"); 
    }
  }

  if (mq880.matches){
    $('#navbar--mobile button').on('click', function(e){
      $('#navbar--mobile__links').slideToggle('slow'); 
    });
  }
} 
