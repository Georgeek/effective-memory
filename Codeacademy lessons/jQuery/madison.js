var main = function() {
  $('.cart').click(function(){
    $('.account .dropdown-menu', 'help .dropdown-menu').hide();
    $('.cart .dropdown-menu').toggle();
  });
    $('.account').click(function(){
    $('.cart .dropdown-menu', 'help .dropdown-menu').hide();
    $('.account .dropdown-menu').toggle();
  });
    $('.help').click(function(){
    $('.account .dropdown-menu', 'cart .dropdown-menu').hide();
    $('.help .dropdown-menu').toggle();
  });
};

$(document).ready(main);