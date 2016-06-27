window.onload = responsivehome;
window.onresize = responsivehome;

function responsivehome(){
  var footer_break = window.matchMedia( "(max-width: 880px)" );
  var projectmenu_break = window.matchMedia( "(max-width: 700px)" );
  var projectmenu_break_2 = window.matchMedia( "(max-width: 485px)" );
  var matched;

  if (footer_break.matches){
    matched = true; 

    $('#navbar--mobile button').on('click', function(e){
      $('#navbar--mobile__links').slideToggle('slow'); 
    });
  }
  
  if (projectmenu_break.matches){
    $('.overlay__text').each(function(index){
      if (!$(this).hasClass('tertiaryproj__text')){
        $(this).addClass('tertiaryproj__text');
      }
    }); 
  }
  else{
    $('.primaryproj .overlay__text').removeClass('tertiaryproj__text');
    $('.secondaryproj .overlay__text').removeClass('tertiaryproj__text');
  }
}; 

/* Smooth scrolling within the same page*/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/* Smooth scrolling if coming from a different page 
$(function(){
  if (window.location.hash){
    scroll(0,0); 

    $('html, body').animate({
    scrollTop: $(window.location.hash).offset().top
    }, 2000);

    return false;
  }
}); */

document.body.onscroll = function(){
  var height = window.innerHeight || document.documentElement.clientHeight ||document.body.clientHeight;
  var mobile = $('#navbar--mobile').css('display'); 

  if (window.scrollY > height && mobile == 'none'){
    $('#navbar--hidden').css('position', 'fixed'); 
    $('#navbar--hidden').css('display', 'block');  
  }
  else{
    $('#navbar--hidden').css('display', 'none');
  }
};


