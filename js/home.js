window.onload = responsivehome;
window.onresize = responsivehome;

function responsivehome(){
	var mq = window.matchMedia( "(max-width: 1550px)" );
  var mq775 = window.matchMedia( "(max-width: 775px)" );
  var mq650 = window.matchMedia( "(max-width: 650px)" );
  var mq450 = window.matchMedia( "(max-width: 450px)" );
  var matched;


  if (mq.matches) {
    /* Adjust overlay position for thirdprojects */
    var thirdprojs = document.querySelectorAll('.thirdproj .overlay'); 

    thirdprojs[0].style.left = '10px'; 
    thirdprojs[0].style.top = '10px'; 

    thirdprojs[1].style.left = '10px'; 
    thirdprojs[1].style.top = '10px'; 

    /* Remove 'Contact Me'*/
    document.querySelector('.contact h2').innerHTML = '';
  } 
  else{
    var thirdprojs = document.querySelectorAll('.thirdproj .overlay'); 

    thirdprojs[0].style.left = '-595px'; 
    thirdprojs[0].style.top = '10px'; 

    thirdprojs[1].style.left = '-297px'; 
    thirdprojs[1].style.top = '10px'; 

    document.querySelector('.contact h2').innerHTML = 'Contact Me';
  }

  if (mq775.matches){
    matched = true; 
    // Remove name 
    $('.footer > h2').css('display', 'none'); 

    // Hide navigation menus
    $('.navbar').css('display', 'none');

    $('#mobilenav').css('display', 'block');
    $('#mobilenav').css('position', 'fixed');

    $('button').on('click', function(e){
      $('#mobilelinks').slideToggle('slow'); 
    });
  }
  else{
    $('.footer > h2').css('display', 'inline-block'); 
    $('.navbar').css('display', 'none');
    $('.onpage').css('display', 'block');
  }

  if (mq450.matches){
    $('.thirdproj .overlay').css('width','278px');
    $('.thirdproj .overlay').css('height','276px');
  }
  
  if (mq650.matches){
    /* Adjust overlay */ 
    $('.thirdproj .overlay').css('width','410px');
    $('.thirdproj .overlay').css('height','310px');

    $('.overlaytext').addClass('smallertext');
  }
  else{
    $('#mainproj .overlaytext').removeClass('smallertext');
    $('#secondproj .overlaytext').removeClass('smallertext');
    $('.thirdproj .overlay').css('width','278px');
    $('.thirdproj .overlay').css('height','276px');
  }

  if (mq450.matches){
    $('.thirdproj .overlay').css('width','278px');
    $('.thirdproj .overlay').css('height','276px');
  }

  // Show onpage menu
  if (!matched){
    $('.onpage').css('display', 'block');
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

/* Smooth scrolling if coming from a different page */
$(function(){
  if (window.location.hash){
    scroll(0,0); 

    $('html, body').animate({
    scrollTop: $(window.location.hash).offset().top
    }, 2000);

    return false;
  }
});

document.body.onscroll = function(){
  var height = window.innerHeight || document.documentElement.clientHeight ||document.body.clientHeight;
  var mobile = $('#mobilenav').css('display'); 

  if (window.scrollY > height && mobile == 'none'){
    document.getElementsByClassName('navbar')[0].style.position = 'fixed'; 
    $('#hiddennav').css('display', 'block');  
  }
  else{
    $('#hiddennav').css('display', 'none');
  }
};


