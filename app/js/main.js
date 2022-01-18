
$(document).ready(function () {
	$('.slider__inner').slick({
		speed: 900,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false,
					infinite: true,
					dots: true
				}
			},
		]

	});

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	}); '.'

	$('.catalog-item__link').each(function (i) {
		$(this).on('click', function (e) {
			e.preventDefault();
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		})
	})

	$('.catalog-item__back').each(function (i) {
		$(this).on('click', function (e) {
			e.preventDefault();
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		})
	})

	// modal
	$('[data-modal=consultation]').on('click', function () {
		$('.overline,  #consultation').fadeIn(400);
	});

	$('.modal__close').on('click', function () {
		$('.overline, #consultation, #order, #thinks').fadeOut(300);
	});

	$('.btn_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overline,  #order').fadeIn(400);
		})
	});
});