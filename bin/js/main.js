$(document).ready(function() {
	$(document).ready(function () {
		load();
 	});

 	$('.grid-btn').click(function() {
 		if ($('.tracks').hasClass('list')) {
 			$('.tracks').removeClass('list').addClass('grid');
 			$('.grid-btn').removeClass('list').addClass('grid');
 		} else {
 			$('.tracks').removeClass('grid').addClass('list');
 			$('.grid-btn').removeClass('grid').addClass('list');
 		}
 	});

 	$('a.nav').click(function() {
 		var direct = $(this).attr('href');
 		event.preventDefault();
 		$('.loading-box').fadeIn('500ms');
 		setTimeout(function() {
 			window.location = direct;
 		},500);
 	});

 	// Mouse
	$(document).mousemove(function(e) {
	    $('.cursor').eq(0).css({ left: e.pageX, top: e.pageY });
	});
	$('a,.select').mouseenter(function() {
		cur_hover('enter');
	});
	$('a,.select').mouseleave(function() {
		cur_hover('exit');
	});
});

function cur_hover(e) {
	if (e=="enter") {
		$('.cursor').css({
			transform: 'translate(-50%,-50%) scale(3)',
			background: '#fff'
		});
	} else {
		$('.cursor').css({
			transform: 'translate(-50%,-50%) scale(1)',
			background: 'transparent'
		});
	}
}

function load() {
	$('.loader-bar').css('width','100%');
	$('.elements p').css('opacity','1');
	$('.progress').css('width','100%');

	setTimeout(function(){
		$('.l-e-text').css('-webkit-transform','translateY(40px)');
		$('.content').css('display', 'block');
		$('.loader-bar').css('width','0%');
	},800);

	//Complete
	setTimeout(function(){
		$('.loading-box').fadeOut();
	},1400);
}