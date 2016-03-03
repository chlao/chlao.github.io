window.onload = responsive;
window.onresize = responsive;

function responsive(){
	var mq = window.matchMedia( "(max-width: 1550px)" );
  var mq775 = window.matchMedia( "(max-width: 775px)" );
  var mq450 = window.matchMedia( "(max-width: 450px)" );
  var matched;

  if (mq.matches) {
    /* Remove 'Contact Me'*/
    document.querySelector('.contact h2').innerHTML = '';
  } 
  else{
    document.querySelector('.contact h2').innerHTML = 'Contact Me';
  }

  if (mq775.matches){
    matched = true; 
    // Remove Name 
    document.querySelectorAll('.footer > h2')[0].innerHTML = ''; 

    // Hide navigation menus
    $('.navbar').css('display', 'none');

    $('#mobilenav').css('display', 'block');
    $('#mobilenav').css('position', 'fixed');

    $('button').on('click', function(e){
      $('#mobilelinks').slideToggle('slow'); 
    });
  }
  else{
    document.querySelectorAll('.footer > h2')[0].innerHTML = 'Christine Lao'; 
    $('.navbar').css('display', 'none');
    $('#hiddennav').css('display', 'block');
  }

  if (mq450.matches){
    $('.thirdproj .overlay').css('width','278px');
    $('.thirdproj .overlay').css('height','276px');
  }
	
  // Show onpage menu
  if (!matched){
    $('#hiddennav').css('display', 'block');
  }
}; 