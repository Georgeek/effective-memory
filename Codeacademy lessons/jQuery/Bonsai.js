var main = function() {
	$('#top-text').keyup(function(){
    var newText = $('input[id="top-text"]').val();
    $('.top-caption').text(newText);
  });
  	$('#bottom-text').keyup(function(){
    var newText = $('input[id="bottom-text"]').val();
    $('.bottom-caption').text(newText);
  });
  	$('#image-url').keyup(function(){
    var newText = $('input[id="image-url"]').val();
    $('img').attr("src", newText);
  });
};
 
$(document).ready(main);