(function($) {
	$(function() {
		setButton();
	});

	function setButton() {
		$('.other li').on('click', function() {
			$('.other li').removeClass('active');
			$(this).addClass('active');
			if ( $(this).index() === 0 ) {
				$('.related-video').show();
				$('.message').hide();
			} else {
				$('.related-video').hide();
				$('.message').show();
			}
		});
	}
})(jQuery);