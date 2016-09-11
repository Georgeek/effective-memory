$(document).ready(function() {
	// BASIC SELECTORS
	// $('#lesson-1').css('border', '4px solid red');
	
	// BASIC ANIMATIONS
	// $('.box:first').animate({height:'200px'}, 300);
	
	// INDEX FILTERS
	//$('p:eq(2)').css('border', '4px solid red');
	// выделяет второй параграф и дает ему рамку - eq - equal
	// last - последний, gt(2) - greater then 2, lt(2) - последние 2

	// RELATIONSHIP FILTERS
	// $('h2:has(span)').css('border', '4px solid red');

	// ATTRIBUTE FILTERS
	//$('p[name^ = "lead"]').css('border', '4px solid red');
	// name^="lea" - находит любое имя в свойствах параграфа, начинающееся на LEA
	// a[href$ = "co.uk"] - находит все ссылки с co.uk в конце 

	//ATTRIBUTE METHOD
	// alert($('p:first').attr('class', 'not-lead'));

	// IMG SWAP
	// $('img').attr('src', 'img2.jpg');
	// $('img').dalay(400).fadeOut(500, function(){
	//	$(this).attr('src', 'img2.jpg').fadeIn(500);
	// });

	// CLASS METHODS
	// $('p:last').hasClass('lead');
	// $('p:last').addClass('lead').removeClass('lead');
	// $('p:last').toggleClass('lead').removeClass('lead');

	// CONTENT METHODS
	// $('p:first').text('Hey you guys!'); // - можно менять текст, но теги использовать не получится
	// $('p:first').html('Hey you <em>guys!</em>'); //- можно использовать теги и менять текст

	// DOM TRAVERSAL
	// $('h2').parents('section').css('border', '4px solid red');
	// <section> - родители. Все h2 в родительском, применяем правило css

	// EVENT BINDING
	$('h2').bind('click', function(){
		$(this).toggleClass('blue');
	});
	$('h2').click(function(){
		$(this).toggleClass('blue');
	});
	$('h2').hover(function(){
		$(this).toggleClass('blue');
	});
	$('h2').keypress(function(){
		$(this).toggleClass('blue');
	}); // 



});