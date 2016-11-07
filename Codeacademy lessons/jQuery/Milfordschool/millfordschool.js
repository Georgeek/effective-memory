var main = function() {
  $('img').click(function(){
    $('.dropdown-menu').toggle();
  });

  $('form').submit(function(){
      
    
    var email = $('#email').val();
    var password = $('#password').val();
  
    if(password === "") {
          $('.password-error').text("Please enter your password");
        } 
    if(email === "") {
          $('.email-error').text('Please enter your email');
    }
    return false;
  });
};

$(document).ready(main);