$(document).ready(function() {
	$('.js--sobre').waypoint(function(direction) {
		if (direction == 'down') {
			$('nav').addClass('sticky');
		} else {
            $('nav').removeClass('sticky');
		}
	}, {
        offset: '75%'
      });
});
