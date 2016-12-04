$(function(){ "use strict";
    	$('#Grid').mixItUp({
    	animation: {
    		duration: 800,
    	}
    });
    });

		$(window).load(function () { "use strict";
        $('.loading').fadeOut();

		//Slider tabs
		if ($('.w-slider-tabs').length){

			$('.w-slider-tabs').each(function(index) {
				var obj = $(this);
                obj.addClass('slider-tab-section-'+index);

				obj.find('.w-tab-pane').each(function(slide) {
					$(this).attr('data-w-tab', 'Tab '+slide);
					$(this).addClass('tab-'+slide)
            	});
				obj.find('.w-tab-link').each(function(slide) {
					$(this).attr('data-w-tab', 'Tab '+slide);
					$(this).addClass('tab-'+slide)
				});
			});
			$('.w-slider-tabs .w-tab-link.tab-0').addClass('w--current');
			$('.w-slider-tabs .w-tab-pane.tab-0').addClass('w--tab-active');
		}

		//Slider
		$('.w-slider-mask.yes').height($(window).height());

		$(window).resize(function() {
            $('.w-slider-mask.yes').height($(window).height());
        });

		//Blog Masonry
        if( $('.container-masonry').length > 0 ){
            var $container = document.querySelector('.container-masonry');
             var msnry = new Masonry( $container, {
                  itemSelector: '.news-item',
                  columnwidth: '.news-item',
                  gutter: ".gutter-sizer"
                });
        }

		//Blog gallery
		if ($('.div-spc.spc .blog-slider').length && $('.div-spc.spc .gallery').length){
			var new_slider = $('.div-spc.spc .blog-slider');
			$('.div-spc.spc .gallery').html(new_slider);
		}

    });
