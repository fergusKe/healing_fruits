

$(function() {
    FastClick.attach(document.body);
});

$(function() {
	// 載入template
	// $('header').load('../../template.html header>div', function() {
		var fix_header = 1;
		$('#menuBtn').click(function() {
			// $('body').toggleClass('active');
			// $('nav').toggleClass('show');
			// $('#menuBtn').toggleClass('active');
			// $('body').toggleClass('scroll-hidden');
			

			// fix_header++;
			// header_animate( fix_header % 2 == 0 )
		});
		$('nav .nav-list a').click(function() {
			$('#menuBtn').click();
		});

		$(".menu-swiper-container .swiper-slide").click(function() {
    		var text = $(this).text();
    		$('header .subpage').css(
    			'display', 'inline-block'
    		);
    		$('header .subpage span').text(text);

    		$(".menu-swiper-container .swiper-slide").removeClass('active');
    		$(this).addClass('active');
    	});
	// });
	// $('.phone-icon').load('../../template.html .phone-icon>li', function() {
		$('.social, .like, .fb-rank').click(function(event) {
	      event.preventDefault();
	      event.stopPropagation();
	      return $.growl.error({
	      	title: '',
	        message: "尚未開放，敬請期待！"
	      });
	    });
	// });
	// $('.pop-item nav').load('../../template.html nav>div');

	

	$('.association .plus').click(function() {
		$('.association-link-all').addClass('show');
		$('body').addClass('scroll-hidden');
	});
	$('.association-link-closeBtn, .association-link-cancelBtn').click(function() {
		$('.association-link-all').removeClass('show');
		$('body').removeClass('scroll-hidden');
	});

	// (function(){

		var winTop = $(window).scrollTop(),
			temp = $(window).scrollTop();
			menu_move = 0,
			header_move = 0;

		$(window).scroll(function() {
			winTop = $(window).scrollTop();

			// header_animate( fix_header % 2 == 0 );


			// if( winTop <= 0 ) {
			// 	$('header').css(
			// 		'position', 'relative'
			// 	)
			// 	$('.menu').css(
			// 		'z-index', '5'
			// 	)
			// 	$('main').css(
			// 		'margin-top', '35px'
			// 	)
			// }else {
			// 	$('header').css(
			// 		'position', 'fixed'
			// 	)
			// 	$('.menu').css(
			// 		'z-index', '-1'
			// 	)
			// 	$('main').css(
			// 		'margin-top', '80px'
			// 	)
			// }
		});	

		function header_animate(stop) {
			if(winTop >60) {
				if(stop == true) {
					// console.log(stop);
					return
				}else {
					if( ( winTop - temp ) >= 60 ){
						$('header').css(
							'transform', 'translateY(-90px)'
						)
						$('.info-header .user').removeClass('selected');
						temp = winTop;
					} else if( ( winTop - temp ) <= -60 ){
						$('header').css(
							'transform', 'translateY(0)'
						)
						temp = winTop;
					}
					// console.log(stop);
				}
			}else {
				$('header').css(
					'transform', 'translateY(0)'
				)
			}
			
		}

		// $("#accordion .panel .panel-heading").click(function() {

		// 	$("#accordion .panel.open").removeClass('open');

  //   		if($(this).parent('.panel').hasClass('open')) {
  //   			$(this).parents('.panel').removeClass('open');
  //   		} else{
	 //    		$(this).parents('.panel').addClass('open');
  //   		}

  //   	});

    	$('.group h2').click(function() {
    		$(this).siblings('.group-content').slideToggle();
    	});

    	$('.info-header .user').on('click', showDroplist);
    	function showDroplist() {
    		$('.info-header .user').toggleClass('selected');

    		if($(this).hasClass('selected')) {
    			// alert('dd');
    			// $('#wrap').on('click', closeDroplist);
    		}
    		$('main').on('click', closeDroplist);
    	}

    	function closeDroplist() {
    		$('.info-header .user').toggleClass('selected');
    		// alert('aa');

    		$('main').off('click', closeDroplist);
    	}

    	$('.content-menu li').click(function() {
    		$('.content-menu li.selected').removeClass('selected');
    		$(this).addClass('selected');
    	});

    	$('.rank-menu li').click(function() {
    		$('.rank-menu li.selected').removeClass();
    		$(this).addClass('selected');
    	});
    	$('.rank-tag li').click(function() {
    		$('.rank-tag  li.selected').removeClass('selected');
    		$(this).addClass('selected');
    	});

    	var swiper = new Swiper('.swiper-container', {
		    pagination: '.swiper-pagination',
		    slidesPerView: 'auto',
		    centeredSlides: false,
		    paginationClickable: true,
		    spaceBetween: 0,
		    loop: true
		});

		// var swiper = new Swiper('.search-swiper-container', {
		//     pagination: '.swiper-pagination',
		//     slidesPerView: 'auto',
		//     centeredSlides: false,
		//     paginationClickable: true,
		//     spaceBetween: 0
		// });

		// var swiper = new Swiper('.menu-swiper-container', {
		//     pagination: '.swiper-pagination',
		//     slidesPerView: 'auto',
		//     centeredSlides: false,
		//     paginationClickable: true,
		//     spaceBetween: 0
		// });

		// var owl = $("#owl-menu");
 
		// owl.owlCarousel({

		// 	navigation : false,

		// 	itemsCustom : [
		// 		[0, 3],
		// 		[450, 4],
		// 		[600, 5],
		// 		[700, 5],
		// 		[800, 6],
		// 		[1000, 8],
		// 		[1200, 9],
		// 		[1400, 10]
		// 	]

		// });

		



	// })();
});

// Generated by CoffeeScript 1.9.3
//跳出提示字樣
(function() {
  $(function() {
    // $.growl({
    //   title: "Growl",
    //   message: "The kitten is awake!"
    // });
    // $('.publication, .social, .like').click(function(event) {
    //   event.preventDefault();
    //   event.stopPropagation();
    //   return $.growl.error({
    //   	title: '',
    //     message: "尚未開放，敬請期待！"
    //   });
    // });
    // $('.notice').click(function(event) {
    //   event.preventDefault();
    //   event.stopPropagation();
    //   return $.growl.notice({
    //     message: "The kitten is cute!"
    //   });
    // });
    // return $('.warning').click(function(event) {
    //   event.preventDefault();
    //   event.stopPropagation();
    //   return $.growl.warning({
    //     message: "The kitten is ugly!"
    //   });
    // });
  });

}).call(this);
