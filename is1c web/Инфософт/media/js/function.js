$(function(){
    $("select").chosen({disable_search_threshold: 10000});
    $('.custom_checkbox input').change(function(){
        if($(this).attr('name')){
            $('.custom_checkbox input[name="'+$(this).attr('name')+'"]').parents('.custom_checkbox').removeClass('checked');
        }
        if($(this).is(':checked')){
           $(this).parents('.custom_checkbox').addClass('checked');
          
        }else {
            $(this).parents('.custom_checkbox').removeClass('checked');
             
        }
    }); 
    $('.front_about_block_slide_btn').click(function(){
        $('.front_about_block_slide').hide();
        $('.'+$(this).data('slide')).fadeIn();    
        
    });
    $('.drop_btn').click(function(){
        $(this).toggleClass('active'); 
        $('.sity_select_drop').fadeToggle(200);   
    });
    $('.front_top_slider_tabs a').click(function(){
        var thisLi = $(this).parents('li');
        if(thisLi.hasClass('active')) return;
        $('.front_top_slider_tabs li').removeClass('active');
        thisLi.addClass('active'); 
        $('.front_top_slider_frame').fadeOut(500);
        $('.'+$(this).attr('rel')).fadeIn(500);
    });
    $('.sity_select_drop li').click(function(){
        if($(this).hasClass('active')) return false;
        
        $('.sity_select_drop li').removeClass('active');
        $(this).addClass('active');
        $('.drop_btn').text($(this).text());
        setTimeout(function(){
            $('.drop_btn').click();    
        }, 500);
    });
    $('.tabs li').click(function(){
        if($(this).hasClass('active')) return false;
        
        $(this).parents('.tabs').find('li').removeClass('active');
        $(this).addClass('active');
    });
    $('.tabs_block_head li a').click(function(){
       if($(this).parents('li').hasClass('active')) return false;
       
       var wrap = $(this).parents('.tabs_block'),
            li =  $(this).parents('li'),
            index = li.index();
       wrap.find('li').removeClass('active');
       li.addClass('active'); 
       wrap.find('.tabs_block_item').hide().eq(index).show();
    });
    $('.auth_go_registr').click(function(){
        $('.login_block').hide(); 
        $('.registration_block').fadeIn();   
    });
    $('.auth_go_login').click(function(){
        $('.registration_block').hide(); 
        $('.login_block').fadeIn();   
    });
    $('.close_btn, .close_zone').click(function(){
        $('.popup').fadeOut()
    });
    $('.cabinet_link').click(function(){
        $('.auth_popup').fadeIn();
    });
    $('.sitemap_btn').click(function(){
        $(this).toggleClass('active');
        $('.sitemap_bg, .sitemap_block').fadeToggle();
        $('.content_nav_block').toggleClass('fade_sitemap');
    });
    $('.sitemap_bg_close_zone, .sitemap_close').click(function(){
        $('.sitemap_btn').removeClass('active');
        $('.sitemap_block').fadeOut();
        $('.content_nav_block').removeClass('fade_sitemap');
        $('.popup').fadeOut();
    });
    $('.year_nav a').click(function(){
        if($(this).parents('li').hasClass('active')) return false;
        var top = $('#'+$(this).attr('rel')).offset().top;
        $('body, html').animate({
            scrollTop: top - 40
        }, 500);
    });
    $('.left_priducts_menu a').click(function(e){
        e.preventDefault();
        if($(this).parents('div').hasClass('active')) return false;
        var top = $('#'+$(this).attr('rel')).offset().top;
        $('body, html').animate({
            scrollTop: top - 40
        }, 500);
    });
    $('.vacancies_item h2 a').click(function(){
        var vih = $(this).parents('.vacancies_item').find('.vacancies_item_hide');
        $(this).toggleClass('up');
        $('.vacancies_item h2 a').not($(this)).removeClass('up');
        $('.vacancies_item_hide').not(vih).slideUp();
        vih.slideToggle();   
    });
    $('.contacts_left h3 a').click(function(){
        if($(this).parents('li').hasClass('active')) return false;
        
        $('.contacts_left li').removeClass('active');
        $(this).parents('li').addClass('active');
        
    });
    $(document).on("click", function(e) {
        var coller = $(e.target).closest('.sity_select');
        var coller2 = $(e.target).closest('.table_head_filter');
        
        if ((coller.length) == 0) {
            if ($('.drop_btn').hasClass('active')) {
                    $('.drop_btn').removeClass('active'); 
                    $('.sity_select_drop').fadeOut(200);
            }
        }
        if ((coller2.length) == 0) {
            if ($('.table_head_filter.active').length) {
                    $('.table_head_filter.active').removeClass('active').find('.table_head_filter_drop').fadeOut(400);
            }
        }
    });
    $('.table_head_filter>a').click(function(e){
        e.preventDefault();
        var par = $(this).parents('.table_head_filter')
        $('.table_head_filter.active').not(par).removeClass('active').find('.table_head_filter_drop').fadeOut(400);
        par.toggleClass('active').find('.table_head_filter_drop').fadeToggle(400);
    });
    $('.table_filter_save').click(function(){
        $(this).parents('.table_head_filter').toggleClass('select');
    });
    $('.pc_video_column_img').click(function(){
        $('.video_popup').fadeIn();    
    });
    $('.fotorama_content').fotorama({
        width: '100%',
        fit: 'cover',
        ratio: 2     
    });
    
    
    
    var $fotoramaReviewDiv = $('.reviews_block_buble_fotorama').fotorama({
        width: '100%',
        height: 130,
        ratio: 2/1,
        nav: false,
        arrows: false
    }).on(
      'fotorama:show fotorama:showend',
      function (e, fotorama, extra) {
        //console.log(fotorama.activeIndex + 1, fotorama.size);
        $('.reviews_block_buble_count').text(fotorama.activeIndex + 1 + '/' + fotorama.size)
      }
    );  
    
    
    window.fotoramaReview = $fotoramaReviewDiv.data('fotorama'); 
    
    $(window).resize(function(){
        fotoramaReview.setOptions({
          height: ($(fotoramaReview.activeFrame.$stageFrame[0]).find('.reviews_block_buble_fotorama_frame').height() + 30)
        });
    });
    
    $(document).scroll(function(){
        if($('.year_nav').length){
           if($(document).scrollTop() + 40 >= $('.year_nav').offset().top){
                $('.year_nav ul').addClass('fix');
           } else {
                $('.year_nav ul').removeClass('fix');
           }
           function currentYear() {
            	var min = Infinity,
            		minIndex = 0;
            	$('.year_block').each(function(i) {
            		var tTop = $(this).position().top;
            		var sTop = $(document).scrollTop();
            		var current = parseInt(sTop - tTop);
            		current = Math.abs(current);
            		if (current < min) {
            			minIndex = i;
            			min = current;
            		}
            		//console.log(current, i)  
            	});
            	$('.year_nav li').not($('.year_nav li').eq(minIndex).addClass('active')).removeClass('active');
            }
            currentYear();
        }
        if($('.left_priducts_menu').length){
            if($(document).scrollTop() + 40 >= $('.content_left').offset().top){
                $('.left_priducts_menu').addClass('fix');
            } else {
                $('.left_priducts_menu').removeClass('fix');
            }
            function currentProduct() {
            	var min = Infinity,
            		minIndex = 0;
            	$('.products_item').each(function(i) {
            		var tTop = $(this).position().top;
            		var sTop = $(document).scrollTop();
            		var current = parseInt(sTop - tTop);
            		current = Math.abs(current);
            		if (current < min) {
            			minIndex = i;
            			min = current;
            		}
            		//console.log(current, i)  
            	});
            	$('.left_priducts_menu li').not($('.left_priducts_menu li').eq(minIndex)).find('div').removeClass('active');
                $('.left_priducts_menu li').eq(minIndex).find('div').addClass('active')
            }
            currentProduct();
        }
        
        if($('.contacts_right').length){
            if($(document).scrollTop() + 40 >= $('.contacts_right').offset().top){
                $('.map_wrap').addClass('fix').css({'width':  $('.contacts_right').width()});
            } else {
                $('.map_wrap').removeClass('fix').css({'width':  $('.contacts_right').width()});
            }
            if($(document).scrollTop() + 585 > $(document).height() - 480){
                $('.map_wrap').css({'margin-top': -(($(document).scrollTop() + 585) - ($(document).height() - 480))});
            } else {
                $('.map_wrap').css({'margin-top': 0});
            }
            
            
        }
    });
});