(function() {

	var marginTop = ($('.jiggy-boxes').height() / $('.jiggy-boxes').width()) * 100 / 2;
	var marginTop75 = ($('.jiggy-boxes').height() / $('.jiggy-boxes').width()) * 100 / 1.25;

	$('.jiggy-boxes').css({
		'position': 'fixed'
	})
	$('.jiggy-box').attr('tabindex', '1');
	$('.jiggy-box').css({
		'position': 'absolute',
		'margin-left': '75%',
		'width': '25%',
		'height': '25%',
		'margin-top': String(marginTop75 + '%')
	})

	$('.jiggy-box').on('click', function() {
		$(this).focus();

		$('.jiggy-box').css({
			'z-index': 0
		});

		$(this).on('keydown.ctrl_q', function(e) {
			console.log(e)
			$(this).css({
				'margin-left': '0',
				'margin-top': '0',
				'width': '50%',
				'height': '50%',
				'z-index': 1
			})
		});

		$(this).on('keydown.ctrl_w', function(e) {
			console.log(e)
			$(this).css({
				'margin-left': '0',
				'margin-top': '0',
				'width': '100%',
				'height': '50%',
				'z-index': 1
			})
		});

		$(this).on('keydown.ctrl_e', function(e) {
			console.log(e)
			$(this).css({
				'margin-left': '50%',
				'margin-top': '0',
				'width': '50%',
				'height': '50%',
				'z-index': 1
			})
		});
		$(this).on('keydown.ctrl_a', function(e) {
			console.log(e)
			$(this).css({
				'margin-left': '0',
				'margin-top': '0',
				'width': '50%',
				'height': '100%',
				'z-index': 1
			})
		});
		$(this).on('keydown.ctrl_s', function(e) {
			console.log(e)
			$(this).css({
				'margin-left': '0',
				'margin-top': '0',
				'width': '100%',
				'height': '100%',
				'z-index': 1
			})
		});
		$(this).on('keydown.ctrl_d', function(e) {
			console.log(e)
			$(this).css({
				'margin-left': '50%',
				'margin-top': '0',
				'width': '50%',
				'height': '100%',
				'z-index': 1
			})
		});
		$(this).on('keydown.ctrl_z', function(e) {
			console.log(e)
			$(this).css({
				'margin-left': '0',
				'margin-top': String(marginTop + '%'),
				'width': '50%',
				'height': '50%',
				'z-index': 1
			})
		});
		$(this).on('keydown.ctrl_x', function(e) {
			console.log(e)
			$(this).css({
				'margin-left': '0',
				'margin-top': String(marginTop + '%'),
				'width': '100%',
				'height': '50%',
				'z-index': 1
			})
		});
		$(this).on('keydown.ctrl_c', function(e) {
			console.log(e)
			$(this).css({
				'margin-left': '50%',
				'margin-top': String(marginTop + '%'),
				'width': '50%',
				'height': '50%',
				'z-index': 1
			})
		});
	});


})();