window.onload = responsive;
window.onresize = responsive;

function responsive(){
	var mq = window.matchMedia( "(max-width: 1550px)" );
  var mq775 = window.matchMedia( "(max-width: 775px)" );
  var mq450 = window.matchMedia( "(max-width: 450px)" );
  var mq1050 = window.matchMedia( "(max-width: 1050px)" );
  var matched;

  if (mq.matches) {
    /* Remove 'Contact Me'*/
    document.querySelector('.contact h2').innerHTML = '';
  } 
  else{
    document.querySelector('.contact h2').innerHTML = 'Contact Me';
  }

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

  if (mq775.matches){
    matched = true; 
    // Remove Name 
    document.querySelectorAll('.footer > h2')[0].innerHTML = ''; 

    // Hide navigation menus
    $('#hiddennav').css('display', 'none');

    $('#mobilenav').css('display', 'block');
    $('#mobilenav').css('position', 'fixed');

    $('button').on('click', function(e){
      $('#mobilelinks').slideToggle('slow'); 
    });

    // Resume heading 

  }
  else{
    document.querySelectorAll('.footer > h2')[0].innerHTML = 'Christine Lao'; 
    $('.navbar').css('display', 'none');
    $('#hiddennav').css('display', 'block');
  }

  // Show onpage menu
  if (!matched){
    $('#hiddennav').css('display', 'block');
  }
}; 
