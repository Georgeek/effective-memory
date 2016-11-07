var main = function() {
	$('.more-btn').click(function(){
    $(this).next().toggle();
  });
  $('.share').click(function(){
    $(this).next().toggle();
  });
  $(document).on('click', '.glyphicon-bell', function(){
    $(this).toggleClass('active');
  });
};


$(document).ready(main);