var boxes = {

	events: {
		'on .jiggy-box' : 'handleZipCodeLatLng'
	},

	initialize: function(config) {
		var marginTop = ($('.jiggy-boxes').height() / $('.jiggy-boxes').width()) * 100 / 2;

		$('.jiggy-box').focus();

		$('.jiggy-box').on('keydown.ctrl_q', function(e) {
			console.log(e)
			$('.jiggy-box').css({
				'margin-left': '0',
				'margin-top': '0',
				'width': '50%',
				'height': '50%'
			})
		});

		$('.jiggy-box').on('keydown.ctrl_w', function(e) {
			console.log(e)
			$('.jiggy-box').css({
				'margin-left': '0',
				'margin-top': '0',
				'width': '100%',
				'height': '50%'
			})
		});

		$('.jiggy-box').on('keydown.ctrl_e', function(e) {
			console.log(e)
			$('.jiggy-box').css({
				'margin-left': '50%',
				'margin-top': '0',
				'width': '50%',
				'height': '50%'
			})
		});
		$('.jiggy-box').on('keydown.ctrl_a', function(e) {
			console.log(e)
			$('.jiggy-box').css({
				'margin-left': '0',
				'margin-top': '0',
				'width': '50%',
				'height': '100%',
			})
		});
		$('.jiggy-box').on('keydown.ctrl_s', function(e) {
			console.log(e)
			$('.jiggy-box').css({
				'margin-left': '0',
				'margin-top': '0',
				'width': '100%',
				'height': '100%',
			})
		});
		$('.jiggy-box').on('keydown.ctrl_d', function(e) {
			console.log(e)
			$('.jiggy-box').css({
				'margin-left': '50%',
				'margin-top': '0',
				'width': '50%',
				'height': '100%',
			})
		});
		$('.jiggy-box').on('keydown.ctrl_z', function(e) {
			console.log(e)
			$('.jiggy-box').css({
				'margin-left': '0',
				'margin-top': String(marginTop + '%'),
				'width': '50%',
				'height': '50%',
			})
		});
		$('.jiggy-box').on('keydown.ctrl_x', function(e) {
			console.log(e)
			$('.jiggy-box').css({
				'margin-left': '0',
				'margin-top': String(marginTop + '%'),
				'width': '100%',
				'height': '50%',
			})
		});
		$('.jiggy-box').on('keydown.ctrl_c', function(e) {
			console.log(e)
			$('.jiggy-box').css({
				'margin-left': '50%',
				'margin-top': String(marginTop + '%'),
				'width': '50%',
				'height': '50%',
			})
		});


	}
}



boxes.initialize();