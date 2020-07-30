$(function(){
	$(function(){
		$('.header-btn').on('click', function(){
			$('.menu__list').slideToggle();
		});
	});
	
	$('.gallery__wrapper').magnificPopup({
		delegate: 'a',
		type:'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});
});