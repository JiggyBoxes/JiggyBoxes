(function() {

	// GIVES HANDLES TO JIGGY-BOX FOR RESIZING IN ALL DIRECTIONS
	var resizeOpts = {
	  handles: "all"
	}

	// INITIALIZE JIGGY-BOXES
	$('.jiggy-boxes')
		.css({
			'background': '#efefef',
			'box-sizing': 'border-box',
			'height': '100vh',
			'overflow': 'auto',
			'position': 'relative',
			'width': '100vw'
		});

	// INITIALIZE JIGGY-BOX-WRAPPER 
	$('.jiggy-box-wrapper')
		.css({
			'box-sizing': 'border-box',
			'padding': '0.1rem',
			'bottom': '2.5%',
			'height': '15%', 
			'position': 'absolute',
			'right': '2.5%',
			'width': '15%'
		})

	// INITIALIZE JIGGY BOX
	$('.jiggy-box')
		.css({
			'box-sizing': 'border-box',
			'height': '100%',
			'width': '100%'
		});

	// PROPERTIES FOR JIGGY-BOX CLICKED
	$('.jiggy-box-wrapper').on('click', function() {
		$(this).focus();

		$(this).resizable(resizeOpts, { containment: '.jiggy-boxes' });

		$(this).draggable({ containment: '.jiggy-boxes' });

		$('.jiggy-box-wrapper').css({
			'z-index': '0'
		})

		$(this).css({
			'outline': 'none',
			'z-index': '1'
		});

		$(this).find('.jiggy-box').css({
			'border': '2px solid black',
		});

		// POSITIONING - TOP LEFT
		$(this).on('keydown.ctrl_q', function(e) {
			console.log(e)
			$(this).css({
				'top': '0',
				'left': '0',
				'height': '50%',
				'width': '50%',
				'z-index': 1
			})
		});

		// POSITIONING - TOP HALF
		$(this).on('keydown.ctrl_w', function(e) {
			console.log(e)
			$(this).css({
				'top': '0',
				'left': '0',
				'height': '50%',
				'width': '100%',
				'z-index': 1
			})
		});

		// POSITIONING - TOP RIGHT
		$(this).on('keydown.ctrl_e', function(e) {
			console.log(e)
			$(this).css({
				'top': '0',
				'left': '50%',
				'height': '50%',
				'width': '50%',
				'z-index': 1
			})
		});

		// POSITIONING - LEFT HALF
		$(this).on('keydown.ctrl_a', function(e) {
			console.log(e)
			$(this).css({
				'top': '0',
				'left': '0',
				'height': '100%',
				'width': '50%',
				'z-index': 1
			})
		});

		// POSITIONING - FULL SCREEN
		$(this).on('keydown.ctrl_s', function(e) {
			console.log(e)
			$(this).css({
				'top': '0',
				'left': '0',
				'height': '100%',
				'width': '100%',
				'z-index': 1
			})
		});

		// POSITIONING - RIGHT HALF
		$(this).on('keydown.ctrl_d', function(e) {
			console.log(e)
			$(this).css({
				'top': '0',
				'left': '50%',
				'height': '100%',
				'width': '50%',
				'z-index': 1
			})
		});

		// POSITIONING - BOTTOM LEFT
		$(this).on('keydown.ctrl_z', function(e) {
			console.log(e)
			$(this).css({
				'top': '50%',
				'left': '0',
				'height': '50%',
				'width': '50%',
				'z-index': 1
			})
		});

		// POSITIONING - BOTTOM HALF
		$(this).on('keydown.ctrl_x', function(e) {
			console.log(e)
			$(this).css({
				'top': '50%',
				'left': '0',
				'height': '50%',
				'width': '100%',
				'z-index': 1
			})
		});

		// POSITIONING - BOTTOM RIGHT
		$(this).on('keydown.ctrl_c', function(e) {
			console.log(e)
			$(this).css({
				'left': '50%',
				'top': '50%',
				'height': '50%',
				'width': '50%',
				'z-index': 1
			})
		});
	});


})();