$(function() {
	var now = 0,
		pos = 0,
		pageWidth = 0,
		win = $(window),
		page = $('.page'),
		// mask = $('.mask'),
		wrap = $('#wrap'),
		pageWrap = $('.page-wrap'),
		menu = $('.overview-menu'),
		menuLi = $('.overview-menu li'),
		mainInfo = $('.main-info');
		// mainInfoHeight;

	//==滿版========================================

	function full() {
		pageWidth = win.innerWidth();

		wrap.css({width: pageWidth});

		if(pageWidth >= 800) {
			pageWidth = 800;
		}

		// mask.css({width: pageWidth});

		pageWrap.css({width: pageWidth*3});

		page.css({width: pageWidth});

		mainInfoHeight = page.eq(now).height();
		// console.log(mainInfoHeight);
		mainInfo.css({height: mainInfoHeight + 70});

		for(var i = 0; i < menuLi.length; i++) {
			page.eq(i).css({left: i * pageWidth});
			// console.log(i);
		}

	}

	full();

	//==點擊overview-menu========================================

	menuLi.on('touchstart click', gogo);

	function gogo() {
		now = $(this).index();
		move();

		mainInfoHeight = page.eq(now).height();
		// console.log(mainInfoHeight);
		mainInfo.css({height: mainInfoHeight + 70});
	}


	function move() {
		pageWidth = win.innerWidth();
		if(pageWidth >= 800) {
			pageWidth = 800;
		}
		menuLi.removeClass('selected');
		menuLi.eq(now).addClass('selected');
		page.eq(now).css({'z-index': 9});
		page.eq(now).siblings().css({'z-index': 1});
		// page.eq(now).css({'display': 'block', 'z-index': 9});
		// page.eq(now).siblings().css({'display': 'none', 'z-index': 1});
		pos = now * pageWidth * -1;
		// pageWrap.animate({left: pos}, 300);
		// pageWrap.animate({left: pos}, 300);
		// pageWrap.transition({ x: pos }, 300); 
		pageWrap.css(
			'transform', 'translateX('+ pos +'px)'
		);
		event.preventDefault();
		
	}

	//==旋轉手機畫面===============================================

	win.on('orientationchange resize', rotate);
	function rotate() {
		full();
		pos = now * pageWidth * -1;
		// pageWrap.animate({left: pos}, 300);
		// pageWrap.transition({ x: pos }, 300);
		pageWrap.css(
			'transform', 'translateX('+ pos +'px)'
		); 
	}


	// fixed
	var overviewMenu = $('.overview-menu');
		overviewMenuTop = $('.main-info').offset().top;

	$(window).resize(function() {
		overviewMenuTop = $('.main-info').offset().top;
		// console.log('aa');
	});

	$(window).scroll(function() {
		winTop = $(window).scrollTop();
		overviewMenuTop = $('.main-info').offset().top;

		// header_animate( null );

		if(winTop >= overviewMenuTop){
			overviewMenu.css({
				'position': 'fixed',
				'top': 0,
				'left': 0,
				'max-width': '800px',
				'z-index': 999,
				'background': 'rgba(2, 22, 44, 1)'
			});
			// $('.page-wrap').css(
			// 	'margin-top', '70px'
			// )
		}else{
			overviewMenu.css({
				'position': 'absolute',
			    'background': 'rgba(0, 0, 0, 0.7)'
			});
			// $('.page-wrap').css(
			// 	'margin-top', '0'
			// )

			// $("p").css("color","red");
		}
	});	

	// $('.B_btn').click(function() {
	// 	$('.google-table').slideToggle();
	// });

	$('.job-list li a').click(function() {
		var index = $(this).parent('li').index();
		var scrollTop = $('.job section').eq(index).offset().top;
		$('html, body').animate({scrollTop: (scrollTop - 78)}, 500);
		// console.log(scrollTop);
	});
	$('.job h2 .back-job-list').click(function() {
		var back_job_list = $('.job-list-title').offset().top;
		$('html, body').animate({scrollTop: (back_job_list - 78)}, 500);
	});





});